
import { useEffect, useRef, useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import "./App.css";
import campionLogo from "./assets/campion-logo.png?inline";

import {
  teachers,
  substitutionTeachers,
} from "./data/teachers";

import {
  masterTimetable,
  isTeacherFree,
} from "./data/masterTimetable";

const getLocalDateKey = (date = new Date()) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const readDateStore = (key) => {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : {};
  } catch (error) {
    console.error(`Could not load ${key}:`, error);
    return {};
  }
};

function App() {
  const [activePage, setActivePage] = useState("Dashboard");
  const [selectedDate, setSelectedDate] = useState(
    getLocalDateKey()
  );

  const [showAbsenceModal, setShowAbsenceModal] = useState(false);
  const [showAssignModal, setShowAssignModal] = useState(false);

  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [absenceType, setAbsenceType] = useState("Full Day");

  const [selectedDay, setSelectedDay] = useState("Monday");


  const [timetableView, setTimetableView] = useState("Teacher");


  const [selectedTimetableTeacher, setSelectedTimetableTeacher] = useState("");
  const [selectedTimetableClass, setSelectedTimetableClass] = useState("");

  const [reportType, setReportType] = useState("Daily Substitution Report");
  const [reportDateRange, setReportDateRange] = useState("Today");
  const [reportClass, setReportClass] = useState("All Classes");



  // ========================================================
  // DATE-SPECIFIC LOCAL STORAGE
  // ========================================================

  const [absenceHistory, setAbsenceHistory] = useState(() => {
    const store = readDateStore("campionAbsencesByDate");

    // One-time migration from the older single-day storage.
    if (Object.keys(store).length === 0) {
      try {
        const legacy = JSON.parse(
          localStorage.getItem("campionAbsentTeachers") || "[]"
        );
        if (legacy.length > 0) {
          store[getLocalDateKey()] = legacy;
        }
      } catch (error) {
        console.error("Could not migrate old absence data:", error);
      }
    }

    return store;
  });

  const [substitutionHistory, setSubstitutionHistory] = useState(() => {
    const store = readDateStore("campionSubstitutionsByDate");

    // One-time migration from the older single-day storage.
    if (Object.keys(store).length === 0) {
      try {
        const legacy = JSON.parse(
          localStorage.getItem("campionSubstitutions") || "[]"
        );
        if (legacy.length > 0) {
          store[getLocalDateKey()] = legacy;
        }
      } catch (error) {
        console.error("Could not migrate old substitution data:", error);
      }
    }

    return store;
  });

  const [manualAssignmentHistory, setManualAssignmentHistory] = useState(() =>
    readDateStore("campionManualAssignmentsByDate")
  );

  const [absentTeachers, setAbsentTeachers] = useState(
    () => absenceHistory[selectedDate] || []
  );

  const [substitutions, setSubstitutions] = useState(
    () => substitutionHistory[selectedDate] || []
  );

  const [selectedSubstitution, setSelectedSubstitution] = useState(null);
  const [selectedSubstitute, setSelectedSubstitute] = useState("");

  const [manualDay, setManualDay] = useState("Today");
  const [manualPeriod, setManualPeriod] = useState("");

  const [manualClass, setManualClass] = useState("");
  const [manualTeacher, setManualTeacher] = useState("");

  const [manualReason, setManualReason] = useState("");
  const [manualAssignments, setManualAssignments] = useState(
    () => manualAssignmentHistory[selectedDate] || []
  );


  const [settings, setSettings] = useState(() => {
    const savedSettings = localStorage.getItem("campionSettings");

    if (savedSettings) {
      try {
        return JSON.parse(savedSettings);
      } catch (error) {
        console.error("Could not load saved settings:", error);
      }
    }

    return {
      schoolName: "Campion School",
      academicYear: "2026 - 2027",
      section: "Senior Section",
      workingDays: 5,

      maxDailySubstitutions: 2,
      maxWeeklySubstitutions: 5,
      preventAbsentTeacher: true,
      preventBusyTeacher: true,

      totalPeriods: 9,
      periodDuration: 45,
      breakAfterPeriod: 2,
      lunchAfterPeriod: 4,

      assignmentNotifications: true,
      pendingAlerts: true,
      dailySummary: true,
    };
  });

  const previousDateRef = useRef(selectedDate);
  const firstDateLoadRef = useRef(true);

  // Persist the currently displayed day's data whenever it changes.
  useEffect(() => {
    setAbsenceHistory((previous) => {
      const updated = { ...previous, [selectedDate]: absentTeachers };
      localStorage.setItem(
        "campionAbsencesByDate",
        JSON.stringify(updated)
      );
      return updated;
    });
  }, [absentTeachers]);

  useEffect(() => {
    setSubstitutionHistory((previous) => {
      const updated = { ...previous, [selectedDate]: substitutions };
      localStorage.setItem(
        "campionSubstitutionsByDate",
        JSON.stringify(updated)
      );
      return updated;
    });
  }, [substitutions]);

  useEffect(() => {
    setManualAssignmentHistory((previous) => {
      const updated = { ...previous, [selectedDate]: manualAssignments };
      localStorage.setItem(
        "campionManualAssignmentsByDate",
        JSON.stringify(updated)
      );
      return updated;
    });
  }, [manualAssignments]);

  // When the working date changes, save the old day and load the selected day.
  useEffect(() => {
    if (firstDateLoadRef.current) {
      firstDateLoadRef.current = false;
      previousDateRef.current = selectedDate;
      return;
    }

    const previousDate = previousDateRef.current;

    setAbsenceHistory((previous) => {
      const updated = { ...previous, [previousDate]: absentTeachers };
      localStorage.setItem("campionAbsencesByDate", JSON.stringify(updated));
      return updated;
    });

    setSubstitutionHistory((previous) => {
      const updated = { ...previous, [previousDate]: substitutions };
      localStorage.setItem("campionSubstitutionsByDate", JSON.stringify(updated));
      return updated;
    });

    setManualAssignmentHistory((previous) => {
      const updated = { ...previous, [previousDate]: manualAssignments };
      localStorage.setItem(
        "campionManualAssignmentsByDate",
        JSON.stringify(updated)
      );
      return updated;
    });

    setAbsentTeachers(absenceHistory[selectedDate] || []);
    setSubstitutions(substitutionHistory[selectedDate] || []);
    setManualAssignments(manualAssignmentHistory[selectedDate] || []);

    setSelectedTeacher("");
    setSelectedSubstitution(null);
    setSelectedSubstitute("");
    setShowAbsenceModal(false);
    setShowAssignModal(false);

    previousDateRef.current = selectedDate;
  }, [selectedDate]);

  useEffect(() => {

    const date =
      new Date(
        `${selectedDate}T00:00:00`
      );

    const dayName =
      date.toLocaleDateString(
        "en-US",
        {
          weekday: "long",
        }
      );

    if (
      [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ].includes(dayName)
    ) {

      setSelectedDay(dayName);

    }

  }, [selectedDate]);



  /* ==========================================
     ABSENCE MODAL
  ========================================== */

  const openAbsenceModal = () => {
    setSelectedTeacher("");
    setAbsenceType("Full Day");
    setShowAbsenceModal(true);
  };

  const closeAbsenceModal = () => {
    setShowAbsenceModal(false);
  };

  const saveAbsence = () => {

    if (!selectedTeacher) {
      alert("Please select a teacher.");
      return;
    }

    const alreadyAbsent = absentTeachers.some(
      (teacher) =>
        teacher.name === selectedTeacher &&
        teacher.day === selectedDay
    );

    if (alreadyAbsent) {
      alert(
        "This teacher is already marked absent for this day."
      );
      return;
    }


    // Find teacher object
    const teacherObject = teachers.find(
      (teacher) =>
        teacher.name === selectedTeacher
    );

    if (!teacherObject) {
      alert("Teacher could not be found.");
      return;
    }


    // Get selected day's real timetable
    const teacherSchedule =
      masterTimetable[
      teacherObject.id
      ]?.[selectedDay] || {};




    const newAbsence = {
      teacherId: teacherObject.id,
      name: teacherObject.name,
      type: absenceType,
      day: selectedDay,
      date: selectedDate,
    };


    setAbsentTeachers((previous) => [
      ...previous,
      newAbsence,
    ]);


    let periods = Object.entries(
      teacherSchedule
    );


    // Remove FREE periods
    periods = periods.filter(
      ([, slot]) => slot !== null
    );


    // FIRST HALF
    if (absenceType === "First Half") {

      periods = periods.filter(
        ([period]) =>
          Number(period) <= 4
      );

    }


    // SECOND HALF
    if (absenceType === "Second Half") {

      periods = periods.filter(
        ([period]) =>
          Number(period) > 4
      );

    }


    const newRequirements =
      periods.map(([period, slot]) => ({

        id:
          `${teacherObject.id}-${selectedDay}-${period}-${Date.now()}-${Math.random()}`,

        day: selectedDay,

        date: selectedDate,

        period: Number(period),

        className:
          slot.className || "N/A",

        subject:
          slot.subject || "",

        absent:
          teacherObject.name,

        absentTeacherId:
          teacherObject.id,

        substitute: "",

        substituteTeacherId: null,

        status: "Pending",

      }));


    setSubstitutions(
      (previous) => [
        ...previous,
        ...newRequirements,
      ]
    );


    setShowAbsenceModal(false);

  };
  /* ==========================================
     NAVIGATION
  ========================================== */

  const mainNavigationItems = [
    { name: "Dashboard", icon: "⌂" },
    { name: "Substitutions", icon: "↻" },
  ];

  const managementNavigationItems = [
    { name: "Teachers", icon: "♙" },
    { name: "Classes", icon: "▦" },
    { name: "Timetable", icon: "▤" },
    { name: "Manual Assignment", icon: "✚" },
  ];

  const systemNavigationItems = [
    { name: "Reports", icon: "▥" },
    { name: "Settings", icon: "⚙" },
  ];

  /* ==========================================
     SUBSTITUTION COUNTS
  ========================================== */

  const getDailySubstitutionCount = (
    teacherName,
    day = selectedDay
  ) => {

    return substitutions.filter(
      (item) =>
        item.substitute === teacherName &&
        item.day === day &&
        item.status === "Assigned"
    ).length;

  };

  /*
    Temporary weekly count.

    Since the database is not connected yet,
    today's assignments represent the current
    weekly count.

    Later this will use actual Monday-Friday
    records from the backend.
  */

  const getWeekDateKeys = (dateKey = selectedDate) => {
    const date = new Date(`${dateKey}T00:00:00`);
    const day = date.getDay();

    // Monday is the first day of the school week.
    const distanceFromMonday = day === 0 ? 6 : day - 1;
    const monday = new Date(date);
    monday.setDate(date.getDate() - distanceFromMonday);

    return Array.from({ length: 5 }, (_, index) => {
      const current = new Date(monday);
      current.setDate(monday.getDate() + index);
      return getLocalDateKey(current);
    });
  };

  const getWeeklySubstitutionCount = (teacherName) => {
    const weekDates = getWeekDateKeys(selectedDate);

    return weekDates.reduce((total, dateKey) => {
      // Current date uses the live state so a just-made assignment
      // is counted immediately before localStorage/history catches up.
      const dayItems =
        dateKey === selectedDate
          ? substitutions
          : substitutionHistory[dateKey] || [];

      return (
        total +
        dayItems.filter(
          (item) =>
            item.substitute === teacherName &&
            item.status === "Assigned"
        ).length
      );
    }, 0);
  };

  const getRegularTeachingPeriodCount = (
    teacherId,
    day
  ) => {
    const schedule =
      masterTimetable?.[teacherId]?.[day] || {};

    return Object.values(schedule).filter(
      (slot) => slot !== null
    ).length;
  };

  /* ==========================================
     TEACHER AVAILABILITY
  ========================================== */

  const isTeacherBusy = (
    teacherId,
    day,
    period
  ) => {

    return !isTeacherFree(
      teacherId,
      day,
      period
    );

  };

  const isTeacherAbsent = (
    teacherName,
    day = selectedDay
  ) => {

    return absentTeachers.some(
      (teacher) =>
        teacher.name === teacherName &&
        teacher.day === day
    );

  };

  /* ==========================================
     FIND ELIGIBLE TEACHERS
  ========================================== */

  const getEligibleTeachers = (
    substitution
  ) => {

    return substitutionTeachers

      .filter((teacher) => {

        // Cannot substitute themselves
        if (
          teacher.name ===
          substitution.absent
        ) {
          return false;
        }


        // Cannot use absent teacher
        if (
          settings.preventAbsentTeacher &&
          isTeacherAbsent(
            teacher.name,
            substitution.day
          )
        ) {
          return false;
        }


        // Teacher must be FREE
        if (
          settings.preventBusyTeacher &&
          isTeacherBusy(
            teacher.id,
            substitution.day,
            substitution.period
          )
        ) {
          return false;
        }


        // REGULAR TEACHING LOAD LIMIT
        // A teacher with 5 or more scheduled periods
        // cannot receive a substitution.
        if (
          getRegularTeachingPeriodCount(
            teacher.id,
            substitution.day
          ) >= 5
        ) {
          return false;
        }


        // DAILY LIMIT
        if (
          getDailySubstitutionCount(
            teacher.name,
            substitution.day
          ) >=
          settings.maxDailySubstitutions
        ) {
          return false;
        }


        // WEEKLY LIMIT
        if (
          getWeeklySubstitutionCount(
            teacher.name
          ) >=
          settings.maxWeeklySubstitutions
        ) {
          return false;
        }


        return true;

      })

      .sort((a, b) => {

        return (
          getDailySubstitutionCount(
            a.name,
            substitution.day
          ) -
          getDailySubstitutionCount(
            b.name,
            substitution.day
          )
        );

      });

  };
  /* ==========================================
     OPEN ASSIGNMENT MODAL
  ========================================== */

  const openAssignModal = (substitution) => {
    const eligible =
      getEligibleTeachers(substitution);

    if (eligible.length === 0) {
      alert(
        "No eligible teacher is available for this period."
      );
      return;
    }

    setSelectedSubstitution(substitution);
    setSelectedSubstitute(
      eligible[0].name
    );
    setShowAssignModal(true);
  };

  const closeAssignModal = () => {
    setShowAssignModal(false);
    setSelectedSubstitution(null);
    setSelectedSubstitute("");
  };

  /* ==========================================
     ASSIGN SUBSTITUTE
  ========================================== */

  const assignSubstitute = () => {

    if (
      !selectedSubstitution ||
      !selectedSubstitute
    ) {

      alert(
        "Please select a substitute teacher."
      );

      return;

    }


    const substituteObject =
      substitutionTeachers.find(
        (teacher) =>
          teacher.name ===
          selectedSubstitute
      );


    if (!substituteObject) {

      alert(
        "This teacher is not eligible for substitution."
      );

      return;

    }


    if (
      settings.preventAbsentTeacher &&
      isTeacherAbsent(
        substituteObject.name,
        selectedSubstitution.day
      )
    ) {

      alert(
        "This teacher is absent and cannot substitute."
      );

      return;

    }


    if (
      settings.preventBusyTeacher &&
      isTeacherBusy(
        substituteObject.id,
        selectedSubstitution.day,
        selectedSubstitution.period
      )
    ) {

      alert(
        "This teacher already has a class during this period."
      );

      return;

    }


    if (
      getRegularTeachingPeriodCount(
        substituteObject.id,
        selectedSubstitution.day
      ) >= 5
    ) {

      alert(
        "This teacher already has 5 or more regular periods and cannot be assigned a substitution."
      );

      return;

    }


    if (
      getDailySubstitutionCount(
        substituteObject.name,
        selectedSubstitution.day
      ) >=
      settings.maxDailySubstitutions
    ) {

      alert(
        `This teacher has already reached the daily limit of ${settings.maxDailySubstitutions} substitutions.`
      );

      return;

    }


    if (
      getWeeklySubstitutionCount(
        substituteObject.name
      ) >=
      settings.maxWeeklySubstitutions
    ) {

      alert(
        `This teacher has already reached the weekly limit of ${settings.maxWeeklySubstitutions} substitutions.`
      );

      return;

    }


    setSubstitutions(
      (previous) =>
        previous.map((item) =>

          item.id ===
            selectedSubstitution.id

            ? {
              ...item,

              substitute:
                substituteObject.name,

              substituteTeacherId:
                substituteObject.id,

              status:
                "Assigned",
            }

            : item

        )
    );


    closeAssignModal();

  };
  /* ==========================================
   CLEAR SUBSTITUTION
========================================== */

  const clearSubstitution = (substitutionId) => {
    const confirmed = window.confirm(
      "Are you sure you want to clear this substitution?"
    );

    if (!confirmed) {
      return;
    }

    setSubstitutions((previous) =>
      previous.map((item) =>
        item.id === substitutionId
          ? {
            ...item,
            substitute: "",
            status: "Pending",
          }
          : item
      )
    );
  };

  const saveManualAssignment = () => {
    if (!manualPeriod || !manualClass || !manualTeacher) {
      alert("Please select period, class and teacher.");
      return;
    }

    const newAssignment = {
      id: Date.now(),
      day: manualDay,
      date: selectedDate,
      period: manualPeriod,
      className: manualClass,
      teacher: manualTeacher,
      reason: manualReason || "Extra period",
    };

    setManualAssignments(prev => [...prev, newAssignment]);

    setManualPeriod("");
    setManualClass("");
    setManualTeacher("");
    setManualReason("");

    alert("Manual assignment created successfully.");
  };

  /* ==========================================
     AUTOMATIC SUBSTITUTION GENERATION
  ========================================== */



  const getReportSubstitutions = () => {
    let items = [...substitutions];

    if (reportClass !== "All Classes") {
      items = items.filter(
        (item) => item.className === reportClass
      );
    }

    if (reportType === "Pending Substitution Report") {
      items = items.filter(
        (item) => item.status === "Pending"
      );
    }

    if (reportType === "Absence Report") {
      return [];
    }

    return items;
  };

  const getReportAbsences = () => {
    if (
      reportType !== "Absence Report" &&
      reportType !== "Daily Substitution Report"
    ) {
      return [];
    }

    return [...absentTeachers];
  };

  const reportSubstitutions = getReportSubstitutions();
  const reportAbsences = getReportAbsences();

  const reportAssignedCount =
    reportSubstitutions.filter(
      (item) => item.status === "Assigned"
    ).length;

  const reportPendingCount =
    reportSubstitutions.filter(
      (item) => item.status === "Pending"
    ).length;

  const reportCoverageRate =
    reportSubstitutions.length > 0
      ? Math.round(
          (reportAssignedCount /
            reportSubstitutions.length) *
            100
        )
      : 0;

  const formattedSelectedDate =
    new Date(
      `${selectedDate}T00:00:00`
    ).toLocaleDateString(
      "en-GB",
      {
        day: "numeric",
        month: "short",
        year: "numeric",
      }
    );

  // ========================================================
  // REPORT EXPORT HELPERS
  // ========================================================

  const escapeHtml = (value = "") =>
    String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  const getPrintableAssignedSubstitutions = () =>
  reportSubstitutions;

  const getReportTitle = () => {
    if (reportType === "Absence Report") {
      return "Teacher Absence Report";
    }

    if (reportType === "Teacher Workload Report") {
      return "Teacher Substitution / Workload Report";
    }

    if (reportType === "Pending Substitution Report") {
      return "Pending Substitution Report";
    }

    return "Teacher Substitution Report";
  };

  const getLongReportDate = () =>
    new Date(`${selectedDate}T00:00:00`).toLocaleDateString(
      "en-GB",
      {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }
    );

  const buildPrintableReportHtml = () => {
    const assigned = getPrintableAssignedSubstitutions();
    const title = getReportTitle();
    const schoolName = settings.schoolName || "Campion School";
    const reportDate = getLongReportDate();

    let mainTable = "";

    if (reportType === "Absence Report") {
      const rows = reportAbsences
        .map(
          (teacher) => `
            <tr>
              <td>${escapeHtml(teacher.name)}</td>
              <td>${escapeHtml(teacher.type)}</td>
              <td>${escapeHtml(teacher.day)}</td>
              <td class="remarks"></td>
            </tr>`
        )
        .join("");

      mainTable = `
        <table>
          <thead>
            <tr>
              <th>Teacher</th>
              <th>Absence Type</th>
              <th>Day</th>
              <th class="remarks">Remarks</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>`;
    } else {
      const rows = assigned
        .map(
          (item) => `
            <tr>
              <td class="center">P${escapeHtml(item.period)}</td>
              <td>${escapeHtml(item.className)}</td>
              <td>${escapeHtml(item.absent)}</td>
              <td>${escapeHtml(item.substitute)}</td>
              <td>${escapeHtml(item.subject || "-")}</td>
              <td class="signature"></td>
            </tr>`
        )
        .join("");

      mainTable = `
        <table>
          <thead>
            <tr>
              <th>Period</th>
              <th>Class</th>
              <th>Absent Teacher</th>
              <th>Substitute Teacher</th>
              <th>Subject</th>
              <th class="signature">Signature</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>`;
    }

    const manualSection =
      reportType !== "Absence Report" && manualAssignments.length > 0
        ? `
          <div class="section-title">Manual Assignments</div>
          <table>
            <thead>
              <tr>
                <th>Period</th>
                <th>Class</th>
                <th>Teacher</th>
                <th>Reason</th>
                <th class="signature">Signature</th>
              </tr>
            </thead>
            <tbody>
              ${manualAssignments
                .map(
                  (item) => `
                    <tr>
                      <td class="center">P${escapeHtml(item.period)}</td>
                      <td>${escapeHtml(item.className)}</td>
                      <td>${escapeHtml(item.teacher)}</td>
                      <td>${escapeHtml(item.reason)}</td>
                      <td class="signature"></td>
                    </tr>`
                )
                .join("")}
            </tbody>
          </table>`
        : "";

    return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>${escapeHtml(title)}</title>
<style>
  @page { size: A4 landscape; margin: 12mm; }
  * { box-sizing: border-box; }
  body {
    font-family: Arial, Helvetica, sans-serif;
    color: #111827;
    margin: 0;
    font-size: 11px;
  }
  .header {
    display: grid;
    grid-template-columns: 76px 1fr 76px;
    align-items: center;
    border-bottom: 2px solid #111827;
    padding-bottom: 9px;
    margin-bottom: 12px;
  }
  .school-logo {
    width: 62px;
    height: 72px;
    object-fit: contain;
    justify-self: start;
  }
  .header-text { text-align: center; }
  .header-spacer { width: 62px; }
  .header h1 { margin: 0; font-size: 21px; }
  .header h2 { margin: 5px 0 0; font-size: 15px; font-weight: 600; }
  .meta {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    margin: 10px 0 14px;
    font-size: 11px;
  }
  .summary {
    display: flex;
    gap: 18px;
    margin-bottom: 12px;
  }
  .summary span { font-weight: 700; }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 18px;
  }
  th, td {
    border: 1px solid #4b5563;
    padding: 7px 8px;
    vertical-align: middle;
  }
  th {
    background: #f3f4f6;
    font-weight: 700;
    text-align: left;
  }
  td { height: 33px; }
  .center { text-align: center; }
  .signature { width: 155px; min-width: 155px; }
  .remarks { width: 220px; min-width: 220px; }
  .section-title {
    font-size: 13px;
    font-weight: 700;
    margin: 16px 0 7px;
  }
  .principal-signature-wrap {
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;
    margin-bottom: 20px;
    page-break-inside: avoid;
  }
  .principal-signature {
    width: 220px;
    text-align: center;
    color: #111827;
  }
  .principal-signature-line {
    border-top: 1px solid #111827;
    margin-bottom: 6px;
    height: 1px;
  }
  .principal-signature strong {
    font-size: 10px;
  }
  .footer {
    margin-top: 18px;
    padding-top: 8px;
    border-top: 1px solid #9ca3af;
    display: flex;
    justify-content: space-between;
    color: #4b5563;
    font-size: 9px;
  }
  @media print {
    .no-print { display: none !important; }
  }
</style>
</head>
<body>
  <div class="header">
    <img class="school-logo" src="${campionLogo}" alt="Campion School logo" />
    <div class="header-text">
      <h1>${escapeHtml(schoolName)}</h1>
      <h2>${escapeHtml(settings.section)} — ${escapeHtml(title)}</h2>
    </div>
    <div class="header-spacer"></div>
  </div>

  <div class="meta">
    <div><strong>Date:</strong> ${escapeHtml(reportDate)}</div>
    <div><strong>Academic Year:</strong> ${escapeHtml(settings.academicYear)}</div>
  </div>

  <div class="summary">
  <div>
    Absent Teachers:
    <span>${absentTeachers.length}</span>
  </div>

  <div>
    Assigned Substitutions:
    <span>${reportAssignedCount}</span>
  </div>

  <div>
    Pending Substitutions:
    <span>${reportPendingCount}</span>
  </div>

  <div>
    Manual Assignments:
    <span>${manualAssignments.length}</span>
  </div>
</div>

  ${mainTable}
  ${manualSection}

  <div class="principal-signature-wrap">
    <div class="principal-signature">
      <div class="principal-signature-line"></div>
      <strong>Principal's Signature</strong>
    </div>
  </div>

  <div class="footer">
    <span>Generated by Campion Teacher Substitution System</span>
    <span>${escapeHtml(reportDate)}</span>
  </div>
</body>
</html>`;
  };

  const exportPdfReport = () => {
    const assigned = getPrintableAssignedSubstitutions();

    if (
      reportType === "Absence Report"
        ? reportAbsences.length === 0
        : assigned.length === 0 && manualAssignments.length === 0
    ) {
      alert("There is no printable data for the selected report.");
      return;
    }

    const doc = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: "a4",
    });

    const schoolName = settings.schoolName || "Campion School";
    const title = getReportTitle();
    const reportDate = getLongReportDate();

    // Campion School logo
    try {
      doc.addImage(campionLogo, "PNG", 14, 5, 22, 26);
    } catch (error) {
      console.warn("Campion logo could not be added to the PDF.", error);
    }

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text(schoolName, 148.5, 14, { align: "center" });

    doc.setFontSize(12);
    doc.text(
      `${settings.section} - ${title}`,
      148.5,
      21,
      { align: "center" }
    );

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.text(`Date: ${reportDate}`, 14, 29);
    doc.text(
      `Academic Year: ${settings.academicYear}`,
      283,
      29,
      { align: "right" }
    );

    let finalY = 34;

    if (reportType === "Absence Report") {
      autoTable(doc, {
        startY: finalY,
        head: [["Teacher", "Absence Type", "Day", "Remarks"]],
        body: reportAbsences.map((teacher) => [
          teacher.name,
          teacher.type,
          teacher.day,
          "",
        ]),
        styles: { fontSize: 9, cellPadding: 4, minCellHeight: 10 },
        headStyles: { fontStyle: "bold" },
        columnStyles: {
          3: { cellWidth: 60 },
        },
      });
    } else {
      autoTable(doc, {
        startY: finalY,
        head: [[
          "Period",
          "Class",
          "Absent Teacher",
          "Substitute Teacher",
          "Subject",
          "Signature",
        ]],
        body: assigned.map((item) => [
          `P${item.period}`,
          item.className,
          item.absent,
          item.substitute,
          item.subject || "-",
          "",
        ]),
        styles: { fontSize: 9, cellPadding: 4, minCellHeight: 11 },
        headStyles: { fontStyle: "bold" },
        columnStyles: {
          0: { cellWidth: 18, halign: "center" },
          1: { cellWidth: 26 },
          4: { cellWidth: 28 },
          5: { cellWidth: 48 },
        },
      });

      finalY = doc.lastAutoTable?.finalY || finalY;

      if (manualAssignments.length > 0) {
        const nextY = finalY + 10;

        if (nextY > 165) {
          doc.addPage();
          finalY = 18;
        } else {
          finalY = nextY;
        }

        doc.setFont("helvetica", "bold");
        doc.setFontSize(11);
        doc.text("Manual Assignments", 14, finalY);

        autoTable(doc, {
          startY: finalY + 4,
          head: [["Period", "Class", "Teacher", "Reason", "Signature"]],
          body: manualAssignments.map((item) => [
            `P${item.period}`,
            item.className,
            item.teacher,
            item.reason,
            "",
          ]),
          styles: { fontSize: 9, cellPadding: 4, minCellHeight: 11 },
          headStyles: { fontStyle: "bold" },
          columnStyles: {
            0: { cellWidth: 18, halign: "center" },
            4: { cellWidth: 48 },
          },
        });
      }
    }

    // Principal signature block at the bottom-right.
    // If the table reaches too low on the page, add a clean page so the
    // signature never overlaps the report content.
    const lastContentY = doc.lastAutoTable?.finalY || finalY;

    if (lastContentY > 168) {
      doc.addPage();
    }

    const pageHeight = doc.internal.pageSize.getHeight();
    const pageWidth = doc.internal.pageSize.getWidth();
    const signatureWidth = 55;
    const signatureRight = pageWidth - 14;
    const signatureLeft = signatureRight - signatureWidth;
    const signatureLineY = pageHeight - 20;

    doc.setDrawColor(40);
    doc.setLineWidth(0.3);
    doc.line(
      signatureLeft,
      signatureLineY,
      signatureRight,
      signatureLineY
    );

    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.text(
      "Principal's Signature",
      signatureLeft + signatureWidth / 2,
      signatureLineY + 5,
      { align: "center" }
    );

    doc.save(
      `Campion_${title.replace(/[^a-z0-9]+/gi, "_")}_${selectedDate}.pdf`
    );
  };

  const exportWordReport = () => {
    const assigned = getPrintableAssignedSubstitutions();

    if (
      reportType === "Absence Report"
        ? reportAbsences.length === 0
        : assigned.length === 0 && manualAssignments.length === 0
    ) {
      alert("There is no printable data for the selected report.");
      return;
    }

    const html = buildPrintableReportHtml();
    const blob = new Blob(["\ufeff", html], {
      type: "application/msword;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Campion_${getReportTitle().replace(/[^a-z0-9]+/gi, "_")}_${selectedDate}.doc`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const printReport = () => {
    const assigned = getPrintableAssignedSubstitutions();

    if (
      reportType === "Absence Report"
        ? reportAbsences.length === 0
        : assigned.length === 0 && manualAssignments.length === 0
    ) {
      alert("There is no printable data for the selected report.");
      return;
    }

    const printWindow = window.open("", "_blank", "width=1200,height=800");

    if (!printWindow) {
      alert("Please allow pop-ups to print the report.");
      return;
    }

    printWindow.document.open();
    printWindow.document.write(buildPrintableReportHtml());
    printWindow.document.close();

    printWindow.onload = () => {
      printWindow.focus();
      printWindow.print();
    };
  };


  const handleSettingChange = (field, value) => {
    setSettings((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const saveSettings = () => {
    localStorage.setItem(
      "campionSettings",
      JSON.stringify(settings)
    );

    alert("Settings saved successfully.");
  };

  const resetSettings = () => {
    const defaultSettings = {
      schoolName: "Campion School",
      academicYear: "2026 - 2027",
      section: "Senior Section",
      workingDays: 5,

      maxDailySubstitutions: 2,
      maxWeeklySubstitutions: 5,
      preventAbsentTeacher: true,
      preventBusyTeacher: true,

      totalPeriods: 9,
      periodDuration: 45,
      breakAfterPeriod: 2,
      lunchAfterPeriod: 4,

      assignmentNotifications: true,
      pendingAlerts: true,
      dailySummary: true,
    };

    setSettings(defaultSettings);

    localStorage.setItem(
      "campionSettings",
      JSON.stringify(defaultSettings)
    );

    alert("Settings reset to default.");
  };



  const generateSubstitutions = () => {

    const pending =
      substitutions.filter(
        (item) =>
          item.status === "Pending"
      );


    if (pending.length === 0) {

      alert(
        "There are no pending substitutions."
      );

      return;

    }


    let assignedCount = 0;


    setSubstitutions((previous) => {

      const updated =
        [...previous];


      pending.forEach(
        (requirement) => {


          const eligible =
            substitutionTeachers

              .filter((teacher) => {


                // Cannot substitute themselves
                if (
                  teacher.name ===
                  requirement.absent
                ) {
                  return false;
                }


                // Cannot be absent
                if (
                  settings.preventAbsentTeacher &&
                  isTeacherAbsent(
                    teacher.name,
                    requirement.day
                  )
                ) {
                  return false;
                }


                // Cannot already be teaching
                if (
                  settings.preventBusyTeacher &&
                  isTeacherBusy(
                    teacher.id,
                    requirement.day,
                    requirement.period
                  )
                ) {
                  return false;
                }


                // Do not assign teachers who already have
                // 5 or more regular periods that day.
                if (
                  getRegularTeachingPeriodCount(
                    teacher.id,
                    requirement.day
                  ) >= 5
                ) {
                  return false;
                }


                const currentDailyCount =
                  updated.filter(
                    (item) =>
                      item.substitute ===
                      teacher.name &&

                      item.day ===
                      requirement.day &&

                      item.status ===
                      "Assigned"
                  ).length;


                if (
                  currentDailyCount >=
                  settings.maxDailySubstitutions
                ) {
                  return false;
                }


                const currentWeeklyCount =
                  updated.filter(
                    (item) =>
                      item.substitute ===
                      teacher.name &&

                      item.status ===
                      "Assigned"
                  ).length;


                if (
                  currentWeeklyCount >=
                  settings.maxWeeklySubstitutions
                ) {
                  return false;
                }


                return true;

              })


              .sort((a, b) => {


                const countA =
                  updated.filter(
                    (item) =>
                      item.substitute ===
                      a.name &&

                      item.day ===
                      requirement.day &&

                      item.status ===
                      "Assigned"
                  ).length;


                const countB =
                  updated.filter(
                    (item) =>
                      item.substitute ===
                      b.name &&

                      item.day ===
                      requirement.day &&

                      item.status ===
                      "Assigned"
                  ).length;


                return countA - countB;

              });


          if (eligible.length > 0) {

            const selected =
              eligible[0];


            const index =
              updated.findIndex(
                (item) =>
                  item.id ===
                  requirement.id
              );


            if (index !== -1) {

              updated[index] = {

                ...updated[index],

                substitute:
                  selected.name,

                substituteTeacherId:
                  selected.id,

                status:
                  "Assigned",

              };


              assignedCount++;

            }

          }

        }
      );


      return updated;

    });


    setTimeout(() => {

      if (assignedCount === 0) {

        alert(
          "No pending substitutions could be automatically assigned."
        );

      } else {

        alert(
          `${assignedCount} substitution${assignedCount > 1
            ? "s"
            : ""
          } assigned successfully.`
        );

      }

    }, 100);

  };

  const removeAbsentTeacher = (teacherId, day) => {
    const confirmed = window.confirm(
      "Are you sure you want to remove this teacher from the absent list?"
    );

    if (!confirmed) {
      return;
    }

    // Remove teacher from absence list
    setAbsentTeachers((previous) =>
      previous.filter(
        (teacher) =>
          !(
            teacher.teacherId === teacherId &&
            teacher.day === day
          )
      )
    );

    // Remove substitution requirements created
    // because of this teacher's absence
    setSubstitutions((previous) =>
      previous.filter(
        (item) =>
          !(
            item.absentTeacherId === teacherId &&
            item.day === day
          )
      )
    );
  };
  /* ==========================================
     STATISTICS
  ========================================== */

  const assignedCount =
    substitutions.filter(
      (item) => item.status === "Assigned"
    ).length;

  const pendingCount =
    substitutions.filter(
      (item) => item.status === "Pending"
    ).length;

  const workingDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];


  /* ==========================================
     TIMETABLE HELPERS
  ========================================== */

  const getAllClasses = () => {

    const classSet = new Set();

    Object.values(masterTimetable).forEach(
      (teacherSchedule) => {

        workingDays.forEach((day) => {

          const daySchedule =
            teacherSchedule?.[day] || {};

          Object.values(daySchedule).forEach(
            (slot) => {

              if (slot?.className) {
                classSet.add(slot.className);
              }

            }
          );

        });

      }
    );

    return Array.from(classSet).sort();

  };


  const timetableClasses =
    getAllClasses();


  const getTeacherTimetable = (
    teacherId
  ) => {

    if (!teacherId) {
      return {};
    }

    return (
      masterTimetable[teacherId] || {}
    );

  };


  const getClassTimetable = (
    className
  ) => {

    const classSchedule = {};

    workingDays.forEach((day) => {

      classSchedule[day] = {};

      for (
        let period = 1;
        period <= settings.totalPeriods;
        period++
      ) {

        let foundClass = null;

        teachers.forEach((teacher) => {

          const slot =
            masterTimetable[
            teacher.id
            ]?.[day]?.[period];

          if (
            slot &&
            slot.className === className
          ) {

            foundClass = {
              ...slot,
              teacherName: teacher.name,
              teacherId: teacher.id,
            };

          }

        });

        classSchedule[day][period] =
          foundClass;

      }

    });

    return classSchedule;

  };


  const displayedTimetable =
    timetableView === "Teacher"
      ? getTeacherTimetable(
        selectedTimetableTeacher
      )
      : getClassTimetable(
        selectedTimetableClass
      );


  const selectedTimetableTeacherObject =
    teachers.find(
      (teacher) =>
        teacher.id ===
        selectedTimetableTeacher
    );

  /* ==========================================
     PAGE
  ========================================== */

  return (
    <div className="app">

      {/* =====================================
          SIDEBAR
      ===================================== */}

      <aside className="sidebar">

        <div className="brand">

          <div className="brand-logo">
            C
          </div>

          <div>
            <h2>Campion</h2>
            <span>Substitution System</span>
          </div>

        </div>

        <nav className="navigation">

          {/* MAIN */}
          <p className="nav-label">MAIN</p>

          {mainNavigationItems.map(item => (
            <button
              key={item.name}
              className={activePage === item.name ? "nav-item active" : "nav-item"}
              onClick={() => setActivePage(item.name)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-text">{item.name}</span>
            </button>
          ))}

          {/* MANAGEMENT */}
          <p className="nav-label nav-section-label">MANAGEMENT</p>

          {managementNavigationItems.map(item => (
            <button
              key={item.name}
              className={activePage === item.name ? "nav-item active" : "nav-item"}
              onClick={() => setActivePage(item.name)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-text">{item.name}</span>
            </button>
          ))}

          {/* SYSTEM */}
          <p className="nav-label nav-section-label">SYSTEM</p>

          {systemNavigationItems.map(item => (
            <button
              key={item.name}
              className={activePage === item.name ? "nav-item active" : "nav-item"}
              onClick={() => setActivePage(item.name)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-text">{item.name}</span>
            </button>
          ))}

        </nav>

        <div className="sidebar-bottom">

          <div className="user-card">

            <div className="avatar">
              A
            </div>

            <div className="user-info">
              <strong>Administrator</strong>
              <span>Admin</span>
            </div>

            <button className="logout-button">
              ⋮
            </button>

          </div>

        </div>

      </aside>

      {/* =====================================
          MAIN AREA
      ===================================== */}

      <div className="content-area">

        <header className="topbar">

          <div>
            <span className="breadcrumb">
              Administration / {activePage}
            </span>
          </div>

          <div className="topbar-right">

            <button className="notification-button">
              ♧
              <span className="notification-dot"></span>
            </button>

            <div className="today">

              <span>
                Working Date
              </span>

              <input
                type="date"
                value={selectedDate}
                onChange={(e) => {
                  const nextDate = e.target.value;
                  const nextDay = new Date(`${nextDate}T00:00:00`).getDay();

                  if (nextDay === 0 || nextDay === 6) {
                    alert("Campion School working days are Monday to Friday.");
                    return;
                  }

                  setSelectedDate(nextDate);
                }}
              />

              <strong>

                {new Date(
                  `${selectedDate}T00:00:00`
                ).toLocaleDateString(
                  "en-GB",
                  {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }
                )}

              </strong>

            </div>

          </div>

        </header>

        <main className="main-content">

          {/* ===================================
              DASHBOARD
          =================================== */}

          {activePage === "Dashboard" && (

            <>

              <div className="page-header">

                <div>

                  <h1>
                    Good Morning, Admin
                  </h1>

                  <p>
                    Manage today's teacher absences
                    and substitutions.
                  </p>

                </div>

                <button
                  className="primary-button"
                  onClick={openAbsenceModal}
                >
                  + Mark Teacher Absent
                </button>

              </div>

              <div className="stats-grid">

                <div className="stat-card">

                  <div className="stat-top">
                    <span>Total Teachers</span>

                    <div className="stat-icon">
                      ♙
                    </div>
                  </div>

                  <strong>
                    {teachers.length}
                  </strong>

                  <small>
                    Active teaching staff
                  </small>

                </div>

                <div className="stat-card">

                  <div className="stat-top">
                    <span>Absent Today</span>

                    <div className="stat-icon warning">
                      !
                    </div>
                  </div>

                  <strong>
                    {absentTeachers.length}
                  </strong>

                  <small>
                    Teachers marked absent
                  </small>

                </div>

                <div className="stat-card">

                  <div className="stat-top">
                    <span>Assigned</span>

                    <div className="stat-icon success">
                      ✓
                    </div>
                  </div>

                  <strong>
                    {assignedCount}
                  </strong>

                  <small>
                    Substitutions assigned
                  </small>

                </div>

                <div className="stat-card">

                  <div className="stat-top">
                    <span>Pending</span>

                    <div className="stat-icon danger">
                      !
                    </div>
                  </div>

                  <strong>
                    {pendingCount}
                  </strong>

                  <small>
                    Need administrator attention
                  </small>

                </div>

              </div>

              {/* ABSENCES */}

              <section className="dashboard-section">

                <div className="section-heading">

                  <div>
                    <h2>Today's Absences</h2>

                    <p>
                      Teachers currently marked absent.
                    </p>
                  </div>

                  <button
                    className="text-button"
                    onClick={openAbsenceModal}
                  >
                    + Add Absence
                  </button>

                </div>

                {absentTeachers.length === 0 ? (

                  <div className="empty-box">

                    <div className="empty-circle">
                      ✓
                    </div>

                    <h3>
                      No absences recorded
                    </h3>

                    <p>
                      Mark a teacher absent to begin
                      creating today's substitution schedule.
                    </p>

                    <button
                      className="secondary-button"
                      onClick={openAbsenceModal}
                    >
                      Mark Teacher Absent
                    </button>

                  </div>

                ) : (

                  <div className="absence-table">

                    {absentTeachers.map(
                      (teacher, index) => (

                        <div
                          className="absence-row"
                          key={index}
                        >

                          <div className="teacher-avatar">
                            {teacher.name.charAt(0)}
                          </div>

                          <div className="teacher-details">

                            <strong>
                              {teacher.name}
                            </strong>

                            <span>
                              {teacher.type} absence
                            </span>

                          </div>

                          <div className="absence-actions">

                            <span className="absence-status">
                              ABSENT
                            </span>

                            <button
                              className="remove-absence-button"
                              onClick={() =>
                                removeAbsentTeacher(
                                  teacher.teacherId,
                                  teacher.day
                                )
                              }
                            >
                              Remove
                            </button>

                          </div>

                        </div>
                      )
                    )}

                  </div>

                )}

              </section>

              {/* SUBSTITUTIONS */}

              <section className="dashboard-section">

                <div className="section-heading">

                  <div>

                    <h2>
                      Today's Substitutions
                    </h2>

                    <p>
                      Current substitution assignments.
                    </p>

                  </div>

                  <button
                    className="primary-small-button"
                    onClick={() =>
                      setActivePage("Substitutions")
                    }
                  >
                    Manage
                  </button>

                </div>

                {substitutions.length === 0 ? (

                  <div className="empty-box compact">

                    <div className="empty-circle">
                      ↻
                    </div>

                    <h3>
                      No substitution requirements
                    </h3>

                    <p>
                      Mark an absent teacher to create
                      substitution requirements.
                    </p>

                  </div>

                ) : (

                  <div className="substitution-table">

                    <div className="table-header">

                      <span>Period</span>
                      <span>Class</span>
                      <span>Absent Teacher</span>
                      <span>Substitute</span>
                      <span>Status</span>

                    </div>

                    {substitutions
                      .slice(0, 5)
                      .map((item) => (

                        <div
                          className="table-row"
                          key={item.id}
                        >

                          <strong>
                            {item.period}
                          </strong>

                          <span>
                            {item.className}
                          </span>

                          <span>
                            {item.absent}
                          </span>

                          <span>
                            {item.substitute || (
                              <em>
                                Not assigned
                              </em>
                            )}
                          </span>

                          <span
                            className={
                              item.status === "Assigned"
                                ? "table-status assigned"
                                : "table-status pending"
                            }
                          >
                            {item.status}
                          </span>

                        </div>

                      ))}

                  </div>

                )}

              </section>

              {/* QUICK ACTIONS */}

              <section className="dashboard-section">

                <div className="section-heading">

                  <div>

                    <h2>
                      Quick Actions
                    </h2>

                    <p>
                      Common tasks for today's administration.
                    </p>

                  </div>

                </div>

                <div className="quick-actions">

                  <button
                    onClick={openAbsenceModal}
                    className="quick-action"
                  >

                    <span>+</span>

                    <div>

                      <strong>
                        Mark Teacher Absent
                      </strong>

                      <small>
                        Record a new absence
                      </small>

                    </div>

                  </button>

                  <button
                    onClick={() =>
                      setActivePage("Substitutions")
                    }
                    className="quick-action"
                  >

                    <span>↻</span>

                    <div>

                      <strong>
                        Manage Substitutions
                      </strong>

                      <small>
                        Assign and review substitutes
                      </small>

                    </div>

                  </button>

                  <button
                    onClick={() =>
                      setActivePage("Timetable")
                    }
                    className="quick-action"
                  >

                    <span>▤</span>

                    <div>

                      <strong>
                        View Timetable
                      </strong>

                      <small>
                        Check teacher availability
                      </small>

                    </div>

                  </button>

                </div>

              </section>

            </>
          )}

          {/* ===================================
              SUBSTITUTIONS PAGE
          =================================== */}

          {activePage === "Substitutions" && (

            <div className="sub-page">

              {/* =========================
        PAGE HEADER
    ========================= */}

              <div className="sub-page-header">

                <div className="sub-title-area">

                  <span className="sub-eyebrow">
                    ADMINISTRATION
                  </span>

                  <h1>
                    Substitution Management
                  </h1>

                  <p>
                    Manage teacher absences and arrange substitution
                    coverage for today's classes.
                  </p>

                </div>

                <div className="sub-header-actions">

                  <button
                    className="sub-secondary-btn"
                    onClick={openAbsenceModal}
                  >
                    <span>+</span>
                    Mark Absence
                  </button>

                  <button
                    className="sub-primary-btn"
                    onClick={generateSubstitutions}
                    disabled={
                      substitutions.length === 0 ||
                      pendingCount === 0
                    }
                  >
                    <span>↻</span>
                    Generate Substitutions
                  </button>

                </div>

              </div>


              {/* =========================
        SUMMARY CARDS
    ========================= */}

              <div className="sub-summary-grid">

                <div className="sub-summary-card">

                  <div className="sub-summary-icon absent-icon">
                    !
                  </div>

                  <div className="sub-summary-content">

                    <span className="sub-summary-label">
                      Absent Teachers
                    </span>

                    <strong>
                      {absentTeachers.length}
                    </strong>

                    <small>
                      Requiring coverage
                    </small>

                  </div>

                </div>


                <div className="sub-summary-card">

                  <div className="sub-summary-icon pending-icon">
                    !
                  </div>

                  <div className="sub-summary-content">

                    <span className="sub-summary-label">
                      Pending
                    </span>

                    <strong>
                      {pendingCount}
                    </strong>

                    <small>
                      Awaiting assignment
                    </small>

                  </div>

                </div>


                <div className="sub-summary-card">

                  <div className="sub-summary-icon assigned-icon">
                    ✓
                  </div>

                  <div className="sub-summary-content">

                    <span className="sub-summary-label">
                      Assigned
                    </span>

                    <strong>
                      {assignedCount}
                    </strong>

                    <small>
                      Successfully covered
                    </small>

                  </div>

                </div>


                <div className="sub-summary-card">

                  <div className="sub-summary-icon rules-icon">
                    2
                  </div>

                  <div className="sub-summary-content">

                    <span className="sub-summary-label">
                      Daily Limit
                    </span>

                    <strong>
                      {settings.maxDailySubstitutions}
                    </strong>

                    <small>
                      Max substitutions / teacher
                    </small>

                  </div>

                </div>

              </div>


              {/* =========================
        RULES
    ========================= */}

              <div className="sub-rules-card">

                <div className="sub-rules-heading">

                  <div className="sub-rules-title-icon">
                    ✓
                  </div>

                  <div>
                    <h3>
                      Substitution Rules
                    </h3>

                    <p>
                      The system automatically follows these rules
                      when generating substitutions.
                    </p>
                  </div>

                </div>


                <div className="sub-rules-list">

                  <div className="sub-rule-item">

                    <span className="sub-rule-check">
                      ✓
                    </span>

                    <div>
                      <strong>
                        Daily Limit
                      </strong>

                      <small>
                        Maximum {settings.maxDailySubstitutions} substitutions per teacher
                      </small>
                    </div>

                  </div>


                  <div className="sub-rule-item">

                    <span className="sub-rule-check">
                      ✓
                    </span>

                    <div>
                      <strong>
                        Weekly Limit
                      </strong>

                      <small>
                        Maximum {settings.maxWeeklySubstitutions} substitutions per teacher
                      </small>
                    </div>

                  </div>


                  <div className="sub-rule-item">

                    <span className="sub-rule-check">
                      ✓
                    </span>

                    <div>
                      <strong>
                        Conflict Check
                      </strong>

                      <small>
                        Teachers already teaching are excluded
                      </small>
                    </div>

                  </div>


                  <div className="sub-rule-item">

                    <span className="sub-rule-check">
                      ✓
                    </span>

                    <div>
                      <strong>
                        Manual Assignment
                      </strong>

                      <small>
                        Administrator can select a teacher manually
                      </small>
                    </div>

                  </div>

                </div>

              </div>


              {/* =========================
        ABSENT TEACHERS
    ========================= */}

              <section className="sub-section">

                <div className="sub-section-header">

                  <div>

                    <div className="sub-section-title-row">

                      <h2>
                        Absent Teachers
                      </h2>

                      <span className="sub-count">
                        {absentTeachers.length}
                      </span>

                    </div>

                    <p>
                      Teachers requiring substitution coverage today.
                    </p>

                  </div>

                  {absentTeachers.length > 0 && (

                    <button
                      className="sub-small-action"
                      onClick={openAbsenceModal}
                    >
                      + Add Absence
                    </button>

                  )}

                </div>


                {absentTeachers.length === 0 ? (

                  <div className="sub-empty-state">

                    <div className="sub-empty-icon">
                      ✓
                    </div>

                    <div>

                      <h3>
                        No teachers marked absent
                      </h3>

                      <p>
                        Mark a teacher absent to create substitution
                        requirements.
                      </p>

                    </div>

                    <button
                      className="sub-secondary-btn"
                      onClick={openAbsenceModal}
                    >
                      Mark Teacher Absent
                    </button>

                  </div>

                ) : (

                  <div className="sub-absent-grid">

                    {absentTeachers.map((teacher) => (

                      <div
                        className="sub-absent-card"
                        key={teacher.name}
                      >

                        <div className="sub-teacher-avatar">
                          {teacher.name.charAt(0)}
                        </div>

                        <div className="sub-teacher-info">

                          <strong>
                            {teacher.name}
                          </strong>

                          <span>
                            {teacher.type} absence
                          </span>

                        </div>

                        <div className="sub-absence-actions">

                          <span className="sub-absent-badge">
                            ABSENT
                          </span>

                          <button
                            className="remove-absence-button"
                            onClick={() =>
                              removeAbsentTeacher(
                                teacher.teacherId,
                                teacher.day
                              )
                            }
                          >
                            Remove
                          </button>

                        </div>

                      </div>

                    ))}

                  </div>

                )}

              </section>


              {/* =========================
        TODAY'S REQUIREMENTS
    ========================= */}

              <section className="sub-section">

                <div className="sub-section-header">

                  <div>

                    <div className="sub-section-title-row">

                      <h2>
                        Today's Requirements
                      </h2>

                    </div>

                    <p>
                      Every period requiring a substitute teacher.
                    </p>

                  </div>


                  <div className="sub-status-summary">

                    <span className="sub-assigned-count">
                      <b>{assignedCount}</b>
                      Assigned
                    </span>

                    <span className="sub-pending-count">
                      <b>{pendingCount}</b>
                      Pending
                    </span>

                  </div>

                </div>


                {substitutions.length === 0 ? (

                  <div className="sub-empty-state">

                    <div className="sub-empty-icon">
                      ↻
                    </div>

                    <div>

                      <h3>
                        Nothing to substitute
                      </h3>

                      <p>
                        Once a teacher is marked absent, their
                        timetable periods will appear here.
                      </p>

                    </div>

                  </div>

                ) : (

                  <div className="sub-requirements">

                    {/* TABLE HEADER */}

                    <div className="sub-requirement-header">

                      <span>
                        PERIOD
                      </span>

                      <span>
                        CLASS
                      </span>

                      <span>
                        ABSENT TEACHER
                      </span>

                      <span>
                        SUBSTITUTE
                      </span>

                      <span>
                        STATUS
                      </span>

                      <span>
                        ACTION
                      </span>

                    </div>


                    {/* REQUIREMENT ROWS */}

                    {substitutions.map((item) => (

                      <div
                        className="sub-requirement-row"
                        key={item.id}
                      >

                        {/* PERIOD */}

                        <div className="sub-period">

                          <span>
                            PERIOD
                          </span>

                          <strong>
                            {item.period}
                          </strong>

                        </div>


                        {/* CLASS */}

                        <div className="sub-class">

                          <strong>
                            {item.className}
                          </strong>

                          <span>
                            Class
                          </span>

                        </div>


                        {/* ABSENT */}

                        <div className="sub-absent-teacher">

                          <div className="sub-mini-avatar">
                            {item.absent.charAt(0)}
                          </div>

                          <span>
                            {item.absent}
                          </span>

                        </div>


                        {/* SUBSTITUTE */}

                        <div className="sub-substitute">

                          {item.substitute ? (

                            <>

                              <div className="sub-assigned-person">

                                <div className="sub-mini-avatar assigned-avatar">
                                  {item.substitute.charAt(0)}
                                </div>

                                <span>
                                  {item.substitute}
                                </span>

                              </div>

                            </>

                          ) : (

                            <span className="sub-not-assigned">
                              Not assigned
                            </span>

                          )}

                        </div>


                        {/* STATUS */}

                        <div>

                          {item.substitute ? (

                            <span className="sub-status assigned">
                              <span>✓</span>
                              Assigned
                            </span>

                          ) : (

                            <span className="sub-status pending">
                              <span>!</span>
                              Pending
                            </span>

                          )}

                        </div>


                        {/* ACTION */}

                        <div className="sub-action">

                          {item.substitute ? (

                            <button
                              className="sub-clear-btn"
                              onClick={() =>
                                clearSubstitution(item.id)
                              }
                            >
                              Clear
                            </button>

                          ) : (

                            <button
                              className="sub-assign-btn"
                              onClick={() =>
                                openAssignModal(item)
                              }
                            >
                              Assign
                            </button>

                          )}

                        </div>

                      </div>

                    ))}

                  </div>

                )}

              </section>

            </div>

          )}
          {/* ===================================
              OTHER PAGES
          =================================== */}

          {/* ===================================
    MANUAL ASSIGNMENT PAGE
=================================== */}

          {activePage === "Manual Assignment" && (

            <div className="manual-page">

              <div className="page-header">

                <div>

                  <span className="page-eyebrow">
                    MANAGEMENT
                  </span>

                  <h1>
                    Manual Assignment
                  </h1>

                  <p>
                    Assign an additional period to a teacher
                    for academic or administrative purposes.
                  </p>

                </div>

              </div>


              {/* =================================
        ASSIGNMENT FORM
    ================================= */}

              <div className="manual-assignment-layout">

                <div className="manual-form-card">

                  <div className="form-card-header">

                    <div className="form-card-icon">
                      ✚
                    </div>

                    <div>

                      <h2>
                        Create Assignment
                      </h2>

                      <p>
                        Assign a teacher to an additional class period.
                      </p>

                    </div>

                  </div>


                  <div className="manual-form">

                    <div className="form-row">

                      {/* DAY */}

                      <div className="form-group">

                        <label>
                          Day
                        </label>

                        <select
                          value={manualDay}
                          onChange={(e) =>
                            setManualDay(e.target.value)
                          }
                        >

                          <option value="Today">
                            Today
                          </option>

                          <option value="Tomorrow">
                            Tomorrow
                          </option>

                        </select>

                      </div>


                      {/* PERIOD */}

                      <div className="form-group">

                        <label>
                          Period
                        </label>

                        <select
                          value={manualPeriod}
                          onChange={(e) =>
                            setManualPeriod(e.target.value)
                          }
                        >

                          <option value="">
                            Select period
                          </option>

                          <option value="1">
                            Period 1
                          </option>

                          <option value="2">
                            Period 2
                          </option>

                          <option value="3">
                            Period 3
                          </option>

                          <option value="4">
                            Period 4
                          </option>

                          <option value="5">
                            Period 5
                          </option>

                          <option value="6">
                            Period 6
                          </option>

                          <option value="7">
                            Period 7
                          </option>

                          <option value="8">
                            Period 8
                          </option>

                          <option value="9">
                            Period 9
                          </option>

                        </select>

                      </div>

                    </div>


                    {/* CLASS */}

                    <div className="form-group">

                      <label>
                        Class
                      </label>

                      <select
                        value={manualClass}
                        onChange={(e) =>
                          setManualClass(e.target.value)
                        }
                      >

                        <option value="">
                          Select class
                        </option>

                        <option value="VIII-A">
                          VIII-A
                        </option>

                        <option value="VIII-B">
                          VIII-B
                        </option>

                        <option value="VIII-C">
                          VIII-C
                        </option>

                        <option value="IX-A">
                          IX-A
                        </option>

                        <option value="IX-B">
                          IX-B
                        </option>

                        <option value="IX-C">
                          IX-C
                        </option>

                        <option value="X-A">
                          X-A
                        </option>

                        <option value="X-B">
                          X-B
                        </option>

                        <option value="X-C">
                          X-C
                        </option>

                      </select>

                    </div>


                    {/* TEACHER */}

                    <div className="form-group">

                      <label>
                        Teacher
                      </label>

                      <select
                        value={manualTeacher}
                        onChange={(e) =>
                          setManualTeacher(e.target.value)
                        }
                      >

                        <option value="">
                          Select teacher
                        </option>

                        {teachers.map((teacher) => (

                          <option
                            key={teacher.id}
                            value={teacher.name}
                          >
                            {teacher.name}
                          </option>

                        ))}

                      </select>

                    </div>


                    {/* REASON */}

                    <div className="form-group">

                      <label>
                        Reason
                      </label>

                      <textarea
                        value={manualReason}
                        onChange={(e) =>
                          setManualReason(e.target.value)
                        }
                        placeholder="Example: Complete syllabus, revision, special class..."
                        rows="3"
                      />

                    </div>


                    {/* BUTTON */}

                    <button
                      className="manual-submit-button"
                      onClick={saveManualAssignment}
                    >

                      <span>
                        ✓
                      </span>

                      Assign Period

                    </button>

                  </div>

                </div>


                {/* =================================
          INFORMATION CARD
      ================================= */}

                <div className="manual-info-card">

                  <div className="info-icon">
                    💡
                  </div>

                  <h3>
                    Manual Assignment
                  </h3>

                  <p>
                    Use this option when a teacher needs an
                    additional period for syllabus completion,
                    revision, special classes or other academic
                    requirements.
                  </p>


                  <div className="info-points">

                    <div>
                      <span>✓</span>
                      <p>Select the required period</p>
                    </div>

                    <div>
                      <span>✓</span>
                      <p>Select the class</p>
                    </div>

                    <div>
                      <span>✓</span>
                      <p>Select the teacher</p>
                    </div>

                    <div>
                      <span>✓</span>
                      <p>Add the reason for the assignment</p>
                    </div>

                  </div>

                </div>

              </div>


              {/* =================================
        ASSIGNMENT HISTORY
    ================================= */}

              <div className="manual-history-card">

                <div className="history-header">

                  <div>

                    <h2>
                      Today's Manual Assignments
                    </h2>

                    <p>
                      Additional periods assigned by the administrator.
                    </p>

                  </div>

                  <span className="assignment-count">
                    {manualAssignments.length} Assigned
                  </span>

                </div>


                {manualAssignments.length === 0 ? (

                  <div className="empty-manual-state">

                    <div>
                      📋
                    </div>

                    <h3>
                      No manual assignments
                    </h3>

                    <p>
                      Assign an additional period using the
                      form above.
                    </p>

                  </div>

                ) : (

                  <div className="manual-assignment-list">

                    {manualAssignments.map(
                      (assignment) => (

                        <div
                          className="manual-assignment-item"
                          key={assignment.id}
                        >

                          <div className="assignment-period">

                            <strong>
                              P{assignment.period}
                            </strong>

                            <span>
                              {assignment.day}
                            </span>

                          </div>


                          <div className="assignment-class">

                            <strong>
                              {assignment.className}
                            </strong>

                            <span>
                              Class
                            </span>

                          </div>


                          <div className="assignment-teacher">

                            <strong>
                              {assignment.teacher}
                            </strong>

                            <span>
                              Teacher
                            </span>

                          </div>


                          <div className="assignment-reason">

                            <strong>
                              {assignment.reason}
                            </strong>

                            <span>
                              Reason
                            </span>

                          </div>

                        </div>

                      )
                    )}

                  </div>

                )}

              </div>

            </div>

          )}


          {/* ===================================
    TEACHERS PAGE
=================================== */}

          {activePage === "Teachers" && (

            <div className="teachers-page">

              {/* PAGE HEADER */}
              <div className="page-header">

                <div>

                  <span className="page-eyebrow">
                    MANAGEMENT
                  </span>

                  <h1>
                    Teachers
                  </h1>

                  <p>
                    View teaching staff, availability and substitution workload.
                  </p>

                </div>

                <button className="primary-button">
                  + Add Teacher
                </button>

              </div>


              {/* TEACHER STATISTICS */}
              <div className="teacher-stats-grid">

                <div className="teacher-stat-card">

                  <div className="teacher-stat-icon">
                    ♙
                  </div>

                  <div>
                    <span>Total Teachers</span>
                    <strong>{teachers.length}</strong>
                  </div>

                </div>


                <div className="teacher-stat-card">

                  <div className="teacher-stat-icon available">
                    ✓
                  </div>

                  <div>
                    <span>Available Today</span>
                    <strong>
                      {
                        teachers.filter(
                          (teacher) =>
                            !isTeacherAbsent(
                              teacher.name,
                              selectedDay
                            )
                        ).length
                      }
                    </strong>
                  </div>

                </div>


                <div className="teacher-stat-card">

                  <div className="teacher-stat-icon absent">
                    !
                  </div>

                  <div>
                    <span>Absent Today</span>
                    <strong>
                      {absentTeachers.length}
                    </strong>
                  </div>

                </div>


                <div className="teacher-stat-card">

                  <div className="teacher-stat-icon substitution">
                    ↻
                  </div>

                  <div>
                    <span>On Substitution</span>
                    <strong>
                      {
                        new Set(
                          substitutions
                            .filter(
                              (item) =>
                                item.status === "Assigned"
                            )
                            .map(
                              (item) =>
                                item.substitute
                            )
                        ).size
                      }
                    </strong>
                  </div>

                </div>

              </div>


              {/* TEACHER LIST */}
              <section className="teachers-section">

                <div className="teachers-section-header">

                  <div>

                    <h2>
                      Teaching Staff
                    </h2>

                    <p>
                      Current teacher availability and workload.
                    </p>

                  </div>

                  <div className="teacher-list-count">
                    {teachers.length} Teachers
                  </div>

                </div>


                {/* SEARCH / FILTER BAR */}
                <div className="teacher-toolbar">

                  <div className="teacher-search">

                    <span>
                      ⌕
                    </span>

                    <input
                      type="text"
                      placeholder="Search teachers..."
                    />

                  </div>


                  <select className="teacher-filter">

                    <option>
                      All Subjects
                    </option>

                    <option>
                      Mathematics
                    </option>

                    <option>
                      Science
                    </option>

                    <option>
                      English
                    </option>

                    <option>
                      Social Science
                    </option>

                  </select>


                  <select className="teacher-filter">

                    <option>
                      All Status
                    </option>

                    <option>
                      Available
                    </option>

                    <option>
                      Absent
                    </option>

                    <option>
                      On Substitution
                    </option>

                  </select>

                </div>


                {/* TABLE */}
                <div className="teachers-table">

                  <div className="teachers-table-header">

                    <span>
                      Teacher
                    </span>

                    <span>
                      Subject
                    </span>

                    <span>
                      Classes
                    </span>

                    <span>
                      Substitutions
                    </span>

                    <span>
                      Status
                    </span>

                    <span>
                      Action
                    </span>

                  </div>


                  {teachers.map((teacher) => {

                    const absent =
                      isTeacherAbsent(
                        teacher.name,
                        selectedDay
                      );


                    const substitutionCount =
                      getDailySubstitutionCount(
                        teacher.name,
                        selectedDay
                      );


                    const teacherSchedule =
                      masterTimetable[
                      teacher.id
                      ]?.[selectedDay] || {};


                    const teacherClasses =
                      Object.values(
                        teacherSchedule
                      )
                        .filter(Boolean)
                        .map(
                          (slot) =>
                            slot.className
                        );


                    const uniqueClasses =
                      [...new Set(
                        teacherClasses
                      )];


                    const isSubstituting =
                      substitutionCount > 0;


                    return (

                      <div
                        className="teachers-table-row"
                        key={teacher.id}
                      >


                        {/* TEACHER */}

                        <div className="teacher-name-cell">

                          <div className="teacher-large-avatar">

                            {teacher.name.charAt(0)}

                          </div>


                          <div>

                            <strong>
                              {teacher.name}
                            </strong>


                            <span>

                              {teacher.activeForSubstitution
                                ? "Teaching Staff"
                                : "Not eligible for substitution"}

                            </span>

                          </div>

                        </div>


                        {/* SUBJECT */}

                        <div className="teacher-subject">

                          <span className="subject-badge">

                            Staff

                          </span>

                        </div>


                        {/* CLASSES */}

                        <div className="teacher-classes">

                          {uniqueClasses.length > 0

                            ? uniqueClasses
                              .slice(0, 3)
                              .map(
                                (className) => (

                                  <span
                                    key={className}
                                    className="class-chip"
                                  >

                                    {className}

                                  </span>

                                )
                              )

                            : (

                              <span className="no-class">
                                No classes
                              </span>

                            )}

                        </div>


                        {/* SUBSTITUTIONS */}

                        <div className="teacher-workload">

                          <strong>
                            {substitutionCount}
                          </strong>

                          <span>
                            / {settings.maxDailySubstitutions} today
                          </span>

                        </div>


                        {/* STATUS */}

                        <div>

                          {absent ? (

                            <span className="teacher-status absent">
                              Absent
                            </span>

                          ) : !teacher.activeForSubstitution ? (

                            <span className="teacher-status unavailable">
                              Timetable Only
                            </span>

                          ) : isSubstituting ? (

                            <span className="teacher-status substitution">
                              Substituting
                            </span>

                          ) : (

                            <span className="teacher-status available">
                              Available
                            </span>

                          )}

                        </div>


                        {/* ACTION */}

                        <div>

                          <button className="teacher-view-button">
                            View
                          </button>

                        </div>

                      </div>

                    );

                  })}

                </div>

              </section>

            </div>

          )}


          {/* ===================================
    CLASSES PAGE
=================================== */}

          {activePage === "Classes" && (

            <div className="classes-page">

              {/* PAGE HEADER */}
              <div className="page-header">

                <div>

                  <span className="page-eyebrow">
                    MANAGEMENT
                  </span>

                  <h1>
                    Classes
                  </h1>

                  <p>
                    Manage classes, sections and their current teaching schedules.
                  </p>

                </div>

                <button className="primary-button">
                  + Add Class
                </button>

              </div>


              {/* CLASS STATISTICS */}
              <div className="class-stats-grid">

                <div className="class-stat-card">

                  <div className="class-stat-icon">
                    ▦
                  </div>

                  <div>
                    <span>Total Classes</span>
                    <strong>8</strong>
                  </div>

                </div>


                <div className="class-stat-card">

                  <div className="class-stat-icon active">
                    ✓
                  </div>

                  <div>
                    <span>Active Classes</span>
                    <strong>8</strong>
                  </div>

                </div>


                <div className="class-stat-card">

                  <div className="class-stat-icon students">
                    ♙
                  </div>

                  <div>
                    <span>Total Students</span>
                    <strong>286</strong>
                  </div>

                </div>


                <div className="class-stat-card">

                  <div className="class-stat-icon sections">
                    ◈
                  </div>

                  <div>
                    <span>Sections</span>
                    <strong>8</strong>
                  </div>

                </div>

              </div>


              {/* CLASS LIST */}
              <section className="classes-section">

                <div className="classes-section-header">

                  <div>

                    <h2>
                      Class Directory
                    </h2>

                    <p>
                      Overview of all classes currently configured in the system.
                    </p>

                  </div>

                  <div className="class-list-count">
                    8 Classes
                  </div>

                </div>


                {/* SEARCH / FILTER */}
                <div className="class-toolbar">

                  <div className="class-search">

                    <span>
                      ⌕
                    </span>

                    <input
                      type="text"
                      placeholder="Search classes..."
                    />

                  </div>


                  <select className="class-filter">

                    <option>
                      All Standards
                    </option>

                    <option>
                      VIII
                    </option>

                    <option>
                      IX
                    </option>

                    <option>
                      X
                    </option>

                  </select>


                  <select className="class-filter">

                    <option>
                      All Sections
                    </option>

                    <option>
                      A
                    </option>

                    <option>
                      B
                    </option>

                    <option>
                      C
                    </option>

                  </select>

                </div>


                {/* CLASS CARDS */}
                <div className="class-card-grid">

                  {[
                    {
                      name: "VIII-A",
                      standard: "VIII",
                      section: "A",
                      students: 36,
                      classTeacher: "Mrs. Patel",
                      room: "Room 201"
                    },

                    {
                      name: "VIII-B",
                      standard: "VIII",
                      section: "B",
                      students: 34,
                      classTeacher: "Ms. Joshi",
                      room: "Room 202"
                    },

                    {
                      name: "VIII-C",
                      standard: "VIII",
                      section: "C",
                      students: 35,
                      classTeacher: "Mrs. Desai",
                      room: "Room 203"
                    },

                    {
                      name: "IX-A",
                      standard: "IX",
                      section: "A",
                      students: 38,
                      classTeacher: "Mr. Sharma",
                      room: "Room 301"
                    },

                    {
                      name: "IX-B",
                      standard: "IX",
                      section: "B",
                      students: 36,
                      classTeacher: "Mrs. Rao",
                      room: "Room 302"
                    },

                    {
                      name: "IX-C",
                      standard: "IX",
                      section: "C",
                      students: 34,
                      classTeacher: "Ms. Joshi",
                      room: "Room 303"
                    },

                    {
                      name: "X-A",
                      standard: "X",
                      section: "A",
                      students: 37,
                      classTeacher: "Mr. Mehta",
                      room: "Room 401"
                    },

                    {
                      name: "X-B",
                      standard: "X",
                      section: "B",
                      students: 36,
                      classTeacher: "Mrs. Rao",
                      room: "Room 402"
                    }

                  ].map((classItem) => (

                    <div
                      className="class-directory-card"
                      key={classItem.name}
                    >

                      {/* CARD TOP */}
                      <div className="class-card-top">

                        <div className="class-card-icon">
                          {classItem.name.split("-")[0]}
                        </div>

                        <div>

                          <h3>
                            {classItem.name}
                          </h3>

                          <span>
                            Section {classItem.section}
                          </span>

                        </div>

                        <span className="class-active-badge">
                          Active
                        </span>

                      </div>


                      {/* CLASS DETAILS */}
                      <div className="class-details">

                        <div className="class-detail-item">

                          <span>
                            Students
                          </span>

                          <strong>
                            {classItem.students}
                          </strong>

                        </div>


                        <div className="class-detail-item">

                          <span>
                            Class Teacher
                          </span>

                          <strong>
                            {classItem.classTeacher}
                          </strong>

                        </div>


                        <div className="class-detail-item">

                          <span>
                            Room
                          </span>

                          <strong>
                            {classItem.room}
                          </strong>

                        </div>

                      </div>


                      {/* CARD FOOTER */}
                      <div className="class-card-footer">

                        <span>
                          Standard {classItem.standard}
                        </span>

                        <button className="class-view-button">
                          View Class →
                        </button>

                      </div>

                    </div>

                  ))}

                </div>

              </section>

            </div>

          )}




          {/* ===================================
    REPORTS PAGE
=================================== */}

          {activePage === "Reports" && (

            <div className="reports-page">

              <div className="page-header">

                <div>

                  <span className="page-eyebrow">
                    SYSTEM
                  </span>

                  <h1>
                    Reports
                  </h1>

                  <p>
                    Analyse substitutions, teacher workload and attendance activity.
                  </p>

                </div>

                <div className="settings-header-actions">

                  <button
                    className="secondary-button"
                    onClick={printReport}
                  >
                    🖨 Print Report
                  </button>

                  <button
                    className="secondary-button"
                    onClick={exportWordReport}
                  >
                    W Export Editable Word
                  </button>

                  <button
                    className="primary-button"
                    onClick={exportPdfReport}
                  >
                    ↓ Export PDF
                  </button>

                </div>

              </div>


              <div className="report-stats-grid">

                <div className="report-stat-card">

                  <div className="report-stat-icon">
                    ↻
                  </div>

                  <div>
                    <span>Total Substitutions</span>
                    <strong>{reportSubstitutions.length}</strong>
                    <small>{reportDateRange}</small>
                  </div>

                </div>


                <div className="report-stat-card">

                  <div className="report-stat-icon assigned">
                    ✓
                  </div>

                  <div>
                    <span>Assigned</span>
                    <strong>{reportAssignedCount}</strong>
                    <small>Successfully covered</small>
                  </div>

                </div>


                <div className="report-stat-card">

                  <div className="report-stat-icon pending">
                    !
                  </div>

                  <div>
                    <span>Pending</span>
                    <strong>{reportPendingCount}</strong>
                    <small>Require attention</small>
                  </div>

                </div>


                <div className="report-stat-card">

                  <div className="report-stat-icon absent">
                    ♙
                  </div>

                  <div>
                    <span>Teacher Absences</span>
                    <strong>{reportAbsences.length}</strong>
                    <small>{formattedSelectedDate}</small>
                  </div>

                </div>

              </div>


              <div className="report-controls">

                <div className="report-control">

                  <label>
                    Report Type
                  </label>

                  <select
                    value={reportType}
                    onChange={(e) =>
                      setReportType(e.target.value)
                    }
                  >
                    <option value="Daily Substitution Report">
                      Daily Substitution Report
                    </option>

                    <option value="Teacher Workload Report">
                      Teacher Workload Report
                    </option>

                    <option value="Absence Report">
                      Absence Report
                    </option>

                    <option value="Pending Substitution Report">
                      Pending Substitution Report
                    </option>
                  </select>

                </div>


                <div className="report-control">

                  <label>
                    Date Range
                  </label>

                  <select
                    value={reportDateRange}
                    onChange={(e) =>
                      setReportDateRange(e.target.value)
                    }
                  >
                    <option value="Today">
                      Today
                    </option>

                    <option value="This Week">
                      This Week
                    </option>

                    <option value="This Month">
                      This Month
                    </option>

                    <option value="Academic Year">
                      Academic Year
                    </option>
                  </select>

                </div>


                <div className="report-control">

                  <label>
                    Class
                  </label>

                  <select
                    value={reportClass}
                    onChange={(e) =>
                      setReportClass(e.target.value)
                    }
                  >
                    <option value="All Classes">
                      All Classes
                    </option>

                    {timetableClasses.map(
                      (className) => (
                        <option
                          key={className}
                          value={className}
                        >
                          {className}
                        </option>
                      )
                    )}
                  </select>

                </div>

              </div>


              <div className="reports-content-grid">

                <section className="report-panel">

                  <div className="report-panel-header">

                    <div>

                      <h2>
                        {reportType}
                      </h2>

                      <p>
                        Showing {reportClass === "All Classes"
                          ? "all classes"
                          : reportClass} for {reportDateRange.toLowerCase()}.
                      </p>

                    </div>

                    <span className="report-date">
                      {formattedSelectedDate}
                    </span>

                  </div>


                  <div className="report-summary-list">

                    <div className="report-summary-row">

                      <div className="report-summary-label">
                        <span className="summary-dot total"></span>
                        Total Requirements
                      </div>

                      <strong>
                        {reportSubstitutions.length}
                      </strong>

                    </div>


                    <div className="report-summary-row">

                      <div className="report-summary-label">
                        <span className="summary-dot assigned"></span>
                        Assigned
                      </div>

                      <strong>
                        {reportAssignedCount}
                      </strong>

                    </div>


                    <div className="report-summary-row">

                      <div className="report-summary-label">
                        <span className="summary-dot pending"></span>
                        Pending
                      </div>

                      <strong>
                        {reportPendingCount}
                      </strong>

                    </div>

                  </div>


                  <div className="completion-area">

                    <div className="completion-header">

                      <span>
                        Coverage Rate
                      </span>

                      <strong>
                        {reportCoverageRate}%
                      </strong>

                    </div>

                    <div className="completion-bar">

                      <div
                        style={{
                          width: `${reportCoverageRate}%`
                        }}
                      ></div>

                    </div>

                  </div>

                </section>


                <section className="report-panel">

                  <div className="report-panel-header">

                    <div>

                      <h2>
                        Teacher Workload
                      </h2>

                      <p>
                        Substitutions assigned for the current report filters.
                      </p>

                    </div>

                  </div>


                  <div className="workload-list">

                    {teachers
                      .map((teacher) => ({
                        id: teacher.id,
                        name: teacher.name,
                        count:
                          reportSubstitutions.filter(
                            (item) =>
                              item.substitute === teacher.name &&
                              item.status === "Assigned"
                          ).length
                      }))
                      .sort((a, b) => b.count - a.count)
                      .map((teacher) => (

                        <div
                          className="workload-row"
                          key={teacher.name}
                        >

                          <div className="workload-teacher">

                            <div className="workload-avatar">
                              {teacher.name.charAt(0)}
                            </div>

                            <span>
                              {teacher.name}
                            </span>

                          </div>


                          <div className="workload-progress">

                            <div className="workload-track">

                              <div
                                style={{
                                  width: `${Math.min(
                                    (
                                      teacher.count /
                                      settings.maxDailySubstitutions
                                    ) * 100,
                                    100
                                  )}%`
                                }}
                              ></div>

                            </div>

                          </div>


                          <strong>
                            {teacher.count}/{settings.maxDailySubstitutions}
                          </strong>

                        </div>

                      ))}

                  </div>

                </section>


                <section className="report-panel full-report-panel">

                  <div className="report-panel-header">

                    <div>

                      <h2>
                        Absence Report
                      </h2>

                      <p>
                        Teachers currently marked absent for the selected working date.
                      </p>

                    </div>

                    <span className="absence-count-badge">
                      {reportAbsences.length} Absent
                    </span>

                  </div>


                  {reportAbsences.length === 0 ? (

                    <div className="report-empty-state">

                      <div className="report-empty-icon">
                        ✓
                      </div>

                      <strong>
                        No absence records for this report
                      </strong>

                      <span>
                        Change the report type or working date to view other records.
                      </span>

                    </div>

                  ) : (

                    <div className="absence-report-list">

                      {reportAbsences.map((teacher) => (

                        <div
                          className="absence-report-row"
                          key={`${teacher.teacherId}-${teacher.day}`}
                        >

                          <div className="absence-report-person">

                            <div className="absence-report-avatar">
                              {teacher.name.charAt(0)}
                            </div>

                            <div>

                              <strong>
                                {teacher.name}
                              </strong>

                              <span>
                                {teacher.type}
                              </span>

                            </div>

                          </div>


                          <span className="absence-report-status">
                            Absent
                          </span>

                        </div>

                      ))}

                    </div>

                  )}

                </section>


                <section className="report-panel full-report-panel">

                  <div className="report-panel-header">

                    <div>

                      <h2>
                        Report Activity
                      </h2>

                      <p>
                        Latest records matching the selected report filters.
                      </p>

                    </div>

                  </div>


                  {reportSubstitutions.length === 0 ? (

                    <div className="report-empty-state">

                      <div className="report-empty-icon">
                        ↻
                      </div>

                      <strong>
                        No matching substitution activity
                      </strong>

                      <span>
                        Try changing the report type or class filter.
                      </span>

                    </div>

                  ) : (

                    <div className="activity-report-list">

                      {reportSubstitutions
                        .slice(-6)
                        .reverse()
                        .map((item) => (

                          <div
                            className="activity-report-row"
                            key={item.id}
                          >

                            <div className="activity-period">
                              P{item.period}
                            </div>

                            <div className="activity-details">

                              <strong>
                                {item.className}
                              </strong>

                              <span>
                                {item.absent} absent
                              </span>

                            </div>

                            <div className="activity-substitute">

                              {item.substitute ? (
                                <>
                                  <span>
                                    Covered by
                                  </span>

                                  <strong>
                                    {item.substitute}
                                  </strong>
                                </>
                              ) : (
                                <span className="activity-pending">
                                  Awaiting substitute
                                </span>
                              )}

                            </div>

                            <span
                              className={
                                item.status === "Assigned"
                                  ? "activity-status assigned"
                                  : "activity-status pending"
                              }
                            >
                              {item.status}
                            </span>

                          </div>

                        ))}

                    </div>

                  )}

                </section>

              </div>

            </div>

          )}




          {activePage === "Settings" && (
            <div className="page-container">

              {/* ================================
        PAGE HEADER
    ================================= */}

              <div className="page-header">

                <div>
                  <span className="page-eyebrow">SYSTEM</span>

                  <h1>Settings</h1>

                  <p>
                    Manage school, substitution and system preferences.
                  </p>
                </div>

                <div className="settings-header-actions">

                  <button
                    className="secondary-button"
                    onClick={resetSettings}
                  >
                    ↻ Reset
                  </button>

                  <button
                    className="primary-button"
                    onClick={saveSettings}
                  >
                    ✓ Save Settings
                  </button>

                </div>

              </div>


              {/* ================================
        SCHOOL INFORMATION
    ================================= */}

              <div className="settings-section">

                <div className="settings-section-header">

                  <div className="settings-icon">
                    🏫
                  </div>

                  <div>
                    <h2>School Information</h2>

                    <p>
                      Basic information used throughout the system.
                    </p>
                  </div>

                </div>


                <div className="settings-grid">

                  {/* School Name */}

                  <div className="setting-field">

                    <label>School Name</label>

                    <input
                      type="text"
                      value={settings.schoolName}
                      onChange={(e) =>
                        handleSettingChange(
                          "schoolName",
                          e.target.value
                        )
                      }
                    />

                  </div>


                  {/* Academic Year */}

                  <div className="setting-field">

                    <label>Academic Year</label>

                    <input
                      type="text"
                      value={settings.academicYear}
                      onChange={(e) =>
                        handleSettingChange(
                          "academicYear",
                          e.target.value
                        )
                      }
                    />

                  </div>


                  {/* Section */}

                  <div className="setting-field">

                    <label>Section</label>

                    <select
                      value={settings.section}
                      onChange={(e) =>
                        handleSettingChange(
                          "section",
                          e.target.value
                        )
                      }
                    >
                      <option>Senior Section</option>
                      <option>Junior Section</option>
                      <option>Primary Section</option>
                    </select>

                  </div>


                  {/* Working Days */}

                  <div className="setting-field">

                    <label>Working Days</label>

                    <select
                      value={settings.workingDays}
                      onChange={(e) =>
                        handleSettingChange(
                          "workingDays",
                          Number(e.target.value)
                        )
                      }
                    >
                      <option value={5}>
                        5 Days — Monday to Friday
                      </option>
                    </select>

                    <span className="setting-help">
                      School working days are Monday to Friday.
                    </span>

                  </div>

                </div>

              </div>


              {/* ================================
        SUBSTITUTION RULES
    ================================= */}

              <div className="settings-section">

                <div className="settings-section-header">

                  <div className="settings-icon">
                    🔄
                  </div>

                  <div>
                    <h2>Substitution Rules</h2>

                    <p>
                      Control how substitute teachers are assigned.
                    </p>
                  </div>

                </div>


                <div className="settings-grid">

                  {/* Daily Limit */}

                  <div className="setting-field">

                    <label>
                      Maximum Substitutions Per Day
                    </label>

                    <input
                      type="number"
                      min="1"
                      max="5"
                      value={settings.maxDailySubstitutions}
                      onChange={(e) =>
                        handleSettingChange(
                          "maxDailySubstitutions",
                          Number(e.target.value)
                        )
                      }
                    />

                    <span className="setting-help">
                      Maximum periods assigned to one teacher
                      in a single day.
                    </span>

                  </div>


                  {/* Weekly Limit */}

                  <div className="setting-field">

                    <label>
                      Maximum Substitutions Per Week
                    </label>

                    <input
                      type="number"
                      min="1"
                      max="20"
                      value={settings.maxWeeklySubstitutions}
                      onChange={(e) =>
                        handleSettingChange(
                          "maxWeeklySubstitutions",
                          Number(e.target.value)
                        )
                      }
                    />

                    <span className="setting-help">
                      Maximum substitution periods assigned
                      to one teacher each week.
                    </span>

                  </div>

                </div>


                <div className="settings-options">

                  {/* Absent Teacher */}

                  <label className="setting-toggle">

                    <input
                      type="checkbox"
                      checked={settings.preventAbsentTeacher}
                      onChange={(e) =>
                        handleSettingChange(
                          "preventAbsentTeacher",
                          e.target.checked
                        )
                      }
                    />

                    <span className="toggle-switch"></span>

                    <div>
                      <strong>
                        Prevent assigning absent teachers
                      </strong>

                      <small>
                        Teachers marked absent cannot receive
                        substitution periods.
                      </small>
                    </div>

                  </label>


                  {/* Busy Teacher */}

                  <label className="setting-toggle">

                    <input
                      type="checkbox"
                      checked={settings.preventBusyTeacher}
                      onChange={(e) =>
                        handleSettingChange(
                          "preventBusyTeacher",
                          e.target.checked
                        )
                      }
                    />

                    <span className="toggle-switch"></span>

                    <div>
                      <strong>
                        Prevent assigning busy teachers
                      </strong>

                      <small>
                        Teachers already teaching during that
                        period cannot be selected.
                      </small>
                    </div>

                  </label>

                </div>

              </div>


              {/* ================================
        WORKING SCHEDULE
    ================================= */}

              <div className="settings-section">

                <div className="settings-section-header">

                  <div className="settings-icon">
                    🕐
                  </div>

                  <div>
                    <h2>Working Schedule</h2>

                    <p>
                      Configure the school's daily timetable structure.
                    </p>
                  </div>

                </div>


                <div className="settings-grid">

                  {/* Total Periods */}

                  <div className="setting-field">

                    <label>
                      Total Periods Per Day
                    </label>

                    <select
                      value={settings.totalPeriods}
                      onChange={(e) =>
                        handleSettingChange(
                          "totalPeriods",
                          Number(e.target.value)
                        )
                      }
                    >
                      <option value={5}>5 Periods</option>
                      <option value={6}>6 Periods</option>
                      <option value={7}>7 Periods</option>
                      <option value={8}>8 Periods</option>
                      <option value={9}>9 Periods</option>
                    </select>

                  </div>


                  {/* Period Duration */}

                  <div className="setting-field">

                    <label>
                      Period Duration
                    </label>

                    <select
                      value={settings.periodDuration}
                      onChange={(e) =>
                        handleSettingChange(
                          "periodDuration",
                          Number(e.target.value)
                        )
                      }
                    >
                      <option value={35}>35 Minutes</option>
                      <option value={40}>40 Minutes</option>
                      <option value={45}>45 Minutes</option>
                      <option value={50}>50 Minutes</option>
                      <option value={60}>60 Minutes</option>
                    </select>

                  </div>


                  {/* Break */}

                  <div className="setting-field">

                    <label>
                      Break After Period
                    </label>

                    <select
                      value={settings.breakAfterPeriod}
                      onChange={(e) =>
                        handleSettingChange(
                          "breakAfterPeriod",
                          Number(e.target.value)
                        )
                      }
                    >
                      <option value={1}>Period 1</option>
                      <option value={2}>Period 2</option>
                      <option value={3}>Period 3</option>
                    </select>

                  </div>


                  {/* Lunch */}

                  <div className="setting-field">

                    <label>
                      Lunch After Period
                    </label>

                    <select
                      value={settings.lunchAfterPeriod}
                      onChange={(e) =>
                        handleSettingChange(
                          "lunchAfterPeriod",
                          Number(e.target.value)
                        )
                      }
                    >
                      <option value={3}>Period 3</option>
                      <option value={4}>Period 4</option>
                      <option value={5}>Period 5</option>
                    </select>

                  </div>

                </div>

              </div>


              {/* ================================
        NOTIFICATIONS
    ================================= */}

              <div className="settings-section">

                <div className="settings-section-header">

                  <div className="settings-icon">
                    🔔
                  </div>

                  <div>
                    <h2>Notifications</h2>

                    <p>
                      Choose which system notifications are enabled.
                    </p>
                  </div>

                </div>


                <div className="settings-options">

                  {/* Assignment Notifications */}

                  <label className="setting-toggle">

                    <input
                      type="checkbox"
                      checked={settings.assignmentNotifications}
                      onChange={(e) =>
                        handleSettingChange(
                          "assignmentNotifications",
                          e.target.checked
                        )
                      }
                    />

                    <span className="toggle-switch"></span>

                    <div>
                      <strong>
                        Substitution assignment notifications
                      </strong>

                      <small>
                        Notify when a teacher is assigned
                        a substitution.
                      </small>
                    </div>

                  </label>


                  {/* Pending Alerts */}

                  <label className="setting-toggle">

                    <input
                      type="checkbox"
                      checked={settings.pendingAlerts}
                      onChange={(e) =>
                        handleSettingChange(
                          "pendingAlerts",
                          e.target.checked
                        )
                      }
                    />

                    <span className="toggle-switch"></span>

                    <div>
                      <strong>
                        Pending substitution alerts
                      </strong>

                      <small>
                        Show alerts when substitutions remain
                        unassigned.
                      </small>
                    </div>

                  </label>


                  {/* Daily Summary */}

                  <label className="setting-toggle">

                    <input
                      type="checkbox"
                      checked={settings.dailySummary}
                      onChange={(e) =>
                        handleSettingChange(
                          "dailySummary",
                          e.target.checked
                        )
                      }
                    />

                    <span className="toggle-switch"></span>

                    <div>
                      <strong>
                        Daily absence summary
                      </strong>

                      <small>
                        Display a summary of teacher absences
                        for the day.
                      </small>
                    </div>

                  </label>

                </div>

              </div>


              {/* ================================
        BOTTOM ACTION BAR
    ================================= */}

              <div className="settings-bottom-actions">

                <div>
                  <strong>Settings are stored locally</strong>

                  <p>
                    Your changes will remain saved in this browser
                    until the system is connected to the database.
                  </p>
                </div>

                <div className="settings-header-actions">

                  <button
                    className="secondary-button"
                    onClick={resetSettings}
                  >
                    ↻ Reset
                  </button>

                  <button
                    className="primary-button"
                    onClick={saveSettings}
                  >
                    ✓ Save Settings
                  </button>

                </div>

              </div>

            </div>
          )}


          {/* ===================================
    TIMETABLE PAGE
=================================== */}

          {activePage === "Timetable" && (

            <div className="timetable-page">

              {/* =====================================
        PAGE HEADER
    ===================================== */}

              <div className="page-header">

                <div>

                  <span className="page-eyebrow">
                    MANAGEMENT
                  </span>

                  <h1>
                    Timetable
                  </h1>

                  <p>
                    View the official teacher and class timetable.
                  </p>

                </div>

              </div>


              {/* =====================================
        CONTROLS
    ===================================== */}

              <div className="timetable-controls">

                {/* VIEW TYPE */}

                <div className="timetable-control-group">

                  <label>
                    View timetable for
                  </label>

                  <select
                    className="timetable-select"
                    value={timetableView}
                    onChange={(e) => {

                      setTimetableView(e.target.value);

                    }}
                  >

                    <option value="Teacher">
                      Teacher
                    </option>

                    <option value="Class">
                      Class
                    </option>

                  </select>

                </div>


                {/* TEACHER SELECT */}

                {timetableView === "Teacher" && (

                  <div className="timetable-control-group">

                    <label>
                      Select Teacher
                    </label>

                    <select
                      className="timetable-select"
                      value={selectedTimetableTeacher}
                      onChange={(e) =>
                        setSelectedTimetableTeacher(
                          e.target.value
                        )
                      }
                    >

                      <option value="">
                        Select teacher
                      </option>

                      {teachers.map((teacher) => (

                        <option
                          key={teacher.id}
                          value={teacher.id}
                        >
                          {teacher.name}
                        </option>

                      ))}

                    </select>

                  </div>

                )}


                {/* CLASS SELECT */}

                {timetableView === "Class" && (

                  <div className="timetable-control-group">

                    <label>
                      Select Class
                    </label>

                    <select
                      className="timetable-select"
                      value={selectedTimetableClass}
                      onChange={(e) =>
                        setSelectedTimetableClass(
                          e.target.value
                        )
                      }
                    >

                      <option value="">
                        Select class
                      </option>

                      {timetableClasses.map(
                        (className) => (

                          <option
                            key={className}
                            value={className}
                          >
                            {className}
                          </option>

                        )
                      )}

                    </select>

                  </div>

                )}

              </div>


              {/* =====================================
        NOTHING SELECTED
    ===================================== */}

              {(
                timetableView === "Teacher" &&
                !selectedTimetableTeacher
              ) ||
                (
                  timetableView === "Class" &&
                  !selectedTimetableClass
                ) ? (

                <div className="timetable-empty-state">

                  <div className="timetable-empty-icon">
                    ▤
                  </div>

                  <h3>
                    Select a {timetableView.toLowerCase()}
                  </h3>

                  <p>
                    Choose a {timetableView.toLowerCase()}
                    above to view the official weekly timetable.
                  </p>

                </div>

              ) : (

                <>

                  {/* =====================================
            TIMETABLE CARD
        ===================================== */}

                  <section className="timetable-card">

                    <div className="timetable-card-header">

                      <div>

                        <h2>
                          {timetableView === "Teacher"
                            ? selectedTimetableTeacherObject?.name
                            : selectedTimetableClass}

                          {" "}Weekly Timetable
                        </h2>

                        <p>
                          Academic Year {settings.academicYear}
                        </p>

                      </div>

                      <span className="timetable-status">
                        ● Active
                      </span>

                    </div>


                    <div className="timetable-scroll">

                      <div className="dynamic-timetable-grid">

                        {/* HEADER */}

                        <div className="timetable-corner">
                          Period
                        </div>

                        {workingDays.map((day) => (

                          <div
                            className="timetable-day"
                            key={day}
                          >
                            {day}
                          </div>

                        ))}


                        {/* PERIOD ROWS */}

                        {Array.from(
                          {
                            length: settings.totalPeriods,
                          },
                          (_, index) => index + 1
                        ).map((period) => (

                          <div
                            key={period}
                            style={{ display: "contents" }}
                          >

                            {/* PERIOD NUMBER */}

                            <div className="period-label">

                              <strong>
                                {period}
                              </strong>

                              <span>
                                Period {period}
                              </span>

                            </div>


                            {/* MONDAY TO FRIDAY */}

                            {workingDays.map((day) => {

                              const slot =
                                displayedTimetable?.[day]?.[period];

                              if (!slot) {

                                return (

                                  <div
                                    className="free-cell"
                                    key={`${day}-${period}`}
                                  >
                                    <span>
                                      Free Period
                                    </span>
                                  </div>

                                );

                              }


                              return (

                                <div
                                  className="timetable-cell"
                                  key={`${day}-${period}`}
                                >

                                  <strong>
                                    {slot.subject || "Class"}
                                  </strong>


                                  {timetableView === "Teacher" ? (

                                    <span>
                                      {slot.className}
                                    </span>

                                  ) : (

                                    <>
                                      <span>
                                        {slot.teacherName}
                                      </span>

                                      <small>
                                        {slot.subject}
                                      </small>
                                    </>

                                  )}

                                </div>

                              );

                            })}

                          </div>

                        ))}

                      </div>

                    </div>

                  </section>


                  {/* =====================================
            SUMMARY
        ===================================== */}

                  <div className="timetable-summary">

                    <div className="timetable-summary-card">

                      <span>
                        View
                      </span>

                      <strong>
                        {timetableView}
                      </strong>

                    </div>


                    <div className="timetable-summary-card">

                      <span>
                        Working Days
                      </span>

                      <strong>
                        {workingDays.length}
                      </strong>

                    </div>


                    <div className="timetable-summary-card">

                      <span>
                        Periods / Day
                      </span>

                      <strong>
                        {settings.totalPeriods}
                      </strong>

                    </div>


                    <div className="timetable-summary-card">

                      <span>
                        Academic Year
                      </span>

                      <strong>
                        {settings.academicYear}
                      </strong>

                    </div>

                  </div>

                </>

              )}

            </div>

          )}




          {/* ===================================
    OTHER PAGES
=================================== */}

          {activePage !== "Dashboard" &&
            activePage !== "Substitutions" &&
            activePage !== "Manual Assignment" &&
            activePage !== "Teachers" &&
            activePage !== "Classes" &&
            activePage !== "Timetable" &&
            activePage !== "Reports" &&
            activePage !== "Settings" && (

              <div className="placeholder-page">

                <div className="placeholder-icon">
                  ⚙
                </div>

                <h1>
                  {activePage}
                </h1>

                <p>
                  This section will be built next.
                </p>

                <button
                  className="primary-button"
                  onClick={() =>
                    setActivePage("Dashboard")
                  }
                >
                  ← Back to Dashboard
                </button>

              </div>

            )}
        </main>

      </div>

      {/* =====================================
          ABSENCE MODAL
      ===================================== */}

      {showAbsenceModal && (

        <div className="modal-overlay">

          <div className="modal">

            <div className="modal-header">

              <div>

                <h2>
                  Mark Teacher Absent
                </h2>

                <p>
                  Record today's teacher absence.
                </p>

              </div>

              <button
                className="close-button"
                onClick={closeAbsenceModal}
              >
                ×
              </button>

            </div>

            <div className="form-group">

              <label>
                Select Teacher
              </label>

              <select
                value={selectedTeacher}
                onChange={(event) =>
                  setSelectedTeacher(
                    event.target.value
                  )
                }
              >

                <option value="">
                  Select a teacher
                </option>

                {teachers.map((teacher) => (

                  <option
                    key={teacher.id}
                    value={teacher.name}
                  >
                    {teacher.name}
                  </option>

                ))}

              </select>

            </div>

            <div className="form-group">
              <div className="form-group">

                <label>
                  Day
                </label>

                <select
                  value={selectedDay}
                  onChange={(event) =>
                    setSelectedDay(
                      event.target.value
                    )
                  }
                >

                  <option value="Monday">
                    Monday
                  </option>

                  <option value="Tuesday">
                    Tuesday
                  </option>

                  <option value="Wednesday">
                    Wednesday
                  </option>

                  <option value="Thursday">
                    Thursday
                  </option>

                  <option value="Friday">
                    Friday
                  </option>

                </select>

              </div>
              <label>
                Absence Duration
              </label>

              <div className="absence-options">

                {[
                  "Full Day",
                  "First Half",
                  "Second Half",
                ].map((type) => (

                  <button
                    key={type}
                    type="button"
                    className={
                      absenceType === type
                        ? "absence-option active"
                        : "absence-option"
                    }
                    onClick={() =>
                      setAbsenceType(type)
                    }
                  >

                    <strong>
                      {type}
                    </strong>

                    <small>
                      {type === "Full Day"
                        ? "Absent for the entire day"
                        : `Absent during the ${type.toLowerCase()}`}
                    </small>

                  </button>

                ))}

              </div>

            </div>

            <div className="modal-actions">

              <button
                className="cancel-button"
                onClick={closeAbsenceModal}
              >
                Cancel
              </button>

              <button
                className="save-button"
                onClick={saveAbsence}
              >
                Save Absence
              </button>

            </div>

          </div>

        </div>

      )}

      {/* =====================================
          ASSIGN SUBSTITUTE MODAL
      ===================================== */}

      {showAssignModal &&
        selectedSubstitution && (

          <div className="modal-overlay">

            <div className="modal assign-modal">

              <div className="modal-header">

                <div>

                  <h2>
                    Assign Substitute
                  </h2>

                  <p>
                    Choose a teacher who is free for this period.
                  </p>

                </div>

                <button
                  className="close-button"
                  onClick={closeAssignModal}
                >
                  ×
                </button>

              </div>

              <div className="assignment-info">

                <div>

                  <span>
                    PERIOD
                  </span>

                  <strong>
                    {selectedSubstitution.period}
                  </strong>

                </div>

                <div>

                  <span>
                    CLASS
                  </span>

                  <strong>
                    {selectedSubstitution.className}
                  </strong>

                </div>

                <div>

                  <span>
                    ABSENT
                  </span>

                  <strong>
                    {selectedSubstitution.absent}
                  </strong>

                </div>

              </div>

              <div className="form-group">

                <label>
                  Available Teachers
                </label>

                <div className="teacher-selection">
                  {getEligibleTeachers(
                    selectedSubstitution
                  ).map((teacher) => (

                    <button
                      key={teacher.id}
                      type="button"

                      className={
                        selectedSubstitute ===
                          teacher.name

                          ? "teacher-choice selected"
                          : "teacher-choice"
                      }

                      onClick={() =>
                        setSelectedSubstitute(
                          teacher.name
                        )
                      }
                    >


                      <div className="teacher-avatar small">

                        {teacher.name.charAt(0)}

                      </div>


                      <div className="choice-info">

                        <strong>
                          {teacher.name}
                        </strong>


                        <span>

                          {
                            getDailySubstitutionCount(
                              teacher.name,
                              selectedSubstitution.day
                            )
                          }

                          {" / "}
                          {settings.maxDailySubstitutions}
                          {" today • "}

                          {
                            getWeeklySubstitutionCount(
                              teacher.name
                            )
                          }

                          {" / "}
                          {settings.maxWeeklySubstitutions}
                          {" this week"}

                        </span>

                      </div>


                      <span className="choice-check">

                        {selectedSubstitute ===
                          teacher.name
                          ? "✓"
                          : ""}

                      </span>

                    </button>

                  ))}

                </div>

              </div>

              <div className="modal-actions">

                <button
                  className="cancel-button"
                  onClick={closeAssignModal}
                >
                  Cancel
                </button>

                <button
                  className="save-button"
                  onClick={assignSubstitute}
                >
                  Assign Teacher
                </button>

              </div>

            </div>

          </div>

        )}

    </div>
  );
}

export default App;


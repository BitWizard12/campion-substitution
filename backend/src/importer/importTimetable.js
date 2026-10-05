const XLSX = require("xlsx");
const path = require("path");
const db = require("../config/db");

const fs = require("fs");

const UPLOADS_DIR = path.join(
    __dirname,
    "../../uploads"
);

const excelFiles = fs.readdirSync(UPLOADS_DIR)
    .filter(file =>
    /\.(xlsx|xls)$/i.test(file)
);

if (excelFiles.length === 0) {
    throw new Error(
        "No Excel file found inside backend/uploads"
    );
}

if (excelFiles.length > 1) {
    console.log("Excel files found:");
    excelFiles.forEach(file => console.log(`- ${file}`));

    throw new Error(
        "More than one Excel file found. Keep only the timetable Excel file inside backend/uploads."
    );
}

const FILE_PATH = path.join(
    UPLOADS_DIR,
    excelFiles[0]
);

const TARGET_ACADEMIC_YEAR = "2026-2027";

// Actual timetable columns in your Excel file.
// B is the assembly/registration column.
// G and K are breaks.
// Teaching periods are C-F, H-J, L-M.
const PERIOD_COLUMNS = {
    1: 3,
    2: 4,
    3: 5,
    4: 6,
    5: 8,
    6: 9,
    7: 10,
    8: 12,
    9: 13
};

const DAY_ROWS = {
    MON: "Monday",
    TUE: "Tuesday",
    WED: "Wednesday",
    THU: "Thursday",
    FRI: "Friday"
};

// Sheets that are templates / not teacher timetables.
const IGNORED_SHEETS = new Set([
    "FORMAT",
    "Sheet1",
    "Sheet2",
    "Sheet3",
    "Sheet4"
]);

function cleanText(value) {
    if (value === null || value === undefined) {
        return "";
    }

    return String(value)
        .replace(/\s+/g, " ")
        .trim();
}

/**
 * Extract teacher's actual name and academic year from row 3.
 *
 * Example:
 * NAME: - MS. KANCHAN MAKWANA YEAR: - 2025 - 2026
 */
function extractTeacherInfo(value) {
    const text = cleanText(value);

    const nameMatch = text.match(
        /NAME:\s*-\s*(.*?)\s+YEAR\s*:/i
    );

    const yearMatch = text.match(
        /YEAR:\s*-\s*(\d{4})\s*-\s*(\d{4})/i
    );

    return {
        teacherName: nameMatch
            ? cleanText(nameMatch[1])
            : null,

        academicYear: yearMatch
            ? `${yearMatch[1]}-${yearMatch[2]}`
            : null
    };
}

/**
 * Convert:
 * 8A GEO       -> ["8A"]
 * 9A/B REL     -> ["9A", "9B"]
 * 5 A/B REL    -> ["5A", "5B"]
 * 6 A/ B REL   -> ["6A", "6B"]
 */
function extractClasses(value) {
    const text = cleanText(value).toUpperCase();

    const match = text.match(
        /\b(10|[1-9])\s*([A-Z])\s*(?:\/\s*([A-Z]))?\b/
    );

    if (!match) {
        return [];
    }

    const grade = match[1];
    const section1 = match[2];
    const section2 = match[3];

    const classes = [`${grade}${section1}`];

    if (section2) {
        classes.push(`${grade}${section2}`);
    }

    return classes;
}

/**
 * Extract subject from an entry.
 *
 * Examples:
 * 8A ROB       -> ROB
 * 10A E.LIT    -> E.LIT
 * 9A/B REL     -> REL
 * 7A LIB       -> LIB
 */
function extractSubject(value) {
    let text = cleanText(value).toUpperCase();

    if (!text) {
        return null;
    }

    // Remove the class identifier.
    text = text.replace(
        /\b(10|[1-9])\s*[A-Z](?:\s*\/\s*[A-Z])?\b/,
        ""
    );

    text = cleanText(text);

    return text || null;
}

/**
 * Determine what kind of timetable entry this is.
 */
function getEntryType(value) {
    const text = cleanText(value).toUpperCase();

    if (!text) {
        return "FREE";
    }

    if (text.includes("ASSEMBLY")) {
        return "ASSEMBLY";
    }

    if (text === "BREAK") {
        return "BREAK";
    }

    // Meetings and similar non-teaching events.
    if (
        text.includes("MEET") ||
        text.includes("MEETING")
    ) {
        return "SPECIAL";
    }

    return "REGULAR";
}

async function getOrCreateTeacher(teacherName) {
    const [rows] = await db.execute(
        `SELECT id
         FROM teachers
         WHERE teacher_name = ?
         LIMIT 1`,
        [teacherName]
    );

    if (rows.length > 0) {
        return rows[0].id;
    }

    const [result] = await db.execute(
        `INSERT INTO teachers
            (teacher_name)
         VALUES (?)`,
        [teacherName]
    );

    return result.insertId;
}

async function getOrCreateClass(className) {
    const grade = className.match(/^\d+/)?.[0] || null;
    const section = className.match(/[A-Z]+$/)?.[0] || null;

    const [rows] = await db.execute(
        `SELECT id
         FROM classes
         WHERE class_name = ?
         LIMIT 1`,
        [className]
    );

    if (rows.length > 0) {
        return rows[0].id;
    }

    const [result] = await db.execute(
        `INSERT INTO classes
            (class_name, grade, section)
         VALUES (?, ?, ?)`,
        [className, grade, section]
    );

    return result.insertId;
}

async function getOrCreateSubject(subjectName) {
    if (!subjectName) {
        return null;
    }

    const subjectCode = subjectName
        .toUpperCase()
        .replace(/\s+/g, "");

    const [rows] = await db.execute(
        `SELECT id
         FROM subjects
         WHERE subject_code = ?
         LIMIT 1`,
        [subjectCode]
    );                          

    if (rows.length > 0) {
        return rows[0].id;
    }

    const [result] = await db.execute(
        `INSERT INTO subjects
            (subject_code, subject_name)
         VALUES (?, ?)`,
        [subjectCode, subjectName]
    );

    return result.insertId;
}

async function getPeriodId(periodNumber) {
    const [rows] = await db.execute(
        `SELECT id
         FROM periods
         WHERE period_number = ?
         LIMIT 1`,
        [periodNumber]
    );

    if (rows.length === 0) {
        throw new Error(
            `Period ${periodNumber} does not exist in database.`
        );
    }

    return rows[0].id;
}

async function getAcademicYearId() {
    const [rows] = await db.execute(
        `SELECT id
         FROM academic_years
         WHERE year_name = ?
         LIMIT 1`,
        [TARGET_ACADEMIC_YEAR]
    );

    if (rows.length === 0) {
        throw new Error(
            `Academic year ${TARGET_ACADEMIC_YEAR} does not exist.`
        );
    }

    return rows[0].id;
}

async function insertTimetableRecord({
    academicYearId,
    teacherId,
    classId,
    subjectId,
    periodId,
    day,
    timetableType,
    notes
}) {
    /*
     * We use INSERT IGNORE because a combined or duplicated
     * timetable entry should not crash the entire import.
     *
     * Our database already has unique teacher/class slot rules.
     */

    await db.execute(
        `INSERT IGNORE INTO timetable
        (
            academic_year_id,
            teacher_id,
            class_id,
            subject_id,
            period_id,
            day_of_week,
            timetable_type,
            notes
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            academicYearId,
            teacherId,
            classId,
            subjectId,
            periodId,
            day,
            timetableType,
            notes || null
        ]
    );
}

async function importTimetable() {
    console.log("==========================================");
    console.log(" CAMPION TIMETABLE IMPORTER");
    console.log("==========================================");

    console.log("\nReading Excel file:");
    console.log(FILE_PATH);

    const workbook = XLSX.readFile(FILE_PATH);

    console.log("\nSheets found:");
    console.log(workbook.SheetNames);

    const academicYearId = await getAcademicYearId();

    let teacherCount = 0;
    let timetableCount = 0;
    let skippedSheets = 0;
    let skippedEntries = 0;

    const teacherNames = new Set();
    const classNames = new Set();
    const subjectNames = new Set();

    const yearWarnings = [];

    for (const sheetName of workbook.SheetNames) {

        if (IGNORED_SHEETS.has(sheetName)) {
            console.log(`\nSkipping template sheet: ${sheetName}`);
            skippedSheets++;
            continue;
        }

        const worksheet = workbook.Sheets[sheetName];

        const rows = XLSX.utils.sheet_to_json(
            worksheet,
            {
                header: 1,
                defval: null
            }
        );

        if (!rows || rows.length < 7) {
            console.log(`\nSkipping empty/invalid sheet: ${sheetName}`);
            skippedSheets++;
            continue;
        }

        const teacherInfo = extractTeacherInfo(rows[2]?.[0]);

        /*
         * The librarian sheet uses a slightly different format.
         * We still import it as a teacher.
         */
        let teacherName = teacherInfo.teacherName;

        if (!teacherName && sheetName.trim().toLowerCase() === "library") {
            teacherName = "LIBRARIAN";
        }

        if (!teacherName) {
            console.log(
                `\nSkipping ${sheetName}: teacher name not found.`
            );

            skippedSheets++;
            continue;
        }

        if (
            teacherInfo.academicYear &&
            teacherInfo.academicYear !== TARGET_ACADEMIC_YEAR
        ) {
            yearWarnings.push({
                teacher: teacherName,
                sheet: sheetName,
                year: teacherInfo.academicYear
            });
        }

        console.log(`\nProcessing: ${teacherName}`);

        const teacherId = await getOrCreateTeacher(teacherName);

        teacherNames.add(teacherName);
        teacherCount++;

        /*
         * Rows 7-11 contain Monday-Friday.
         */
        for (let rowIndex = 6; rowIndex <= 10; rowIndex++) {

            const row = rows[rowIndex];

            if (!row) {
                continue;
            }

            const dayCode = cleanText(row[0]).toUpperCase();

            const day = DAY_ROWS[dayCode];

            if (!day) {
                continue;
            }

            for (const [periodNumberString, columnNumber] of Object.entries(
                PERIOD_COLUMNS
            )) {

                const periodNumber = Number(periodNumberString);

                /*
                 * ExcelJS/XLSX arrays are zero-indexed.
                 * Column C = index 2.
                 */
                const value = cleanText(
                    row[columnNumber - 1]
                );

                const entryType = getEntryType(value);

                /*
                 * Empty cells are FREE for the teacher,
                 * but we do not create FREE timetable records.
                 *
                 * The substitution engine will determine teacher
                 * availability by looking for the absence of a
                 * regular timetable assignment.
                 */
                if (!value) {
                    continue;
                }

                /*
                 * Assembly, breaks and meetings aren't regular
                 * class-teaching assignments.
                 */
                if (
                    entryType === "BREAK" ||
                    entryType === "ASSEMBLY" ||
                    entryType === "SPECIAL"
                ) {
                    skippedEntries++;
                    continue;
                }

                const classes = extractClasses(value);
                const subject = extractSubject(value);

                /*
                 * If we cannot find a class, don't put it into
                 * timetable because class_id is required.
                 */
                if (classes.length === 0) {
                    console.log(
                        `  Skipping unrecognised entry: ${value}`
                    );

                    skippedEntries++;
                    continue;
                }

                const subjectId = await getOrCreateSubject(subject);

                if (subject) {
                    subjectNames.add(subject);
                }

                const periodId = await getPeriodId(periodNumber);

                /*
                 * Combined entries such as:
                 *
                 * 9A/B REL
                 *
                 * are inserted as two class assignments:
                 *
                 * 9A REL
                 * 9B REL
                 */
                for (const className of classes) {

                    const classId = await getOrCreateClass(
                        className
                    );

                    classNames.add(className);

                    await insertTimetableRecord({
                        academicYearId,
                        teacherId,
                        classId,
                        subjectId,
                        periodId,
                        day,
                        timetableType: "REGULAR",
                        notes: value
                    });

                    timetableCount++;
                }
            }
        }
    }

    console.log("\n==========================================");
    console.log(" IMPORT COMPLETE");
    console.log("==========================================");

    console.log(`Teachers found:       ${teacherNames.size}`);
    console.log(`Classes found:        ${classNames.size}`);
    console.log(`Subjects found:       ${subjectNames.size}`);
    console.log(`Timetable entries:    ${timetableCount}`);
    console.log(`Skipped sheets:       ${skippedSheets}`);
    console.log(`Skipped entries:      ${skippedEntries}`);

    if (yearWarnings.length > 0) {

        console.log("\n⚠️ ACADEMIC YEAR WARNINGS");

        for (const warning of yearWarnings) {
            console.log(
                `- ${warning.teacher} → ${warning.year}`
            );
        }

        console.log(
            `\nDatabase target year: ${TARGET_ACADEMIC_YEAR}`
        );
    }

    console.log("\nImport finished.");
}

importTimetable()
    .then(async () => {
        await db.end();
        process.exit(0);
    })
    .catch(async (error) => {

        console.error("\n❌ IMPORT FAILED");
        console.error(error);

        try {
            await db.end();
        } catch (dbError) {
            console.error(dbError);
        }

        process.exit(1);
    });
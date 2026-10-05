// ==========================================
// CAMPION SCHOOL - TEACHER MASTER LIST
// Senior Section 2026-2027
// ==========================================
//
// IMPORTANT:
//
// ALL teachers remain in this list.
//
// activeForSubstitution: false
// means the teacher stays in the timetable,
// but will NEVER be selected as a substitute.
//
// ==========================================

export const teachers = [
  

  

  {
    id: "joyce-noronha",
    name: "Ms. Joyce Noronha",
    activeForSubstitution: true,
  },

  {
    id: "jennifer-fernandes",
    name: "Ms. Jennifer Fernandes",
    activeForSubstitution: true,
  },

  {
    id: "kelly-gracias",
    name: "Ms. Kelly Gracias",
    activeForSubstitution: true,
  },

  {
    id: "sapphire-fds",
    name: "Ms. Sapphire Fds",
    activeForSubstitution: true,
  },

  {
    id: "anthony-dias",
    name: "Mr. Anthony Dias",
    activeForSubstitution: true,
  },

  {
    id: "melinda-fernandes",
    name: "Ms. Melinda Fernandes",
    activeForSubstitution: true,
  },

  {
    id: "beverley-dsouza",
    name: "Ms. Beverley D'Souza",
    activeForSubstitution: true,
  },

  {
    id: "sunil-almeida",
    name: "Mr. Sunil Almeida",
    activeForSubstitution: true,
  },

  {
    id: "shannen-dsouza",
    name: "Ms. Shannen D'Souza",
    activeForSubstitution: true,
  },

  // Batul Merchant
  {
    id: "b-merchant",
    name: "Ms. B. Merchant",
    activeForSubstitution: false,
  },

  {
    id: "usha-srivastav",
    name: "Ms. Usha Srivastav",
    activeForSubstitution: true,
  },

  {
    id: "rakesh-dubey",
    name: "Mr. Rakesh Dubey",
    activeForSubstitution: true,
  },

  {
    id: "jyoti-mishra",
    name: "Ms. Jyoti Mishra",
    activeForSubstitution: true,
  },

  {
    id: "sharmila-mishra",
    name: "Ms. Sharmila Mishra",
    activeForSubstitution: true,
  },

  {
    id: "margaret-gonsalves",
    name: "Ms. Margaret Gonsalves",
    activeForSubstitution: false,
  },

  {
    id: "savio-alphonso",
    name: "Mr. Savio Alphonso",
    activeForSubstitution: true,
  },

  {
    id: "shashwati-sengupta",
    name: "Ms. Shashwati Sengupta",
    activeForSubstitution: true,
  },

  {
    id: "rosemary-misquitta",
    name: "Ms. Rosemary Misquitta",
    activeForSubstitution: true,
  },

  // Shampa stays in teacher records,
  // but Sarita Yadav will take her timetable.
  
  {
    id: "denziano-rodrigues",
    name: "Mr. Denziano Rodrigues",
    activeForSubstitution: true,
  },

  {
    id: "mitesh-gala",
    name: "Mr. Mitesh Gala",
    activeForSubstitution: true,
  },

  {
    id: "n-mathews",
    name: "Ms. N. Mathews",
    activeForSubstitution: true,
  },

  {
    id: "g-rodrigues",
    name: "Ms. G. Rodrigues",
    activeForSubstitution: true,
  },

  {
    id: "cyrus-pereira",
    name: "Mr. Cyrus Pereira",
    activeForSubstitution: true,
  },

  {
    id: "osden-lopes",
    name: "Mr. Osden Lopes",
    activeForSubstitution: true,
  },

  {
    id: "seetal-tuscano",
    name: "Ms. Seetal Tuscano",
    activeForSubstitution: true,
  },

  {
    id: "a-fernandes",
    name: "Ms. A. Fernandes",
    activeForSubstitution: false,
  },

  {
    id: "w-alva",
    name: "Mr. W. Alva",
    activeForSubstitution: false,
  },

  {
    id: "agnel-das",
    name: "Mr. Agnel Das",
    activeForSubstitution: false,
  },

  {
    id: "s-welkar",
    name: "Ms. S. Welkar",
    activeForSubstitution: true,
  },

  // Sunny Rodrigues
  {
    id: "s-rodrigues",
    name: "Mr. S. Rodrigues",
    activeForSubstitution: false,
  },

  {
    id: "m-gupta",
    name: "Mr. M. Gupta",
    activeForSubstitution: true,
  },

  {
    id: "b-randive",
    name: "Ms. B. Randive",
    activeForSubstitution: true,
  },

  // Shivani / Spanish
  {
    id: "spanish",
    name: "Spanish",
    activeForSubstitution: false,
  },

  {
    id: "h-thakker",
    name: "Ms. H. Thakker",
    activeForSubstitution: false,
  },

  // Lubna
  {
    id: "l-sayed",
    name: "Ms. L. Sayed",
    activeForSubstitution: false,
  },

  {
    id: "p-mistry",
    name: "Ms. P. Mistry",
    activeForSubstitution: false,
  },

  {
    id: "dance",
    name: "Dance",
    activeForSubstitution: false,
  },

  {
    id: "librarian",
    name: "Librarian",
    activeForSubstitution: true,
  },

  {
    id: "maxual-george",
    name: "Mr. Maxual George",
    activeForSubstitution: false,
  },

  // ==========================================
  // NEW TEACHERS
  // ==========================================

  {
    id: "andrew-nathan",
    name: "Mr. Andrew Nathan",
    activeForSubstitution: true,
  },

  {
    id: "sarita-yadav",
    name: "Ms. Sarita Yadav",
    activeForSubstitution: true,
  },
];

// ==========================================
// HELPER ARRAYS
// ==========================================

// Teachers allowed to receive substitutions
export const substitutionTeachers = teachers.filter(
  (teacher) => teacher.activeForSubstitution
);

// Teachers NOT allowed to receive substitutions
export const excludedSubstitutionTeachers = teachers.filter(
  (teacher) => !teacher.activeForSubstitution
);

// Find teacher using ID
export const getTeacherById = (teacherId) => {
  return teachers.find((teacher) => teacher.id === teacherId);
};

// Find teacher using name
export const getTeacherByName = (teacherName) => {
  return teachers.find(
    (teacher) => teacher.name === teacherName
  );
};
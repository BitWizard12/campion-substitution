// ==========================================
// CAMPION SCHOOL - MASTER TIMETABLE
// Senior Section 2026-2027
// ==========================================
//
// SOURCE OF TRUTH:
// Updated Campion timetable Excel supplied by the school.
//
// NOTES:
// - Monday to Friday
// - 9 teaching periods per day
// - null = teacher is free for that period
// - meeting/duty slots remain BUSY but do not require a substitute
// - teacher IDs match src/data/teachers.js
//
// Teachers not present in the updated Excel are intentionally NOT
// added here. isTeacherFree() returns false when a timetable is
// missing so such teachers can never be auto-selected accidentally.
// ==========================================

export const masterTimetable = {
  "andrew-nathan": {
    "Monday": {
      "1": null,
      "2": null,
      "3": {
        "className": "9B",
        "subject": "EL",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": {
        "className": "10B",
        "subject": "EL",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": null,
      "6": {
        "className": null,
        "subject": "E/SS MTG",
        "type": "meeting",
        "requiresSubstitution": false
      },
      "7": null,
      "8": null,
      "9": {
        "className": "10A/B",
        "subject": "Rel.",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Tuesday": {
      "1": null,
      "2": {
        "className": "10B",
        "subject": "EL",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": null,
      "4": null,
      "5": {
        "className": "9B",
        "subject": "EL",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": {
        "className": null,
        "subject": "H/M Meet",
        "type": "meeting",
        "requiresSubstitution": false
      },
      "7": null,
      "8": null,
      "9": null
    },
    "Wednesday": {
      "1": null,
      "2": null,
      "3": null,
      "4": {
        "className": "10B",
        "subject": "EL",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": null,
      "6": null,
      "7": null,
      "8": {
        "className": "9B",
        "subject": "EL",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": null
    },
    "Thursday": {
      "1": null,
      "2": null,
      "3": null,
      "4": null,
      "5": null,
      "6": null,
      "7": null,
      "8": null,
      "9": null
    },
    "Friday": {
      "1": null,
      "2": {
        "className": "9B",
        "subject": "EL",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": null,
      "4": null,
      "5": null,
      "6": null,
      "7": {
        "className": "10B",
        "subject": "EL",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": null,
      "9": null
    }
  },
  "joyce-noronha": {
    "Monday": {
      "1": null,
      "2": {
        "className": "10A",
        "subject": "EL",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": {
        "className": "10B",
        "subject": "ENG",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": {
        "className": "5B",
        "subject": "EL",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": null,
      "6": {
        "className": null,
        "subject": "E/SS MTG",
        "type": "meeting",
        "requiresSubstitution": false
      },
      "7": null,
      "8": null,
      "9": null
    },
    "Tuesday": {
      "1": null,
      "2": {
        "className": "10A",
        "subject": "EL",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": null,
      "4": {
        "className": "7B",
        "subject": "ENG",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": null,
      "6": {
        "className": "5B",
        "subject": "EL",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": null,
      "8": null,
      "9": null
    },
    "Wednesday": {
      "1": null,
      "2": {
        "className": "10B",
        "subject": "ENG",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": {
        "className": "10B",
        "subject": "ENG",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": {
        "className": "5B",
        "subject": "EL",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": null,
      "6": null,
      "7": null,
      "8": null,
      "9": null
    },
    "Thursday": {
      "1": {
        "className": "10A",
        "subject": "EL",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": null,
      "3": {
        "className": "7B",
        "subject": "ENG",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": {
        "className": "7B",
        "subject": "ENG",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": null,
      "6": {
        "className": "5B",
        "subject": "EL",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": null,
      "8": null,
      "9": null
    },
    "Friday": {
      "1": {
        "className": "10A",
        "subject": "EL",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": null,
      "3": null,
      "4": null,
      "5": null,
      "6": null,
      "7": null,
      "8": null,
      "9": null
    }
  },
  "jennifer-fernandes": {
    "Monday": {
      "1": null,
      "2": {
        "className": "7A",
        "subject": "EL",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": {
        "className": "7B",
        "subject": "EL",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": null,
      "5": null,
      "6": {
        "className": "E/SS",
        "subject": "MTS",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": null,
      "8": null,
      "9": null
    },
    "Tuesday": {
      "1": null,
      "2": {
        "className": "7A",
        "subject": "EL",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": {
        "className": "7B",
        "subject": "EL",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": null,
      "5": null,
      "6": {
        "className": null,
        "subject": "H/M Meet",
        "type": "meeting",
        "requiresSubstitution": false
      },
      "7": null,
      "8": null,
      "9": null
    },
    "Wednesday": {
      "1": null,
      "2": {
        "className": "7A",
        "subject": "EL",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": {
        "className": "7B",
        "subject": "EL",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": null,
      "5": null,
      "6": {
        "className": null,
        "subject": "M/SC Meet",
        "type": "meeting",
        "requiresSubstitution": false
      },
      "7": null,
      "8": null,
      "9": null
    },
    "Thursday": {
      "1": {
        "className": "7A",
        "subject": "EL",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": {
        "className": "7B",
        "subject": "EL",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": null,
      "4": null,
      "5": null,
      "6": null,
      "7": null,
      "8": null,
      "9": null
    },
    "Friday": {
      "1": null,
      "2": null,
      "3": null,
      "4": null,
      "5": null,
      "6": null,
      "7": null,
      "8": null,
      "9": null
    }
  },
  "kelly-gracias": {
    "Monday": {
      "1": {
        "className": "5A",
        "subject": "EL",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": null,
      "3": null,
      "4": {
        "className": "6A",
        "subject": "Eng",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": {
        "className": "8B",
        "subject": "Eng",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": {
        "className": null,
        "subject": "E/SS MTG",
        "type": "meeting",
        "requiresSubstitution": false
      },
      "7": {
        "className": "5A",
        "subject": "Hist",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": {
        "className": "6B",
        "subject": "EL",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": null
    },
    "Tuesday": {
      "1": {
        "className": "5A",
        "subject": "EL",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": null,
      "3": {
        "className": "6B",
        "subject": "Hist",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": {
        "className": "6B",
        "subject": "EL",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": null,
      "6": {
        "className": "6B",
        "subject": "Hist",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": null,
      "8": null,
      "9": null
    },
    "Wednesday": {
      "1": {
        "className": "5A",
        "subject": "EL",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": null,
      "3": {
        "className": "6B",
        "subject": "EL",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": {
        "className": "5A",
        "subject": "Hist",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": null,
      "6": {
        "className": "6A",
        "subject": "Hist",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": null,
      "8": {
        "className": "6B",
        "subject": "Hist",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": null
    },
    "Thursday": {
      "1": {
        "className": "6B",
        "subject": "EL",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": null,
      "3": null,
      "4": null,
      "5": null,
      "6": {
        "className": "8B",
        "subject": "Eng",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": {
        "className": "8B",
        "subject": "Eng",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": null,
      "9": null
    },
    "Friday": {
      "1": {
        "className": "5A",
        "subject": "EL",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": null,
      "3": null,
      "4": null,
      "5": {
        "className": "6A",
        "subject": "Eng",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": {
        "className": "6A",
        "subject": "Eng",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": null,
      "8": null,
      "9": {
        "className": "5A",
        "subject": "Hist",
        "type": "class",
        "requiresSubstitution": true
      }
    }
  },
  "sapphire-fds": {
    "Monday": {
      "1": null,
      "2": null,
      "3": {
        "className": "9A",
        "subject": "EL",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": {
        "className": "5A",
        "subject": "Eng",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": {
        "className": "6B",
        "subject": "Geo",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": {
        "className": null,
        "subject": "E/ss MTG",
        "type": "meeting",
        "requiresSubstitution": false
      },
      "7": {
        "className": "6A",
        "subject": "Hist",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": null,
      "9": {
        "className": "9A",
        "subject": "Geo",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Tuesday": {
      "1": null,
      "2": {
        "className": "6A",
        "subject": "Hist",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": null,
      "4": null,
      "5": {
        "className": "5A",
        "subject": "Eng",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": null,
      "7": {
        "className": "9A",
        "subject": "Geo",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": {
        "className": "5B",
        "subject": "Geo",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": {
        "className": "8A",
        "subject": "Eng",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Wednesday": {
      "1": null,
      "2": {
        "className": "5B",
        "subject": "Geo",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": null,
      "4": {
        "className": "6A",
        "subject": "Hist",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": {
        "className": "9A",
        "subject": "EL",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": {
        "className": "9A",
        "subject": "EL",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": null,
      "8": null,
      "9": null
    },
    "Thursday": {
      "1": null,
      "2": {
        "className": "9A",
        "subject": "EL",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": {
        "className": "6B",
        "subject": "Geo",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": null,
      "5": null,
      "6": null,
      "7": {
        "className": "9A",
        "subject": "Geo",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": {
        "className": "8A",
        "subject": "Eng",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": {
        "className": "8A",
        "subject": "Eng",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Friday": {
      "1": {
        "className": "5B",
        "subject": "Geo",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": null,
      "3": {
        "className": "5A",
        "subject": "Eng",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": {
        "className": "5A",
        "subject": "Eng",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": null,
      "6": null,
      "7": null,
      "8": {
        "className": "6B",
        "subject": "Geo",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": {
        "className": "6A/B",
        "subject": "Rel.",
        "type": "class",
        "requiresSubstitution": true
      }
    }
  },
  "anthony-dias": {
    "Monday": {
      "1": null,
      "2": null,
      "3": null,
      "4": null,
      "5": null,
      "6": {
        "className": null,
        "subject": "E/SS MTG",
        "type": "meeting",
        "requiresSubstitution": false
      },
      "7": {
        "className": "8A",
        "subject": "Geo",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": {
        "className": "7A",
        "subject": "Hist",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": null
    },
    "Tuesday": {
      "1": {
        "className": "10A",
        "subject": "His",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": null,
      "3": null,
      "4": {
        "className": "7A",
        "subject": "Hist",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": null,
      "6": {
        "className": "9B",
        "subject": "Geo",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": {
        "className": "10A",
        "subject": "His",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": {
        "className": "8A",
        "subject": "Geo",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": {
        "className": "9A/B",
        "subject": "Ed",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Wednesday": {
      "1": {
        "className": "7A",
        "subject": "Hist",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": null,
      "3": null,
      "4": null,
      "5": null,
      "6": {
        "className": "9B",
        "subject": "Geo",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": {
        "className": "10B",
        "subject": "Geo",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": {
        "className": "7B",
        "subject": "Geo",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": null
    },
    "Thursday": {
      "1": null,
      "2": null,
      "3": null,
      "4": null,
      "5": {
        "className": "8A",
        "subject": "Geo",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": {
        "className": "10A",
        "subject": "His",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": {
        "className": "9B",
        "subject": "Geo",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": {
        "className": "7B",
        "subject": "Geo",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": {
        "className": "10B",
        "subject": "Geo",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Friday": {
      "1": null,
      "2": null,
      "3": null,
      "4": {
        "className": "7B",
        "subject": "Geo",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": null,
      "6": null,
      "7": null,
      "8": {
        "className": "10B",
        "subject": "Geo",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": null
    }
  },
  "melinda-fernandes": {
    "Monday": {
      "1": {
        "className": "9B",
        "subject": "Eng",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": null,
      "3": {
        "className": "8B",
        "subject": "EL",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": {
        "className": "10A",
        "subject": "Eng",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": {
        "className": "9A/B",
        "subject": "Eng",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": {
        "className": null,
        "subject": "E/SS MTG",
        "type": "meeting",
        "requiresSubstitution": false
      },
      "7": null,
      "8": null,
      "9": null
    },
    "Tuesday": {
      "1": {
        "className": "9B",
        "subject": "Eng",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": null,
      "3": {
        "className": "9A/B",
        "subject": "Cas",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": {
        "className": "9A/B",
        "subject": "Cas",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": {
        "className": "10A/B",
        "subject": "Cas",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": {
        "className": "10A/B",
        "subject": "Cas",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": null,
      "8": {
        "className": "9A/B",
        "subject": "Eco",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": null
    },
    "Wednesday": {
      "1": null,
      "2": {
        "className": "10A",
        "subject": "Eng",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": {
        "className": "10A",
        "subject": "Eng",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": null,
      "5": null,
      "6": {
        "className": "8B",
        "subject": "EL",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": null,
      "8": null,
      "9": null
    },
    "Thursday": {
      "1": null,
      "2": null,
      "3": null,
      "4": {
        "className": "8B",
        "subject": "EL",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": {
        "className": "9A/B",
        "subject": "Eco",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": null,
      "7": null,
      "8": null,
      "9": null
    },
    "Friday": {
      "1": {
        "className": "9B",
        "subject": "Eng",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": null,
      "3": {
        "className": "9A/B",
        "subject": "Cas",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": {
        "className": "9A/B",
        "subject": "Cas",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": {
        "className": "10A/B",
        "subject": "Cas",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": {
        "className": "10A/B",
        "subject": "Cas",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": {
        "className": "8B",
        "subject": "EL",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": {
        "className": "9A/B",
        "subject": "Eco",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": null
    }
  },
  "beverley-dsouza": {
    "Monday": {
      "1": null,
      "2": {
        "className": "5B",
        "subject": "Hist",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": null,
      "4": null,
      "5": {
        "className": "6A",
        "subject": "EL",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": {
        "className": null,
        "subject": "E/SS MTG",
        "type": "meeting",
        "requiresSubstitution": false
      },
      "7": null,
      "8": {
        "className": "8A",
        "subject": "Hist",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": {
        "className": "8A",
        "subject": "EL",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Tuesday": {
      "1": {
        "className": "5B",
        "subject": "Hist",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": null,
      "3": null,
      "4": {
        "className": "6A",
        "subject": "EL",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": {
        "className": "7A",
        "subject": "Eng",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": {
        "className": "8A",
        "subject": "EL",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": null,
      "8": null,
      "9": null
    },
    "Wednesday": {
      "1": {
        "className": "5B",
        "subject": "Hist",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": null,
      "3": {
        "className": "6A",
        "subject": "EL",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": null,
      "5": null,
      "6": {
        "className": "8A",
        "subject": "EL",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": {
        "className": "8B",
        "subject": "Hist",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": null,
      "9": {
        "className": "7A",
        "subject": "Geo",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Thursday": {
      "1": null,
      "2": null,
      "3": {
        "className": "7A",
        "subject": "Eng",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": {
        "className": "7A",
        "subject": "Eng",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": null,
      "6": null,
      "7": null,
      "8": {
        "className": "7A",
        "subject": "Geo",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": null
    },
    "Friday": {
      "1": null,
      "2": {
        "className": "7A",
        "subject": "Geo",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": null,
      "4": null,
      "5": null,
      "6": {
        "className": "8B",
        "subject": "Hist",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": {
        "className": "8A",
        "subject": "EL",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": {
        "className": "6A",
        "subject": "EL",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": null
    }
  },
  "sunil-almeida": {
    "Monday": {
      "1": null,
      "2": {
        "className": "10B",
        "subject": "Hist",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": null,
      "4": null,
      "5": null,
      "6": {
        "className": null,
        "subject": "E/SS MTG",
        "type": "meeting",
        "requiresSubstitution": false
      },
      "7": {
        "className": "10",
        "subject": "Eco",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": null,
      "9": null
    },
    "Tuesday": {
      "1": null,
      "2": null,
      "3": null,
      "4": null,
      "5": null,
      "6": {
        "className": null,
        "subject": "H/M Meet",
        "type": "meeting",
        "requiresSubstitution": false
      },
      "7": {
        "className": "10B",
        "subject": "Hist",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": null,
      "9": null
    },
    "Wednesday": {
      "1": null,
      "2": null,
      "3": null,
      "4": null,
      "5": null,
      "6": {
        "className": null,
        "subject": "M/Sc Meet",
        "type": "meeting",
        "requiresSubstitution": false
      },
      "7": {
        "className": "9A",
        "subject": "Hist",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": null,
      "9": {
        "className": "10A",
        "subject": "Geo",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Thursday": {
      "1": null,
      "2": null,
      "3": {
        "className": "10",
        "subject": "Geo",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": {
        "className": "10B",
        "subject": "Hist",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": null,
      "6": {
        "className": "9A",
        "subject": "Hist",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": {
        "className": "10A",
        "subject": "Geo",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": null,
      "9": null
    },
    "Friday": {
      "1": null,
      "2": null,
      "3": {
        "className": "10",
        "subject": "Eco",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": {
        "className": "10",
        "subject": "Eco",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": null,
      "6": {
        "className": "9A",
        "subject": "Hist",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": {
        "className": "10A",
        "subject": "Geo",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": null,
      "9": null
    }
  },
  "shannen-dsouza": {
    "Monday": {
      "1": {
        "className": "5B",
        "subject": "Eng",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": {
        "className": "9A",
        "subject": "Eng",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": null,
      "4": null,
      "5": null,
      "6": {
        "className": null,
        "subject": "E/SS MTG",
        "type": "meeting",
        "requiresSubstitution": false
      },
      "7": {
        "className": "7B",
        "subject": "Hist",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": {
        "className": "8A",
        "subject": "Hist",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": {
        "className": "9B",
        "subject": "His",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Tuesday": {
      "1": null,
      "2": {
        "className": "5B",
        "subject": "Eng",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": {
        "className": "6A",
        "subject": "Geo",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": null,
      "5": null,
      "6": null,
      "7": null,
      "8": {
        "className": "7B",
        "subject": "His",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": null
    },
    "Wednesday": {
      "1": null,
      "2": null,
      "3": null,
      "4": {
        "className": "9A",
        "subject": "Eng",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": {
        "className": "9B",
        "subject": "His",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": {
        "className": "7B",
        "subject": "Hist",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": {
        "className": "8A",
        "subject": "Hist",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": null,
      "9": null
    },
    "Thursday": {
      "1": null,
      "2": {
        "className": "9B",
        "subject": "Hist",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": null,
      "4": null,
      "5": {
        "className": "6A",
        "subject": "Geo",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": null,
      "7": {
        "className": "5B",
        "subject": "VED",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": null,
      "9": null
    },
    "Friday": {
      "1": {
        "className": "9A",
        "subject": "Eng",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": {
        "className": "8A",
        "subject": "Hist",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": {
        "className": "5B",
        "subject": "Eng",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": {
        "className": "5B",
        "subject": "Eng",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": null,
      "6": null,
      "7": {
        "className": "6A",
        "subject": "Geo",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": null,
      "9": {
        "className": "9A",
        "subject": "SUPW",
        "type": "class",
        "requiresSubstitution": true
      }
    }
  },
  "b-merchant": {
    "Monday": {
      "1": null,
      "2": null,
      "3": null,
      "4": null,
      "5": {
        "className": "4C",
        "subject": "Eng",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": {
        "className": "4C",
        "subject": "Eng",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": null,
      "8": null,
      "9": {
        "className": "6B",
        "subject": "Eng",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Tuesday": {
      "1": null,
      "2": {
        "className": "4C",
        "subject": "GP",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": {
        "className": "4C",
        "subject": "Eng",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": {
        "className": "4C",
        "subject": "Eng",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": null,
      "6": null,
      "7": null,
      "8": null,
      "9": null
    },
    "Wednesday": {
      "1": {
        "className": "4C",
        "subject": "Eng",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": {
        "className": "4C",
        "subject": "Eng",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": null,
      "4": null,
      "5": {
        "className": "6B",
        "subject": "Eng",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": null,
      "7": null,
      "8": null,
      "9": null
    },
    "Thursday": {
      "1": null,
      "2": null,
      "3": null,
      "4": null,
      "5": {
        "className": "4C",
        "subject": "Eng",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": {
        "className": "4C",
        "subject": "Eng",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": null,
      "8": null,
      "9": null
    },
    "Friday": {
      "1": {
        "className": "4C",
        "subject": "Eng",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": {
        "className": "4C",
        "subject": "Eng",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": null,
      "4": null,
      "5": {
        "className": "6B",
        "subject": "Eng",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": {
        "className": "6B",
        "subject": "Eng",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": null,
      "8": {
        "className": "4C",
        "subject": "GP",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": null
    }
  },
  "usha-srivastav": {
    "Monday": {
      "1": null,
      "2": {
        "className": "8A",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": null,
      "4": null,
      "5": null,
      "6": {
        "className": "10A",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": {
        "className": "9B",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": {
        "className": "9B",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": null
    },
    "Tuesday": {
      "1": null,
      "2": {
        "className": "9B",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": null,
      "4": null,
      "5": null,
      "6": {
        "className": null,
        "subject": "H/M Meet",
        "type": "meeting",
        "requiresSubstitution": false
      },
      "7": {
        "className": "8A",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": {
        "className": "10A",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": {
        "className": "10A",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Wednesday": {
      "1": null,
      "2": null,
      "3": {
        "className": "9B",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": {
        "className": "8A",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": {
        "className": "8A",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": null,
      "7": null,
      "8": {
        "className": "10A",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": null
    },
    "Thursday": {
      "1": null,
      "2": {
        "className": "8A",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": {
        "className": "9B",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": null,
      "5": {
        "className": "10A",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": null,
      "7": null,
      "8": null,
      "9": null
    },
    "Friday": {
      "1": null,
      "2": null,
      "3": null,
      "4": null,
      "5": null,
      "6": {
        "className": "8A",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": null,
      "8": null,
      "9": {
        "className": "10A",
        "subject": "SUPW",
        "type": "class",
        "requiresSubstitution": true
      }
    }
  },
  "rakesh-dubey": {
    "Monday": {
      "1": null,
      "2": {
        "className": "6B",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": {
        "className": "5A",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": null,
      "5": null,
      "6": {
        "className": "10B",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": null,
      "8": null,
      "9": {
        "className": "8B",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Tuesday": {
      "1": null,
      "2": null,
      "3": {
        "className": "5A",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": {
        "className": "5A",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": {
        "className": "8B",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": {
        "className": null,
        "subject": "H/M Meet",
        "type": "meeting",
        "requiresSubstitution": false
      },
      "7": null,
      "8": {
        "className": "10B",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": {
        "className": "10B",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Wednesday": {
      "1": null,
      "2": {
        "className": "6B",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": null,
      "4": null,
      "5": {
        "className": "5A",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": {
        "className": "6B",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": null,
      "8": {
        "className": "10B",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": {
        "className": "8B",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Thursday": {
      "1": {
        "className": "8B",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": {
        "className": "5A",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": null,
      "4": null,
      "5": null,
      "6": {
        "className": "10B",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": null,
      "8": {
        "className": "6B",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": null
    },
    "Friday": {
      "1": {
        "className": "8B",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": {
        "className": "8B",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": {
        "className": "6B",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": {
        "className": "6B",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": null,
      "6": {
        "className": "5A",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": null,
      "8": null,
      "9": {
        "className": "6B",
        "subject": "Ved",
        "type": "class",
        "requiresSubstitution": true
      }
    }
  },
  "jyoti-mishra": {
    "Monday": {
      "1": null,
      "2": null,
      "3": null,
      "4": {
        "className": "6A",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": null,
      "6": null,
      "7": {
        "className": "9A",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": {
        "className": "9A",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": null
    },
    "Tuesday": {
      "1": null,
      "2": {
        "className": "9A",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": null,
      "4": null,
      "5": {
        "className": "6A",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": {
        "className": null,
        "subject": "H/M Meet",
        "type": "meeting",
        "requiresSubstitution": false
      },
      "7": null,
      "8": {
        "className": "7A",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": {
        "className": "7A",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Wednesday": {
      "1": {
        "className": "6A",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": null,
      "3": {
        "className": "9A",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": null,
      "5": null,
      "6": {
        "className": "7A",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": {
        "className": "7A",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": null,
      "9": {
        "className": "7A",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Thursday": {
      "1": null,
      "2": null,
      "3": {
        "className": "9A",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": null,
      "5": null,
      "6": {
        "className": "6A",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": {
        "className": "5A",
        "subject": "Ved",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": null,
      "9": null
    },
    "Friday": {
      "1": null,
      "2": null,
      "3": {
        "className": "6A",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": {
        "className": "6A",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": null,
      "6": {
        "className": "7A",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": null,
      "8": null,
      "9": {
        "className": "5A",
        "subject": "Ved",
        "type": "class",
        "requiresSubstitution": true
      }
    }
  },
  "sharmila-mishra": {
    "Monday": {
      "1": {
        "className": "7B",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": {
        "className": "3A",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": null,
      "4": {
        "className": "4A",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": {
        "className": "5B",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": null,
      "7": null,
      "8": null,
      "9": null
    },
    "Tuesday": {
      "1": {
        "className": "7B",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": null,
      "3": {
        "className": "5B",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": {
        "className": "3A",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": null,
      "6": {
        "className": null,
        "subject": "H/M Meet",
        "type": "meeting",
        "requiresSubstitution": false
      },
      "7": {
        "className": "4A",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": null,
      "9": null
    },
    "Wednesday": {
      "1": {
        "className": "7B",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": {
        "className": "7B",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": {
        "className": "4A",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": {
        "className": "3A",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": null,
      "6": null,
      "7": {
        "className": "5B",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": null,
      "9": null
    },
    "Thursday": {
      "1": {
        "className": "5B",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": null,
      "3": {
        "className": "4A",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": {
        "className": "3A",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": {
        "className": "7B",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": null,
      "7": null,
      "8": null,
      "9": null
    },
    "Friday": {
      "1": {
        "className": "7B",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": null,
      "3": null,
      "4": null,
      "5": {
        "className": "5B",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": {
        "className": "5B",
        "subject": "Hin",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": {
        "className": "7B",
        "subject": "Ved",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": null,
      "9": null
    }
  },
  "margaret-gonsalves": {
    "Monday": {
      "1": null,
      "2": {
        "className": "5A",
        "subject": "Mar",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": {
        "className": "5B",
        "subject": "Mar",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": null,
      "5": null,
      "6": {
        "className": "7B",
        "subject": "Mar",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": {
        "className": "9A/B",
        "subject": "Mar",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": {
        "className": "9A/B",
        "subject": "Mar",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": null
    },
    "Tuesday": {
      "1": null,
      "2": {
        "className": "9A/B",
        "subject": "Mar",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": null,
      "4": null,
      "5": {
        "className": "5B",
        "subject": "Mar",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": {
        "className": null,
        "subject": "H/M Meet",
        "type": "meeting",
        "requiresSubstitution": false
      },
      "7": {
        "className": "3A",
        "subject": "Mar",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": null,
      "9": null
    },
    "Wednesday": {
      "1": {
        "className": "9B",
        "subject": "Mar",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": null,
      "3": {
        "className": "9A/B",
        "subject": "Mar",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": null,
      "5": {
        "className": "4A",
        "subject": "Mar",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": null,
      "7": {
        "className": "7B",
        "subject": "Mar",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": {
        "className": "3A",
        "subject": "Mar",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": {
        "className": "5A",
        "subject": "Mar",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Thursday": {
      "1": null,
      "2": null,
      "3": {
        "className": "9A/B",
        "subject": "Mar",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": {
        "className": "4A",
        "subject": "Mar",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": null,
      "6": {
        "className": "6B",
        "subject": "Mar",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": null,
      "8": null,
      "9": {
        "className": "7B",
        "subject": "Mar",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Friday": {
      "1": null,
      "2": {
        "className": "6B",
        "subject": "Mar",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": {
        "className": "3A",
        "subject": "Mar",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": null,
      "5": null,
      "6": {
        "className": "4A",
        "subject": "Mar",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": null,
      "8": null,
      "9": null
    }
  },
  "savio-alphonso": {
    "Monday": {
      "1": null,
      "2": null,
      "3": null,
      "4": null,
      "5": {
        "className": "9A",
        "subject": "Bio",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": {
        "className": "9A",
        "subject": "Bio",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": {
        "className": "10A",
        "subject": "Bio",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": null,
      "9": null
    },
    "Tuesday": {
      "1": {
        "className": "10B",
        "subject": "EVS",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": null,
      "3": {
        "className": "9A/B",
        "subject": "PE/BI",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": {
        "className": "9A/B",
        "subject": "PE/BI",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": null,
      "6": null,
      "7": null,
      "8": {
        "className": "9A",
        "subject": "Bio",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": null
    },
    "Wednesday": {
      "1": {
        "className": "10B",
        "subject": "EVS",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": null,
      "3": null,
      "4": null,
      "5": null,
      "6": {
        "className": null,
        "subject": "M/Sc Meet",
        "type": "meeting",
        "requiresSubstitution": false
      },
      "7": {
        "className": "10A",
        "subject": "Bio",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": null,
      "9": null
    },
    "Thursday": {
      "1": {
        "className": "10B",
        "subject": "EVS",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": null,
      "3": null,
      "4": null,
      "5": null,
      "6": null,
      "7": null,
      "8": {
        "className": "10A",
        "subject": "Bio",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": {
        "className": "10A",
        "subject": "Bio",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Friday": {
      "1": {
        "className": "10B",
        "subject": "EVS",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": null,
      "3": null,
      "4": null,
      "5": {
        "className": "10",
        "subject": "A/B PE/BI",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": {
        "className": "10",
        "subject": "A/B PE/BI",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": null,
      "8": {
        "className": "9A",
        "subject": "Bio",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": null
    }
  },
  "shashwati-sengupta": {
    "Monday": {
      "1": {
        "className": "9A",
        "subject": "Che",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": null,
      "3": null,
      "4": null,
      "5": {
        "className": "10A",
        "subject": "Che",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": null,
      "7": {
        "className": "10B",
        "subject": "Bio",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": null,
      "9": null
    },
    "Tuesday": {
      "1": {
        "className": "8B",
        "subject": "Che",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": {
        "className": "8B",
        "subject": "Che",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": null,
      "4": null,
      "5": null,
      "6": {
        "className": "9A",
        "subject": "Che",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": null,
      "8": null,
      "9": null
    },
    "Wednesday": {
      "1": {
        "className": "10A",
        "subject": "Che",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": null,
      "3": null,
      "4": {
        "className": "9B",
        "subject": "Bio",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": {
        "className": "10B",
        "subject": "Bio",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": {
        "className": null,
        "subject": "M/Sc Meet",
        "type": "meeting",
        "requiresSubstitution": false
      },
      "7": null,
      "8": null,
      "9": {
        "className": "9A",
        "subject": "Che",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Thursday": {
      "1": null,
      "2": null,
      "3": {
        "className": "10A",
        "subject": "Che",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": {
        "className": "10A",
        "subject": "Che",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": {
        "className": "8B",
        "subject": "Che",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": null,
      "7": null,
      "8": {
        "className": "9B",
        "subject": "Bio",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": {
        "className": "9B",
        "subject": "Bio",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Friday": {
      "1": null,
      "2": {
        "className": "9A",
        "subject": "Che",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": {
        "className": "10B",
        "subject": "Bio",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": {
        "className": "10B",
        "subject": "Bio",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": null,
      "6": null,
      "7": null,
      "8": {
        "className": "9B",
        "subject": "Bio",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": null
    }
  },
  "rosemary-misquitta": {
    "Monday": {
      "1": {
        "className": "7A",
        "subject": "Che",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": null,
      "3": null,
      "4": null,
      "5": {
        "className": "8A",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": {
        "className": "8A",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": {
        "className": "6B",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": null,
      "9": null
    },
    "Tuesday": {
      "1": {
        "className": "7A",
        "subject": "Che",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": {
        "className": "6B",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": {
        "className": "8A",
        "subject": "Che",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": null,
      "5": {
        "className": "6B",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": null,
      "7": null,
      "8": null,
      "9": {
        "className": "9B",
        "subject": "Ved",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Wednesday": {
      "1": null,
      "2": {
        "className": "8A",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": {
        "className": "8A",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": {
        "className": "6B",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": null,
      "6": {
        "className": null,
        "subject": "M/Sc Meet",
        "type": "meeting",
        "requiresSubstitution": false
      },
      "7": null,
      "8": null,
      "9": null
    },
    "Thursday": {
      "1": {
        "className": "8A",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": null,
      "3": {
        "className": "8A",
        "subject": "Che",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": {
        "className": "8A",
        "subject": "Che",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": null,
      "6": null,
      "7": {
        "className": "6B",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": {
        "className": null,
        "subject": "Meet",
        "type": "meeting",
        "requiresSubstitution": false
      },
      "9": null
    },
    "Friday": {
      "1": {
        "className": "6B",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": null,
      "3": {
        "className": "8A",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": {
        "className": "8A",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": null,
      "6": null,
      "7": {
        "className": "6B",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": null,
      "9": null
    }
  },
  "sarita-yadav": {
    "Monday": {
      "1": {
        "className": "6A",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": {
        "className": "8B",
        "subject": "Phy",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": null,
      "4": {
        "className": "7B",
        "subject": "Bio",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": {
        "className": "9B",
        "subject": "PHY",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": {
        "className": "6A",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": null,
      "8": null,
      "9": {
        "className": "10A",
        "subject": "Ved",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Tuesday": {
      "1": null,
      "2": null,
      "3": null,
      "4": null,
      "5": null,
      "6": {
        "className": "8B",
        "subject": "Phy",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": {
        "className": "8B",
        "subject": "Phy",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": {
        "className": "6A",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": {
        "className": "8B",
        "subject": "Ved",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Wednesday": {
      "1": null,
      "2": null,
      "3": null,
      "4": null,
      "5": {
        "className": "6A",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": {
        "className": null,
        "subject": "M/Sc Meet",
        "type": "meeting",
        "requiresSubstitution": false
      },
      "7": null,
      "8": null,
      "9": null
    },
    "Thursday": {
      "1": {
        "className": "6A",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": {
        "className": "6A",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": null,
      "4": null,
      "5": {
        "className": "9B",
        "subject": "PHY",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": {
        "className": "9B",
        "subject": "PHY",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": {
        "className": "7B",
        "subject": "Bio",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": {
        "className": null,
        "subject": "Meet",
        "type": "meeting",
        "requiresSubstitution": false
      },
      "9": null
    },
    "Friday": {
      "1": {
        "className": "6A",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": null,
      "3": null,
      "4": null,
      "5": {
        "className": "9B",
        "subject": "PHY",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": null,
      "7": null,
      "8": null,
      "9": {
        "className": "9B",
        "subject": "SUPW",
        "type": "class",
        "requiresSubstitution": true
      }
    }
  },
  "denziano-rodrigues": {
    "Monday": {
      "1": {
        "className": "8B",
        "subject": "Bio",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": null,
      "3": null,
      "4": {
        "className": "9A/B",
        "subject": "EVS",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": null,
      "6": null,
      "7": null,
      "8": null,
      "9": {
        "className": "10B",
        "subject": "Ved",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Tuesday": {
      "1": null,
      "2": {
        "className": "7A",
        "subject": "Bio",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": {
        "className": "9A/B",
        "subject": "CTA",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": {
        "className": "9A/B",
        "subject": "CTA",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": {
        "className": "10A/B",
        "subject": "CTA",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": {
        "className": "10A/B",
        "subject": "CTA",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": null,
      "8": null,
      "9": null
    },
    "Wednesday": {
      "1": {
        "className": "8B",
        "subject": "Bio",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": {
        "className": "9A/B",
        "subject": "EVS",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": {
        "className": "7A",
        "subject": "Bio",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": null,
      "5": null,
      "6": {
        "className": null,
        "subject": "M/Sc Meet",
        "type": "meeting",
        "requiresSubstitution": false
      },
      "7": null,
      "8": null,
      "9": null
    },
    "Thursday": {
      "1": null,
      "2": {
        "className": "8B",
        "subject": "Bio",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": null,
      "4": {
        "className": "9A/B",
        "subject": "EVS",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": null,
      "6": {
        "className": "8A",
        "subject": "CS",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": {
        "className": "8A",
        "subject": "CS",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": {
        "className": "8B",
        "subject": "CS",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": {
        "className": "8B",
        "subject": "CS",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Friday": {
      "1": null,
      "2": null,
      "3": {
        "className": "9A/B",
        "subject": "CTA",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": {
        "className": "9A/B",
        "subject": "CTA",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": {
        "className": "10A/B",
        "subject": "CTA",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": {
        "className": "10A/B",
        "subject": "CTA",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": {
        "className": "9A/B",
        "subject": "EVS",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": null,
      "9": null
    }
  },
  "mitesh-gala": {
    "Monday": {
      "1": {
        "className": "10B",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": null,
      "3": {
        "className": "10A",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": {
        "className": "9B",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": {
        "className": "10B",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": null,
      "7": null,
      "8": null,
      "9": null
    },
    "Tuesday": {
      "1": {
        "className": "10B",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": null,
      "3": {
        "className": "10A",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": {
        "className": "10A",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": null,
      "6": null,
      "7": {
        "className": "9B",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": null,
      "9": null
    },
    "Wednesday": {
      "1": {
        "className": "10B",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": {
        "className": "9B",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": null,
      "4": {
        "className": "10A",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": null,
      "6": {
        "className": null,
        "subject": "M/Sc Meet",
        "type": "meeting",
        "requiresSubstitution": false
      },
      "7": {
        "className": "9B",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": null,
      "9": null
    },
    "Thursday": {
      "1": {
        "className": "10B",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": {
        "className": "10A",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": null,
      "4": {
        "className": "9B",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": {
        "className": "10B",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": null,
      "7": null,
      "8": {
        "className": null,
        "subject": "Meet",
        "type": "meeting",
        "requiresSubstitution": false
      },
      "9": null
    },
    "Friday": {
      "1": {
        "className": "10B",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": {
        "className": "10A",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": null,
      "4": null,
      "5": null,
      "6": {
        "className": "9B",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": {
        "className": "9B",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": {
        "className": "10A",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": null
    }
  },
  "n-mathews": {
    "Monday": {
      "1": null,
      "2": {
        "className": "9B",
        "subject": "Che",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": {
        "className": "7A",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": null,
      "5": {
        "className": "7A",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": {
        "className": "5A",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": null,
      "8": {
        "className": "10B",
        "subject": "Che",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": null
    },
    "Tuesday": {
      "1": null,
      "2": null,
      "3": {
        "className": "10B",
        "subject": "Che",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": {
        "className": "10B",
        "subject": "Che",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": null,
      "6": {
        "className": "7A",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": {
        "className": "5A",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": {
        "className": "9B",
        "subject": "Che",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": null
    },
    "Wednesday": {
      "1": null,
      "2": {
        "className": "5A",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": null,
      "4": null,
      "5": {
        "className": "7A",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": {
        "className": null,
        "subject": "M/Sc Meet",
        "type": "meeting",
        "requiresSubstitution": false
      },
      "7": null,
      "8": null,
      "9": {
        "className": "9B",
        "subject": "Che",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Thursday": {
      "1": {
        "className": "9B",
        "subject": "Che",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": {
        "className": "7A",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": {
        "className": "10B",
        "subject": "Che",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": null,
      "5": {
        "className": "5A",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": {
        "className": "5A",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": null,
      "8": {
        "className": null,
        "subject": "Meet",
        "type": "meeting",
        "requiresSubstitution": false
      },
      "9": null
    },
    "Friday": {
      "1": {
        "className": "7A",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": {
        "className": "5A",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": null,
      "4": {
        "className": "7A",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": null,
      "6": null,
      "7": {
        "className": "5A",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": {
        "className": "8A",
        "subject": "Ved",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": null
    }
  },
  "g-rodrigues": {
    "Monday": {
      "1": {
        "className": "8A",
        "subject": "Bio",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": null,
      "3": null,
      "4": null,
      "5": null,
      "6": null,
      "7": {
        "className": "5B",
        "subject": "Sci",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": {
        "className": "5A",
        "subject": "Geo",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": null
    },
    "Tuesday": {
      "1": {
        "className": "8A",
        "subject": "Bio",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": null,
      "3": null,
      "4": null,
      "5": null,
      "6": null,
      "7": null,
      "8": {
        "className": "8A",
        "subject": "Geo",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": {
        "className": "9A",
        "subject": "Ved",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Wednesday": {
      "1": {
        "className": "8A",
        "subject": "Bio",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": null,
      "3": {
        "className": "5B",
        "subject": "Sci",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": null,
      "5": null,
      "6": {
        "className": null,
        "subject": "M/Sc Meet",
        "type": "meeting",
        "requiresSubstitution": false
      },
      "7": null,
      "8": {
        "className": "8A",
        "subject": "Geo",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": null
    },
    "Thursday": {
      "1": null,
      "2": null,
      "3": {
        "className": "5B",
        "subject": "Sci",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": {
        "className": "5A",
        "subject": "Geo",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": null,
      "6": null,
      "7": {
        "className": "5A/B",
        "subject": "Rel",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": null,
      "9": {
        "className": "6B",
        "subject": "Lib",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Friday": {
      "1": null,
      "2": {
        "className": "5B",
        "subject": "Sci",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": {
        "className": "8A",
        "subject": "Geo",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": null,
      "5": {
        "className": "5A",
        "subject": "Geo",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": null,
      "7": null,
      "8": null,
      "9": {
        "className": "5B",
        "subject": "Lib",
        "type": "class",
        "requiresSubstitution": true
      }
    }
  },
  "cyrus-pereira": {
    "Monday": {
      "1": null,
      "2": {
        "className": "6A",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": null,
      "4": null,
      "5": {
        "className": "5A",
        "subject": "Sci",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": {
        "className": "5B",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": null,
      "8": {
        "className": "5B",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": null
    },
    "Tuesday": {
      "1": {
        "className": "6A",
        "subject": "Sci",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": {
        "className": "5A",
        "subject": "Sci",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": null,
      "4": {
        "className": "5B",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": {
        "className": "7B",
        "subject": "Che",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": null,
      "7": {
        "className": "7A",
        "subject": "Ved",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": null,
      "9": null
    },
    "Wednesday": {
      "1": null,
      "2": {
        "className": "6A",
        "subject": "Sci",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": {
        "className": "5A",
        "subject": "Sci",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": null,
      "5": {
        "className": "5B",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": {
        "className": null,
        "subject": "M/Sc Meet",
        "type": "meeting",
        "requiresSubstitution": false
      },
      "7": null,
      "8": {
        "className": "6A",
        "subject": "Sci",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": null
    },
    "Thursday": {
      "1": null,
      "2": null,
      "3": null,
      "4": {
        "className": "5B",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": {
        "className": "5B",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": null,
      "7": null,
      "8": {
        "className": null,
        "subject": "M/Sc Meet",
        "type": "meeting",
        "requiresSubstitution": false
      },
      "9": null
    },
    "Friday": {
      "1": null,
      "2": null,
      "3": null,
      "4": null,
      "5": {
        "className": "7B",
        "subject": "Che",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": null,
      "7": {
        "className": "5B",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": {
        "className": "5A",
        "subject": "Sci",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": null
    }
  },
  "osden-lopes": {
    "Monday": {
      "1": {
        "className": "6B",
        "subject": "Sci",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": {
        "className": "7B",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": {
        "className": "8A",
        "subject": "PHY",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": {
        "className": "7A",
        "subject": "PHY",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": null,
      "6": {
        "className": "8B",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": null,
      "8": null,
      "9": null
    },
    "Tuesday": {
      "1": {
        "className": "6B",
        "subject": "Sci",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": null,
      "3": {
        "className": "8B",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": {
        "className": "8A",
        "subject": "PHY",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": {
        "className": "8A",
        "subject": "PHY",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": {
        "className": "7B",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": {
        "className": "7B",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": null,
      "9": null
    },
    "Wednesday": {
      "1": {
        "className": "6B",
        "subject": "Sci",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": {
        "className": "8B",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": null,
      "4": {
        "className": "7B",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": {
        "className": "8B",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": {
        "className": null,
        "subject": "M/Sc Meet",
        "type": "meeting",
        "requiresSubstitution": false
      },
      "7": null,
      "8": null,
      "9": null
    },
    "Thursday": {
      "1": {
        "className": "7B",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": {
        "className": "6B",
        "subject": "Sci",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": {
        "className": "8B",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": null,
      "5": null,
      "6": {
        "className": "7A",
        "subject": "PHY",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": {
        "className": "7A",
        "subject": "PHY",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": {
        "className": null,
        "subject": "M/Sc Meet",
        "type": "meeting",
        "requiresSubstitution": false
      },
      "9": null
    },
    "Friday": {
      "1": null,
      "2": {
        "className": "7B",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": {
        "className": "7B",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": {
        "className": "8B",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": {
        "className": "8B",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": null,
      "7": null,
      "8": null,
      "9": null
    }
  },
  "seetal-tuscano": {
    "Monday": {
      "1": null,
      "2": null,
      "3": null,
      "4": {
        "className": "8A",
        "subject": "Mar",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": null,
      "6": {
        "className": "10A/B",
        "subject": "Mar",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": null,
      "8": {
        "className": "10A",
        "subject": "Mar",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": {
        "className": "7A",
        "subject": "Mar",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Tuesday": {
      "1": null,
      "2": {
        "className": "8A",
        "subject": "Mar",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": null,
      "4": null,
      "5": null,
      "6": {
        "className": null,
        "subject": "H/M Meet",
        "type": "meeting",
        "requiresSubstitution": false
      },
      "7": null,
      "8": {
        "className": "10A/B",
        "subject": "Mar",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": {
        "className": "10A/B",
        "subject": "Mar",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Wednesday": {
      "1": null,
      "2": null,
      "3": null,
      "4": null,
      "5": null,
      "6": {
        "className": "10A",
        "subject": "Mar",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": {
        "className": "6A",
        "subject": "Mar",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": {
        "className": "10A/B",
        "subject": "Mar",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": null
    },
    "Thursday": {
      "1": null,
      "2": null,
      "3": null,
      "4": null,
      "5": {
        "className": "7A",
        "subject": "Mar",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": {
        "className": "10A/B",
        "subject": "Mar",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": null,
      "8": {
        "className": "9A",
        "subject": "Mar",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": null
    },
    "Friday": {
      "1": {
        "className": "8A",
        "subject": "Mar",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": {
        "className": "6A",
        "subject": "Mar",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": null,
      "4": null,
      "5": {
        "className": "7A",
        "subject": "Mar",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": null,
      "7": null,
      "8": {
        "className": "8B",
        "subject": "Mar",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": {
        "className": "10B",
        "subject": "SUPW",
        "type": "class",
        "requiresSubstitution": true
      }
    }
  },
  "a-fernandes": {
    "Monday": {
      "1": null,
      "2": null,
      "3": null,
      "4": null,
      "5": {
        "className": "EY",
        "subject": "PT",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": null,
      "7": null,
      "8": {
        "className": "1A",
        "subject": "PT",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": {
        "className": "5A",
        "subject": "PT",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Tuesday": {
      "1": null,
      "2": null,
      "3": null,
      "4": null,
      "5": null,
      "6": null,
      "7": null,
      "8": {
        "className": "3A",
        "subject": "PT",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": {
        "className": "5B",
        "subject": "PT",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Wednesday": {
      "1": null,
      "2": null,
      "3": null,
      "4": null,
      "5": {
        "className": "EY",
        "subject": "PT",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": {
        "className": "EY",
        "subject": "PT",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": null,
      "8": {
        "className": "7A",
        "subject": "PT",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": {
        "className": "7B",
        "subject": "PT",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Thursday": {
      "1": null,
      "2": {
        "className": "3A",
        "subject": "PT",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": null,
      "4": null,
      "5": null,
      "6": null,
      "7": null,
      "8": {
        "className": "5A",
        "subject": "PT",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": null
    },
    "Friday": {
      "1": null,
      "2": null,
      "3": null,
      "4": {
        "className": "1A",
        "subject": "PT",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": null,
      "6": {
        "className": "7B",
        "subject": "PT",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": {
        "className": "7A",
        "subject": "PT",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": {
        "className": "5B",
        "subject": "PT",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": null
    }
  },
  "w-alva": {
    "Monday": {
      "1": null,
      "2": null,
      "3": null,
      "4": null,
      "5": null,
      "6": {
        "className": "9B",
        "subject": "PT",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": null,
      "8": null,
      "9": null
    },
    "Tuesday": {
      "1": null,
      "2": null,
      "3": null,
      "4": null,
      "5": {
        "className": "10A/B",
        "subject": "PE/BI",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": {
        "className": "10A/B",
        "subject": "PE/BI",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": null,
      "8": null,
      "9": null
    },
    "Wednesday": {
      "1": null,
      "2": null,
      "3": null,
      "4": null,
      "5": null,
      "6": {
        "className": "10A",
        "subject": "PT",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": null,
      "8": null,
      "9": null
    },
    "Thursday": {
      "1": null,
      "2": null,
      "3": null,
      "4": null,
      "5": null,
      "6": null,
      "7": null,
      "8": {
        "className": "10B",
        "subject": "PT",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": {
        "className": "9A",
        "subject": "PT",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Friday": {
      "1": null,
      "2": null,
      "3": {
        "className": "9A/B",
        "subject": "PE/BI",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": {
        "className": "9A/B",
        "subject": "PE/BI",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": null,
      "6": null,
      "7": null,
      "8": null,
      "9": null
    }
  },
  "agnel-das": {
    "Monday": {
      "1": null,
      "2": null,
      "3": null,
      "4": {
        "className": "8B",
        "subject": "PT",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": {
        "className": "EY",
        "subject": "PT",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": null,
      "7": null,
      "8": null,
      "9": {
        "className": "4A",
        "subject": "PT",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Tuesday": {
      "1": null,
      "2": null,
      "3": null,
      "4": {
        "className": "2A",
        "subject": "PT",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": null,
      "6": null,
      "7": {
        "className": "6B",
        "subject": "PT",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": null,
      "9": null
    },
    "Wednesday": {
      "1": null,
      "2": null,
      "3": null,
      "4": null,
      "5": null,
      "6": null,
      "7": {
        "className": "6B",
        "subject": "PT",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": null,
      "9": {
        "className": "6A",
        "subject": "PT",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Thursday": {
      "1": null,
      "2": null,
      "3": null,
      "4": null,
      "5": null,
      "6": null,
      "7": null,
      "8": null,
      "9": {
        "className": "6A",
        "subject": "PT",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Friday": {
      "1": null,
      "2": null,
      "3": null,
      "4": null,
      "5": {
        "className": "4A",
        "subject": "PT",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": {
        "className": "2A",
        "subject": "PT",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": null,
      "8": null,
      "9": {
        "className": "8A",
        "subject": "PT",
        "type": "class",
        "requiresSubstitution": true
      }
    }
  },
  "s-welkar": {
    "Monday": {
      "1": null,
      "2": null,
      "3": {
        "className": "6B",
        "subject": "Art",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": {
        "className": "6B",
        "subject": "Art",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": null,
      "6": {
        "className": "7A",
        "subject": "Art",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": {
        "className": "7A",
        "subject": "Art",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": {
        "className": "6A",
        "subject": "Art",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": {
        "className": "6A",
        "subject": "Art",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Tuesday": {
      "1": null,
      "2": null,
      "3": {
        "className": "9A/B",
        "subject": "Art",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": {
        "className": "9A/B",
        "subject": "Art",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": {
        "className": "10A/B",
        "subject": "Art",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": {
        "className": "10A/B",
        "subject": "Art",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": null,
      "8": {
        "className": "5A",
        "subject": "Art",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": {
        "className": "5A",
        "subject": "Art",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Wednesday": {
      "1": null,
      "2": null,
      "3": {
        "className": "8B",
        "subject": "Art",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": {
        "className": "8B",
        "subject": "Art",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": null,
      "6": null,
      "7": null,
      "8": {
        "className": "8A",
        "subject": "Art",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": {
        "className": "8A",
        "subject": "Art",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Thursday": {
      "1": null,
      "2": null,
      "3": null,
      "4": null,
      "5": null,
      "6": null,
      "7": null,
      "8": {
        "className": "5B",
        "subject": "Art",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": {
        "className": "5B",
        "subject": "Art",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Friday": {
      "1": null,
      "2": null,
      "3": {
        "className": "9A/B",
        "subject": "Art",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": {
        "className": "9A/B",
        "subject": "Art",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": {
        "className": "10A/B",
        "subject": "Art",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": {
        "className": "10A/B",
        "subject": "Art",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": null,
      "8": {
        "className": "7B",
        "subject": "Art",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": {
        "className": "7B",
        "subject": "Art",
        "type": "class",
        "requiresSubstitution": true
      }
    }
  },
  "s-rodrigues": {
    "Monday": {
      "1": {
        "className": "1B",
        "subject": "Mus",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": {
        "className": "4A",
        "subject": "Mus",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": {
        "className": "2B",
        "subject": "Mus",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": null,
      "5": null,
      "6": null,
      "7": null,
      "8": null,
      "9": null
    },
    "Tuesday": {
      "1": null,
      "2": null,
      "3": null,
      "4": {
        "className": "1A",
        "subject": "Mus",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": null,
      "6": {
        "className": "5A",
        "subject": "Mus",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": {
        "className": "5B",
        "subject": "Mus",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": {
        "className": "2A",
        "subject": "Mus",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": {
        "className": "6A",
        "subject": "Mus",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Wednesday": {
      "1": null,
      "2": {
        "className": "3A",
        "subject": "Mus",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": null,
      "4": null,
      "5": null,
      "6": null,
      "7": null,
      "8": null,
      "9": {
        "className": "6B",
        "subject": "Mus",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Thursday": {
      "1": {
        "className": "4B",
        "subject": "Mus",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": {
        "className": "4C",
        "subject": "Mus",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": null,
      "4": null,
      "5": null,
      "6": {
        "className": "4A",
        "subject": "Mus",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": {
        "className": "1A",
        "subject": "Mus",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": null,
      "9": null
    },
    "Friday": {
      "1": {
        "className": "3B",
        "subject": "Mus",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": {
        "className": "2A",
        "subject": "Mus",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": {
        "className": "3C",
        "subject": "Mus",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": null,
      "5": null,
      "6": null,
      "7": null,
      "8": {
        "className": "3A",
        "subject": "Mus",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": null
    }
  },
  "m-gupta": {
    "Monday": {
      "1": null,
      "2": {
        "className": "2A",
        "subject": "CS",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": null,
      "4": null,
      "5": null,
      "6": null,
      "7": null,
      "8": {
        "className": "7B",
        "subject": "CS",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": {
        "className": "7B",
        "subject": "CS",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Tuesday": {
      "1": null,
      "2": {
        "className": "8A",
        "subject": "MDSP",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": {
        "className": "2A",
        "subject": "CS",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": null,
      "5": null,
      "6": {
        "className": "6A",
        "subject": "CS",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": {
        "className": "6A",
        "subject": "CS",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": {
        "className": "6B",
        "subject": "CS",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": {
        "className": "6B",
        "subject": "CS",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Wednesday": {
      "1": null,
      "2": {
        "className": "4A",
        "subject": "CS",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": null,
      "4": null,
      "5": null,
      "6": {
        "className": "5A",
        "subject": "CS",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": {
        "className": "5A",
        "subject": "CS",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": {
        "className": "5B",
        "subject": "CS",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": {
        "className": "5B",
        "subject": "CS",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Thursday": {
      "1": null,
      "2": {
        "className": "1A",
        "subject": "CS",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": null,
      "4": {
        "className": "2A",
        "subject": "CS",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": null,
      "6": null,
      "7": null,
      "8": {
        "className": "4A",
        "subject": "CS",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": {
        "className": "4A",
        "subject": "CS",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Friday": {
      "1": null,
      "2": {
        "className": "1a",
        "subject": "CS",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": {
        "className": "1A",
        "subject": "CS",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": {
        "className": "3A",
        "subject": "CS",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": {
        "className": "3A",
        "subject": "CS",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": {
        "className": "3A",
        "subject": "CS",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": null,
      "8": {
        "className": "7A",
        "subject": "CS",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": {
        "className": "7A",
        "subject": "CS",
        "type": "class",
        "requiresSubstitution": true
      }
    }
  },
  "b-randive": {
    "Monday": {
      "1": {
        "className": "10A",
        "subject": "Phy",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": null,
      "3": null,
      "4": {
        "className": "9A",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": {
        "className": "7B",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": null,
      "7": null,
      "8": null,
      "9": null
    },
    "Tuesday": {
      "1": {
        "className": "9A",
        "subject": "Phy",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": null,
      "3": {
        "className": "7B",
        "subject": "Phy",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": null,
      "5": {
        "className": "9A",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": null,
      "7": null,
      "8": null,
      "9": null
    },
    "Wednesday": {
      "1": {
        "className": "9A",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": {
        "className": "9A",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": null,
      "4": null,
      "5": {
        "className": "10A",
        "subject": "Phy",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": null,
      "7": null,
      "8": {
        "className": "9A",
        "subject": "Phy",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": {
        "className": "10B",
        "subject": "Phy",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Thursday": {
      "1": {
        "className": "9A",
        "subject": "Phy",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": {
        "className": "10B",
        "subject": "Phy",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": null,
      "4": {
        "className": "9A",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": {
        "className": "9A",
        "subject": "Phy",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": {
        "className": "7B",
        "subject": "Phy",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": {
        "className": "10B",
        "subject": "Phy",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": {
        "className": null,
        "subject": "Meet",
        "type": "meeting",
        "requiresSubstitution": false
      },
      "9": null
    },
    "Friday": {
      "1": null,
      "2": {
        "className": "10B",
        "subject": "Phy",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": {
        "className": "10A",
        "subject": "Phy",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": {
        "className": "10A",
        "subject": "Phy",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": {
        "className": "9A",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": null,
      "7": {
        "className": "9A",
        "subject": "Mat",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": null,
      "9": null
    }
  },
  "spanish": {
    "Monday": {
      "1": null,
      "2": null,
      "3": null,
      "4": null,
      "5": null,
      "6": {
        "className": "10A/B",
        "subject": "SPA",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": {
        "className": "9A/B",
        "subject": "SPA",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": {
        "className": "9A/B",
        "subject": "SPA",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": null
    },
    "Tuesday": {
      "1": null,
      "2": {
        "className": "9A/B",
        "subject": "SPA",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": null,
      "4": null,
      "5": null,
      "6": null,
      "7": null,
      "8": {
        "className": "10A/B",
        "subject": "SPA",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": {
        "className": "10A/B",
        "subject": "SPA",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Wednesday": {
      "1": null,
      "2": null,
      "3": {
        "className": "9A/B",
        "subject": "SPA",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": null,
      "5": null,
      "6": null,
      "7": null,
      "8": {
        "className": "10A/B",
        "subject": "SPA",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": null
    },
    "Thursday": {
      "1": null,
      "2": null,
      "3": null,
      "4": null,
      "5": null,
      "6": {
        "className": "10A/B",
        "subject": "SPA",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": null,
      "8": null,
      "9": null
    },
    "Friday": {
      "1": null,
      "2": null,
      "3": null,
      "4": null,
      "5": null,
      "6": null,
      "7": null,
      "8": null,
      "9": null
    }
  },
  "h-thakker": {
    "Monday": {
      "1": null,
      "2": null,
      "3": null,
      "4": null,
      "5": null,
      "6": null,
      "7": null,
      "8": null,
      "9": null
    },
    "Tuesday": {
      "1": null,
      "2": null,
      "3": null,
      "4": null,
      "5": null,
      "6": null,
      "7": null,
      "8": null,
      "9": null
    },
    "Wednesday": {
      "1": null,
      "2": null,
      "3": null,
      "4": null,
      "5": null,
      "6": {
        "className": "5B",
        "subject": "Fre",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": null,
      "8": null,
      "9": null
    },
    "Thursday": {
      "1": null,
      "2": null,
      "3": {
        "className": "5A",
        "subject": "Fre",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": {
        "className": "6A",
        "subject": "Fre",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": {
        "className": "6B",
        "subject": "Fre",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": null,
      "7": null,
      "8": null,
      "9": null
    },
    "Friday": {
      "1": null,
      "2": null,
      "3": null,
      "4": null,
      "5": null,
      "6": null,
      "7": null,
      "8": null,
      "9": null
    }
  },
  "l-sayed": {
    "Monday": {
      "1": null,
      "2": null,
      "3": null,
      "4": {
        "className": "4A",
        "subject": "Fre",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": null,
      "6": null,
      "7": {
        "className": "9A/B",
        "subject": "Fre",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": {
        "className": "9A/B",
        "subject": "Fre",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": {
        "className": "4A",
        "subject": "Fre",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Tuesday": {
      "1": null,
      "2": {
        "className": "9A/B",
        "subject": "Fre",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": null,
      "4": null,
      "5": null,
      "6": null,
      "7": null,
      "8": {
        "className": "10A/B",
        "subject": "Fre",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": {
        "className": "10A/B",
        "subject": "Fre",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Wednesday": {
      "1": null,
      "2": null,
      "3": {
        "className": "9A/B",
        "subject": "Fre",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": {
        "className": "7A",
        "subject": "Fra",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": {
        "className": "7B",
        "subject": "Fra",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": null,
      "7": null,
      "8": {
        "className": "10A/B",
        "subject": "Fre",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": {
        "className": "4B",
        "subject": "Fra",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Thursday": {
      "1": null,
      "2": null,
      "3": null,
      "4": {
        "className": "4C",
        "subject": "Fra",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": {
        "className": "3A",
        "subject": "Fra",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": {
        "className": "10A/B",
        "subject": "Fre",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": null,
      "8": null,
      "9": null
    },
    "Friday": {
      "1": null,
      "2": null,
      "3": {
        "className": "4C",
        "subject": "Fra",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": null,
      "5": {
        "className": "8A",
        "subject": "Fra",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": null,
      "7": null,
      "8": null,
      "9": {
        "className": "8B",
        "subject": "Fra",
        "type": "class",
        "requiresSubstitution": true
      }
    }
  },
  "p-mistry": {
    "Monday": {
      "1": null,
      "2": null,
      "3": null,
      "4": null,
      "5": null,
      "6": null,
      "7": null,
      "8": null,
      "9": null
    },
    "Tuesday": {
      "1": null,
      "2": {
        "className": "1B",
        "subject": "S&D",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": {
        "className": "2B",
        "subject": "S&D",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": {
        "className": "3B",
        "subject": "S&D",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": {
        "className": "3C",
        "subject": "S&D",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": {
        "className": "2A",
        "subject": "S&D",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": {
        "className": "1A",
        "subject": "S&D",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": null,
      "9": null
    },
    "Wednesday": {
      "1": null,
      "2": null,
      "3": {
        "className": "3A",
        "subject": "S&D",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": {
        "className": "4A",
        "subject": "S&D",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": {
        "className": "4B",
        "subject": "S&D",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": {
        "className": "4C",
        "subject": "S&D",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": null,
      "8": null,
      "9": null
    },
    "Thursday": {
      "1": {
        "className": "5A",
        "subject": "S&D",
        "type": "class",
        "requiresSubstitution": true
      },
      "2": {
        "className": "5B",
        "subject": "S&D",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": {
        "className": "6A",
        "subject": "S&D",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": {
        "className": "6B",
        "subject": "S&D",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": null,
      "6": null,
      "7": null,
      "8": null,
      "9": null
    },
    "Friday": {
      "1": null,
      "2": null,
      "3": null,
      "4": null,
      "5": null,
      "6": null,
      "7": null,
      "8": null,
      "9": null
    }
  },
  "dance": {
    "Monday": {
      "1": null,
      "2": null,
      "3": null,
      "4": null,
      "5": null,
      "6": {
        "className": "6B",
        "subject": "Dance",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": null,
      "8": null,
      "9": {
        "className": "5B",
        "subject": "Dance",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Tuesday": {
      "1": null,
      "2": null,
      "3": {
        "className": "EY",
        "subject": "",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": {
        "className": "EY",
        "subject": "",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": {
        "className": "3A",
        "subject": "Dance",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": {
        "className": "3A",
        "subject": "Dance",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": {
        "className": "4B",
        "subject": "Dance",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": null,
      "9": {
        "className": "4C",
        "subject": "Dance",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Wednesday": {
      "1": null,
      "2": null,
      "3": null,
      "4": null,
      "5": {
        "className": "1A",
        "subject": "Dance",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": {
        "className": "1A",
        "subject": "Dance",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": null,
      "8": null,
      "9": null
    },
    "Thursday": {
      "1": null,
      "2": {
        "className": "1B",
        "subject": "Dance",
        "type": "class",
        "requiresSubstitution": true
      },
      "3": {
        "className": "EY",
        "subject": "",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": {
        "className": "2B",
        "subject": "Dance",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": {
        "className": "3B",
        "subject": "Dance",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": {
        "className": "3C",
        "subject": "Dance",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": null,
      "8": {
        "className": "6A",
        "subject": "Dance",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": {
        "className": "5A",
        "subject": "Dance",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Friday": {
      "1": null,
      "2": null,
      "3": {
        "className": "4A",
        "subject": "Dance",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": {
        "className": "4A",
        "subject": "Dance",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": {
        "className": "EY",
        "subject": "",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": {
        "className": "EY",
        "subject": "",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": null,
      "8": {
        "className": "2A",
        "subject": "Dance",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": {
        "className": "2A",
        "subject": "Dance",
        "type": "class",
        "requiresSubstitution": true
      }
    }
  },
  "librarian": {
    "Monday": {
      "1": null,
      "2": null,
      "3": null,
      "4": null,
      "5": null,
      "6": null,
      "7": null,
      "8": null,
      "9": null
    },
    "Tuesday": {
      "1": null,
      "2": null,
      "3": null,
      "4": null,
      "5": null,
      "6": null,
      "7": null,
      "8": null,
      "9": {
        "className": "7B",
        "subject": "Lia",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Wednesday": {
      "1": null,
      "2": null,
      "3": null,
      "4": null,
      "5": null,
      "6": null,
      "7": null,
      "8": {
        "className": "5A",
        "subject": "Lia",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": null
    },
    "Thursday": {
      "1": null,
      "2": null,
      "3": null,
      "4": null,
      "5": null,
      "6": null,
      "7": {
        "className": "6A",
        "subject": "Lia",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": null,
      "9": {
        "className": "6B",
        "subject": "Lia",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Friday": {
      "1": null,
      "2": null,
      "3": {
        "className": "7A",
        "subject": "Lia",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": null,
      "5": null,
      "6": null,
      "7": null,
      "8": null,
      "9": {
        "className": "5B",
        "subject": "Lia",
        "type": "class",
        "requiresSubstitution": true
      }
    }
  },
  "maxual-george": {
    "Monday": {
      "1": null,
      "2": null,
      "3": null,
      "4": {
        "className": "4B",
        "subject": "",
        "type": "class",
        "requiresSubstitution": true
      },
      "5": {
        "className": "3C",
        "subject": "",
        "type": "class",
        "requiresSubstitution": true
      },
      "6": {
        "className": "2B",
        "subject": "",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": null,
      "8": null,
      "9": {
        "className": "3B",
        "subject": "",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Tuesday": {
      "1": null,
      "2": null,
      "3": null,
      "4": null,
      "5": null,
      "6": null,
      "7": null,
      "8": null,
      "9": {
        "className": "3B",
        "subject": "",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Wednesday": {
      "1": null,
      "2": null,
      "3": {
        "className": "1B",
        "subject": "",
        "type": "class",
        "requiresSubstitution": true
      },
      "4": null,
      "5": null,
      "6": {
        "className": "4B",
        "subject": "",
        "type": "class",
        "requiresSubstitution": true
      },
      "7": {
        "className": "4C",
        "subject": "",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": null,
      "9": {
        "className": "3C",
        "subject": "",
        "type": "class",
        "requiresSubstitution": true
      }
    },
    "Thursday": {
      "1": null,
      "2": null,
      "3": null,
      "4": null,
      "5": null,
      "6": null,
      "7": null,
      "8": {
        "className": "2B",
        "subject": "",
        "type": "class",
        "requiresSubstitution": true
      },
      "9": null
    },
    "Friday": {
      "1": null,
      "2": null,
      "3": null,
      "4": null,
      "5": {
        "className": null,
        "subject": "MTG",
        "type": "meeting",
        "requiresSubstitution": false
      },
      "6": null,
      "7": {
        "className": "1B",
        "subject": "",
        "type": "class",
        "requiresSubstitution": true
      },
      "8": null,
      "9": {
        "className": "4C",
        "subject": "",
        "type": "class",
        "requiresSubstitution": true
      }
    }
  }
};


// ==========================================
// TIMETABLE HELPERS
// ==========================================

export const getTeacherSchedule = (teacherId) => {
  return masterTimetable[teacherId] || null;
};

export const getTeacherSlot = (teacherId, day, period) => {
  return masterTimetable[teacherId]?.[day]?.[period] ?? null;
};

// IMPORTANT:
// If a teacher has no timetable in the authoritative Excel,
// this returns false rather than assuming the teacher is free.
export const isTeacherFree = (teacherId, day, period) => {
  const teacherSchedule = masterTimetable[teacherId];

  if (!teacherSchedule) {
    return false;
  }

  return teacherSchedule?.[day]?.[period] == null;
};

export const requiresSubstitution = (teacherId, day, period) => {
  const slot = getTeacherSlot(teacherId, day, period);

  if (!slot) {
    return false;
  }

  return slot.requiresSubstitution !== false;
};

export const hasTimetable = (teacherId) => {
  return Boolean(masterTimetable[teacherId]);
};

export const timetableTeacherIds = Object.keys(masterTimetable);

// task_4/js/main.ts

/// <reference path="subjects/Cpp.ts" />
/// <reference path="subjects/Java.ts" />
/// <reference path="subjects/React.ts" />

// REMOVED 'export'
const cpp = new Subjects.Cpp();
const java = new Subjects.Java();
const react = new Subjects.React();

// REMOVED 'export'
const cTeacher: Subjects.Teacher = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  experienceTeachingC: 10,
};

// --- Cpp Subject ---
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// --- Java Subject ---
console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// --- React Subject ---
console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

//fix
// Define interfaces
export interface Teacher {
  firstName: string;
  lastName: string;
  experienceTeachingC?: number;
  experienceTeachingJava?: number;
  experienceTeachingReact?: number;
}

export interface Subjects {
  teacher?: Teacher;
  getRequirements(): string;
  getAvailableTeacher(): string;
}

// Create constants for subjects
export const cpp: Subjects = {
  teacher: undefined,
  getRequirements(): string {
    return 'Here is the list of requirements for C++';
  },
  getAvailableTeacher(): string {
    return this.teacher ? `Available teacher: ${this.teacher.firstName}` : 'No teacher available';
  }
};

export const java: Subjects = {
  teacher: undefined,
  getRequirements(): string {
    return 'Here is the list of requirements for Java';
  },
  getAvailableTeacher(): string {
    return this.teacher ? `Available teacher: ${this.teacher.firstName}` : 'No teacher available';
  }
};

export const react: Subjects = {
  teacher: undefined,
  getRequirements(): string {
    return 'Here is the list of requirements for React';
  },
  getAvailableTeacher(): string {
    return this.teacher ? `Available teacher: ${this.teacher.firstName}` : 'No teacher available';
  }
};

// Create a teacher object
export const cTeacher: Teacher = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  experienceTeachingC: 10
};

// C++ subject
console.log('C++');
cpp.teacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Java subject
console.log('Java');
java.teacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// React subject
console.log('React');
react.teacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

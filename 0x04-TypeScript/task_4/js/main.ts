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
// Define the Teacher interface
export interface Teacher {
  firstName: string;
  lastName: string;
  experienceTeachingC?: number;
  experienceTeachingJava?: number;
  experienceTeachingReact?: number;
}

// Base class for Subjects
export class Subjects {
  teacher?: Teacher;

  getRequirements(): string {
    return 'No requirements';
  }

  getAvailableTeacher(): string {
    return this.teacher
      ? `Available teacher: ${this.teacher.firstName}`
      : 'No teacher available';
  }
}

// Subclasses for each subject
export class Cpp extends Subjects {
  getRequirements(): string {
    return 'Here is the list of requirements for C++';
  }
}

export class Java extends Subjects {
  getRequirements(): string {
    return 'Here is the list of requirements for Java';
  }
}

export class React extends Subjects {
  getRequirements(): string {
    return 'Here is the list of requirements for React';
  }
}

// Create a teacher
export const cTeacher: Teacher = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  experienceTeachingC: 10
};

// Instantiate each subject
export const cpp = new Cpp();
export const java = new Java();
export const react = new React();

// Assign teacher and log outputs
console.log('C++');
cpp.teacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('Java');
java.teacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('React');
react.teacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

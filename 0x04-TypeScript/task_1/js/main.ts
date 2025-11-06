// task_1/js/main.ts

// ✅ Define the Teacher interface
export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [key: string]: any; // allows additional attributes
}

// ✅ Extend Teacher to create Directors
export interface Directors extends Teacher {
  numberOfReports: number;
}

// ✅ Example usage
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// ✅ Define the interface for the printTeacher function
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// ✅ Implement the printTeacher function
export const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// ✅ Example usage
console.log(printTeacher('John', 'Doe')); // Output: J. Doe

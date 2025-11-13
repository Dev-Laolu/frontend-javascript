// task_4/js/subjects/Java.ts
/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />

namespace Subjects {
  // Use declaration merging to add to the Teacher interface
  export interface Teacher {
    experienceTeachingJava?: number; // Optional attribute
  }

  // Create Java class extending Subject
  export class Java extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
      // Check if the teacher has experience in Java
      if (this.teacher?.experienceTeachingJava > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }
}
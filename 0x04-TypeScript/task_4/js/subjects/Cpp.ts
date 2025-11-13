// task_4/js/subjects/Cpp.ts
/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />

namespace Subjects {
  // Use declaration merging to add to the Teacher interface
  export interface Teacher {
    experienceTeachingC?: number; // Optional attribute
  }

  // Create Cpp class extending Subject
  export class Cpp extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
      // Check if the teacher has experience in C
      if (this.teacher?.experienceTeachingC > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }
}
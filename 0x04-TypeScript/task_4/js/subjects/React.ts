// task_4/js/subjects/React.ts
/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />

namespace Subjects {
  // Use declaration merging to add to the Teacher interface
  export interface Teacher {
    experienceTeachingReact?: number; // Optional attribute
  }

  // Create React class extending Subject
  export class React extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
      // Check if the teacher has experience in React
      if (this.teacher?.experienceTeachingReact > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }
}
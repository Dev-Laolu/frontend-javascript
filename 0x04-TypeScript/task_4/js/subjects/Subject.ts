// task_4/js/subjects/Subject.ts
/// <reference path="Teacher.ts" />

namespace Subjects {
  // Define Subject class
  export class Subject {
    teacher: Teacher;

    // Setter method for teacher
    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}
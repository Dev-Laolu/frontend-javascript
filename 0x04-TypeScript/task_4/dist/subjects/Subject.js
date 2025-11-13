// task_4/js/subjects/Subject.ts
/// <reference path="Teacher.ts" />
var Subjects;
(function (Subjects) {
    // Define Subject class
    var Subject = /** @class */ (function () {
        function Subject() {
        }
        // Setter method for teacher
        Subject.prototype.setTeacher = function (teacher) {
            this.teacher = teacher;
        };
        return Subject;
    }());
    Subjects.Subject = Subject;
})(Subjects || (Subjects = {}));
//# sourceMappingURL=Subject.js.map
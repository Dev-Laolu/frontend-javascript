var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// task_4/js/subjects/Teacher.ts
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
// task_4/js/subjects/Cpp.ts
/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />
var Subjects;
(function (Subjects) {
    // Create Cpp class extending Subject
    var Cpp = /** @class */ (function (_super) {
        __extends(Cpp, _super);
        function Cpp() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Cpp.prototype.getRequirements = function () {
            return 'Here is the list of requirements for Cpp';
        };
        Cpp.prototype.getAvailableTeacher = function () {
            var _a;
            // Check if the teacher has experience in C
            if (((_a = this.teacher) === null || _a === void 0 ? void 0 : _a.experienceTeachingC) > 0) {
                return "Available Teacher: " + this.teacher.firstName;
            }
            return 'No available teacher';
        };
        return Cpp;
    }(Subjects.Subject));
    Subjects.Cpp = Cpp;
})(Subjects || (Subjects = {}));
// task_4/js/subjects/Java.ts
/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />
var Subjects;
(function (Subjects) {
    // Create Java class extending Subject
    var Java = /** @class */ (function (_super) {
        __extends(Java, _super);
        function Java() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Java.prototype.getRequirements = function () {
            return 'Here is the list of requirements for Java';
        };
        Java.prototype.getAvailableTeacher = function () {
            var _a;
            // Check if the teacher has experience in Java
            if (((_a = this.teacher) === null || _a === void 0 ? void 0 : _a.experienceTeachingJava) > 0) {
                return "Available Teacher: " + this.teacher.firstName;
            }
            return 'No available teacher';
        };
        return Java;
    }(Subjects.Subject));
    Subjects.Java = Java;
})(Subjects || (Subjects = {}));
// task_4/js/subjects/React.ts
/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />
var Subjects;
(function (Subjects) {
    // Create React class extending Subject
    var React = /** @class */ (function (_super) {
        __extends(React, _super);
        function React() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        React.prototype.getRequirements = function () {
            return 'Here is the list of requirements for React';
        };
        React.prototype.getAvailableTeacher = function () {
            var _a;
            // Check if the teacher has experience in React
            if (((_a = this.teacher) === null || _a === void 0 ? void 0 : _a.experienceTeachingReact) > 0) {
                return "Available Teacher: " + this.teacher.firstName;
            }
            return 'No available teacher';
        };
        return React;
    }(Subjects.Subject));
    Subjects.React = React;
})(Subjects || (Subjects = {}));
// task_4/js/main.ts
/// <reference path="subjects/Cpp.ts" />
/// <reference path="subjects/Java.ts" />
/// <reference path="subjects/React.ts" />
// REMOVED 'export'
var cpp = new Subjects.Cpp();
var java = new Subjects.Java();
var react = new Subjects.React();
// REMOVED 'export'
var cTeacher = {
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
//# sourceMappingURL=bundle.js.map
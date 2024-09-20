"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentManager = void 0;
class StudentManager {
    constructor() {
        this.Student_ = [];
    }
    addStudent(Student) {
        this.Student_.push(Student);
    }
    getStudents() {
        return this.Student_;
    }
    getStudentID(id) {
        let _Student;
        this.Student_.forEach(element => {
            if (id === element.id_) {
                _Student = element;
            }
        });
        return _Student;
    }
    getStudentName(name) {
        let _Student = [];
        this.Student_.forEach(element => {
            if (name === element.name_) {
                _Student.push(element);
            }
        });
        return _Student;
    }
    getStudentSurname(surname) {
        let _Student = [];
        this.Student_.forEach(element => {
            if (surname === element.surname_) {
                _Student.push(element);
            }
        });
        return _Student;
    }
    getStudentAge(age) {
        let _Student = [];
        this.Student_.forEach(element => {
            if (age === element.age_) {
                _Student.push(element);
            }
        });
        return _Student;
    }
}
exports.StudentManager = StudentManager;
//# sourceMappingURL=studentsManager.js.map
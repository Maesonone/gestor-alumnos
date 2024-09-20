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
        let _Student = [];
        this.Student_.forEach(element => {
            if (id === element.id_) {
                console.log(`ID: ${element.id_}, Name: ${element.name_}, Surname: ${element.surname_}, Age: ${element.age_}`);
            }
        });
    }
}
exports.StudentManager = StudentManager;
//# sourceMappingURL=studentsManager.js.map
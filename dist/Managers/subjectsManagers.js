"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubjectManager = void 0;
class SubjectManager {
    constructor() {
        this.Subjects_ = [];
    }
    addSubject(subject) {
        this.Subjects_.push(subject);
    }
    removeSubject(id) {
        let a = [];
        a = this.Subjects_.splice(id - 1, 1);
        return a;
    }
    getSubject() {
        return this.Subjects_;
    }
    getSubjectID(id) {
        let _Subject;
        this.Subjects_.forEach(element => {
            if (id === element.id_) {
                _Subject = element;
            }
        });
        return _Subject;
    }
    getSubjectName(name) {
        let _Subject = [];
        this.Subjects_.forEach(element => {
            if (name === element.name_) {
                _Subject.push(element);
            }
        });
        return _Subject;
    }
}
exports.SubjectManager = SubjectManager;
//# sourceMappingURL=subjectsManagers.js.map
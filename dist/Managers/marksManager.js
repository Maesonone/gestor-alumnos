"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.marksManager = void 0;
class marksManager {
    constructor() {
        this.marks = [];
    }
    addMark(mark) {
        this.marks.push(mark);
    }
    removeMark(idSt, idSu) {
        let a = [];
        a = this.marks;
        a.forEach(mark => {
            if (mark.idSt_ === idSt && mark.idSu_ === idSu) {
                a.splice(mark._id - 1, 1);
            }
            else {
                console.log("Something went wrong.");
                a = [];
            }
        });
        return a;
    }
    getMarks() {
        return this.marks;
    }
}
exports.marksManager = marksManager;
//# sourceMappingURL=marksManager.js.map
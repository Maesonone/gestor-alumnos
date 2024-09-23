"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mark = void 0;
class Mark {
    constructor(mark, idSt, idSu) {
        this.mark = mark;
        this.idSt = idSt;
        this.idSu = idSu;
        this.id = Mark.id_;
        this.id++;
    }
    get _mark() {
        return this.mark;
    }
    get _idSt() {
        return this.idSt;
    }
    get _idSu() {
        return this.idSu;
    }
    get _id() {
        return this.id;
    }
    set mark_(mark) {
        this.mark = mark;
    }
    set idSt_(idSt) {
        this.idSt = idSt;
    }
    set idSu_(idSu) {
        this.idSu = idSu;
    }
}
exports.Mark = Mark;
Mark.id_ = 1;
//# sourceMappingURL=Mark.js.map
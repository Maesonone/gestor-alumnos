"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mark = void 0;
class mark {
    constructor(mark, idSt, idSu) {
        this.mark = mark;
        this.idSt = idSt;
        this.idSu = idSu;
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
exports.mark = mark;
//# sourceMappingURL=mark.js.map
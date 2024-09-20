"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subject = void 0;
class Subject {
    constructor(name) {
        this.name = name;
        this.id = Subject._id;
        Subject._id++;
    }
    get name_() {
        return this.name;
    }
    get id_() {
        return this.id;
    }
}
exports.Subject = Subject;
Subject._id = 1;
//# sourceMappingURL=Subject.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.id = Student.id_;
        Student.id_++;
    }
    get name_() {
        return this.name;
    }
    get surname_() {
        return this.surname;
    }
    get age_() {
        return this.age;
    }
    get id_() {
        return this.id;
    }
    set name_(name) {
        this.name = name;
    }
    set surname_(surname) {
        this.surname = surname;
    }
    set age_(age) {
        this.age = age;
    }
    set id_(id) {
        this.id = id;
    }
}
exports.Student = Student;
Student.id_ = 1;
//# sourceMappingURL=Student.js.map
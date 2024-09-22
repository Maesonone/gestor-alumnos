"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline-sync"));
const Subject_js_1 = require("./Subject.js");
const Student_js_1 = require("./Student.js");
const studentsManager_js_1 = require("./Managers/studentsManager.js");
const subjectsManagers_js_1 = require("./Managers/subjectsManagers.js");
const StudentManager_ = new studentsManager_js_1.StudentManager();
const subjectManager_ = new subjectsManagers_js_1.SubjectManager();
let salir = false;
function marks() {
}
function listMenuStudents() {
    const opciones = ["List every student.", "List by ID.", "List by Name.", "List by Surname.", "List by age.", "Go back."];
    const indice = readline.keyInSelect(opciones, "Choose an option: ");
    switch (indice) {
        case 0:
            StudentManager_.getStudents().forEach((element) => {
                console.log(`ID: ${element.id_}, Name: ${element.name_}, Surname: ${element.surname_}, Age: ${element.age_}`);
            });
            break;
        case 1:
            let id = Number(readline.question("Type in the ID to filter:  "));
            let a = StudentManager_.getStudentID(id);
            if (a != undefined) {
                console.log(`ID: ${a.id_}, Name: ${a.name_}, Surname: ${a.surname_}, Age: ${a.age_}`);
            }
            else {
                console.log("There's no student with that ID.");
            }
            break;
        case 2:
            let name = readline.question("Type in the name to filter:  ");
            let b = StudentManager_.getStudentName(name);
            b.forEach(element => {
                console.log(`ID: ${element.id_}, Name: ${element.name_}, Surname: ${element.surname_}, Age: ${element.age_}`);
            });
            break;
        case 3:
            let surname = readline.question("Type in the surname to filter: ");
            let c = StudentManager_.getStudentSurname(surname);
            c.forEach(element => {
                console.log(`ID: ${element.id_}, Name: ${element.name_}, Surname: ${element.surname_}, Age: ${element.age_}`);
            });
            break;
        case 4:
            let age = Number(readline.question("Type in the age to filter: "));
            let d = StudentManager_.getStudentAge(age);
            d.forEach(element => {
                console.log(`ID: ${element.id_}, Name: ${element.name_}, Surname: ${element.surname_}, Age: ${element.age_}`);
            });
            break;
        case 5:
            main();
            break;
        default:
            console.log("Error");
            listMenuStudents();
            break;
    }
}
function listMenuSubjects() {
    const opciones = ["List every subject.", "List by ID.", "List by Name.", "Go back."];
    const indice = readline.keyInSelect(opciones, "Choose an option: ");
    switch (indice) {
        case 0:
            subjectManager_.getSubject().forEach((element) => {
                console.log(`ID: ${element.id_}, Name: ${element.name_}.`);
            });
            break;
        case 1:
            let id = Number(readline.question("Type in the ID to filter:  "));
            let a = subjectManager_.getSubjectID(id);
            if (a != undefined) {
                console.log(`ID: ${a.id_}, Name: ${a.name_}.`);
            }
            else {
                console.log("There's no subject with that ID.");
            }
            break;
        case 2:
            let name = readline.question("Type in the name to filter:  ");
            let b = subjectManager_.getSubjectName(name);
            b.forEach(element => {
                console.log(`ID: ${element.id_}, Name: ${element.name_}.`);
            });
            break;
        case 3:
            main();
            break;
        default:
            console.log("Error");
            listMenuStudents();
            break;
    }
}
function main() {
    if (!salir) {
        const opciones = ["Create student.", "Remove student", "List Student.", "Create subject.", "List subjects.", "Add mark.", "Remove mark.", "Exit."];
        const indice = readline.keyInSelect(opciones, "Seleccione una opción: ");
        if (indice === -1) {
            console.log("Operación cancelada.");
            return;
        }
        switch (indice) {
            case 0:
                StudentManager_.addStudent(new Student_js_1.Student('Paco', 'Flores', 20));
                StudentManager_.addStudent(new Student_js_1.Student('Paco', 'González', 78));
                StudentManager_.addStudent(new Student_js_1.Student('Lucía', 'Flores', 30));
                break;
            case 1:
                let id = Number(readline.question("Type in the Id of the student to remove: "));
                StudentManager_.removeStudent(id);
                break;
            case 2:
                listMenuStudents();
                break;
            case 3:
                subjectManager_.addSubject(new Subject_js_1.Subject('English'));
                subjectManager_.addSubject(new Subject_js_1.Subject('Maths'));
                subjectManager_.addSubject(new Subject_js_1.Subject('History'));
                subjectManager_.addSubject(new Subject_js_1.Subject('Biology'));
                subjectManager_.addSubject(new Subject_js_1.Subject('Spanish'));
                break;
            case 4:
                listMenuSubjects();
                break;
            case 5:
                break;
            case 6:
                break;
            case 7:
                console.log("Thanks for using my program.");
                salir = true;
        }
        main();
    }
}
main();
//# sourceMappingURL=index.js.map
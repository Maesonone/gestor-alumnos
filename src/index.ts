import * as readline from 'readline-sync';
import { Subject } from './Subject.js';
import { Student } from './Student.js';
import {StudentManager} from './Managers/studentsManager.js';
import {SubjectManager} from './Managers/subjectsManagers.js';
import { Mark } from './Mark.js';
import { marksManager } from './Managers/marksManager.js';

const StudentManager_ = new StudentManager();
const subjectManager_ = new SubjectManager();
const marksManager_ = new marksManager();

let salir = false;

function addMarks(){
    let idSt = Number(readline.question("Type in the Id of the student to mark: "));
    let idSu = Number(readline.question("Type in the Id of the subject to mark: "));
    let mark_ = Number(readline.question("Type in the mark to assing: "));

    marksManager_.addMark(new Mark(mark_, idSt, idSu));

    let a: Student | undefined = StudentManager_.getStudentID(idSt);
    let b: Subject | undefined = subjectManager_.getSubjectID(idSu);

    if(a != undefined && b != undefined){
        console.log(`Name: ${a.name_}, Surname: ${a.surname_}, Subject: ${b.name_}, Mark: ${mark_}`)
        }else{
            console.log("Something went wrong.");
        }
}

function removeMark(){
    let idSt = Number(readline.question("Type in the Id of the student to mark: "));
    let idSu = Number(readline.question("Type in the Id of the subject to mark: "));

    marksManager_.removeMark(idSt, idSu);

    let a: Student | undefined = StudentManager_.getStudentID(idSt);
    let b: Subject | undefined = subjectManager_.getSubjectID(idSu);

    if(a != undefined && b != undefined){
        console.log(`Mark of ${a.name_} in ${b.name_} removed correctly.`)
        }else{
            console.log("Something went wrong.");
        }
}


function listMenuStudents(){
    const opciones = ["List every student.", "List by ID.", "List by Name.", "List by Surname.", "List by age.", "Go back."];
    const indice = readline.keyInSelect(opciones, "Choose an option: ");

    switch(indice){
        case 0:
            StudentManager_.getStudents().forEach((element: Student) => {
                console.log(`ID: ${element.id_}, Name: ${element.name_}, Surname: ${element.surname_}, Age: ${element.age_}`)
            });
            break;
        case 1:
            let id = Number(readline.question("Type in the ID to filter:  "));
            let a: Student | undefined = StudentManager_.getStudentID(id);
            if(a != undefined){
                console.log(`ID: ${a.id_}, Name: ${a.name_}, Surname: ${a.surname_}, Age: ${a.age_}`)
                }else{
                    console.log("There's no student with that ID.");
                }
            break;
        case 2:
            let name = readline.question("Type in the name to filter:  ");
            let b: Student[] = StudentManager_.getStudentName(name);
                b.forEach(element => {
                    console.log(`ID: ${element.id_}, Name: ${element.name_}, Surname: ${element.surname_}, Age: ${element.age_}`)
                });
            break;
        case 3:
            let surname = readline.question("Type in the surname to filter: ");
            let c: Student[] = StudentManager_.getStudentSurname(surname);
                c.forEach(element =>{
                    console.log(`ID: ${element.id_}, Name: ${element.name_}, Surname: ${element.surname_}, Age: ${element.age_}`)
                });
            break;
        case 4:
            let age = Number(readline.question("Type in the age to filter: "));
            let d: Student[] = StudentManager_.getStudentAge(age);
                d.forEach(element =>{
                    console.log(`ID: ${element.id_}, Name: ${element.name_}, Surname: ${element.surname_}, Age: ${element.age_}`)
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

function listMenuSubjects(){
    const opciones = ["List every subject.", "List by ID.", "List by Name.", "Go back."];
    const indice = readline.keyInSelect(opciones, "Choose an option: ");

    switch(indice){
        case 0:
            subjectManager_.getSubject().forEach((element: Subject) => {
                console.log(`ID: ${element.id_}, Name: ${element.name_}.`)
            });
            break;
        case 1:
            let id = Number(readline.question("Type in the ID to filter:  "));
            let a: Subject | undefined = subjectManager_.getSubjectID(id);
            if(a != undefined){
                console.log(`ID: ${a.id_}, Name: ${a.name_}.`)
                }else{
                    console.log("There's no subject with that ID.");
                }
            break;
        case 2:
            let name = readline.question("Type in the name to filter:  ");
            let b: Subject[] = subjectManager_.getSubjectName(name);
                b.forEach(element => {
                    console.log(`ID: ${element.id_}, Name: ${element.name_}.`)
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

function main(){

    if(!salir){

        const opciones = ["Create student.", "Remove student", "List Student.", "Create subject.", "Remove subject", "List subjects.", "Add mark.", "List marks.", "Remove mark.", "Exit."];
        const indice = readline.keyInSelect(opciones, "Seleccione una opción: ");

        if(indice === -1){
            console.log("Operación cancelada.");
            return;
        }

        switch(indice){
            case 0:
                StudentManager_.addStudent(new Student('Paco', 'Flores', 20))
                StudentManager_.addStudent(new Student('Paco', 'González', 78))
                StudentManager_.addStudent(new Student('Lucía', 'Flores', 30))
                break;
            case 1:
                let id = Number(readline.question("Type in the Id of the student to remove: "));
                StudentManager_.removeStudent(id);
                break;
            case 2:
                listMenuStudents();
                break;
            case 3:
                subjectManager_.addSubject(new Subject('English'))
                subjectManager_.addSubject(new Subject('Maths'))
                subjectManager_.addSubject(new Subject('History'))
                subjectManager_.addSubject(new Subject('Biology'))
                subjectManager_.addSubject(new Subject('Spanish'))
                break;
            case 4:
                let id_ = Number(readline.question("Type in the Id of the subject to remove: "));
                subjectManager_.removeSubject(id_);
                break;
            case 5:
                listMenuSubjects();
                break;
            case 6:
                addMarks();
                break;
            case 7:
                let a = marksManager_.getMarks();

                a.forEach(mark => {
                    let b: Student | undefined = StudentManager_.getStudentID(mark._idSt);
                    let c: Subject | undefined = subjectManager_.getSubjectID(mark._idSu); 
                    
                    console.log (`Name: ${b?.name_}, Subject: ${c?.name_}, Mark: ${mark._mark}`)
                });
                break;
            case 8:
                removeMark();
                break;
            case 9:
                console.log("Thanks for using my program.")
                salir = true;

        }
        main();

    }

}

main();



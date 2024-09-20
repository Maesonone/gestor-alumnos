import * as readline from 'readline-sync';
import { Subject } from './Subject.js';
import { Student } from './Student.js';
import {StudentManager} from './Managers/studentsManager.js';

const StudentManager_ = new StudentManager();

function main(){


    const opciones = ["Create student.", "List Student.", "Create subject.", "List subjects."];
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
            StudentManager_.getStudents().forEach((element: Student) => {
                console.log(`ID: ${element.id_}, Name: ${element.name_}, Surname: ${element.surname_}, Age: ${element.age_}`)
            });
            break;
    }
    main();

}

main();



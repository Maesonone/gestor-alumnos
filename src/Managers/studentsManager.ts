import {Student} from "../Student";

export class StudentManager{

    private Student_: Student[] = [];

    constructor(){

    }

    addStudent(Student: Student): void{ 
        this.Student_.push(Student)
    }

    getStudents(): Student[]{
        return this.Student_
    }

    getStudentID(id: number){
        let _Student: Student[] = []
        this.Student_.forEach(element => {
            if(id === element.id_){console.log(`ID: ${element.id_}, Name: ${element.name_}, Surname: ${element.surname_}, Age: ${element.age_}`)}
        });
    }

}
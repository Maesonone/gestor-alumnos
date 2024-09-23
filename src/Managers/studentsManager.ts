import {Student} from "../Student";

export class StudentManager{

    private Student_: Student[] = [];

    constructor(){

    }

    addStudent(Student: Student): void{ 
        this.Student_.push(Student)
    }

    removeStudent(id: number): Student[]{
        let a: Student[] = [];
        a = this.Student_.splice(id-1, 1);
        return a;
    }

    getStudents(): Student[]{
        return this.Student_
    }

    getStudentID(id: number): Student | undefined{
        let _Student: Student | undefined
        this.Student_.forEach(element => {
            if(id === element.id_){_Student = element}
        });

        return _Student;
    }

    getStudentName(name: String): Student[]{
        let _Student: Student[] = [];
        this.Student_.forEach(element => {
            if(name === element.name_){_Student.push(element)}
        });

        return _Student;
    }

    getStudentSurname(surname: String): Student[]{
        let _Student: Student[] = []
        this.Student_.forEach(element => {
            if(surname === element.surname_){_Student.push(element)}
        });

        return _Student;
    }

    getStudentAge(age: number): Student[]{
        let _Student: Student[] = []
        this.Student_.forEach(element => {
            if(age === element.age_){_Student.push(element)}
        });

        return _Student;
    }

}
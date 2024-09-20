import { Subject } from "../Subject";

export class SubjectManager{

    private Subjects_: Subject[] = [];

    constructor(){

    }

    addSubject(subject: Subject){
        this.Subjects_.push(subject)
    }

    getSubject(): Subject[]{
        return this.Subjects_
    }

    getSubjectID(id: number){
        let _Subject: Subject | undefined
        this.Subjects_.forEach(element => {
            if(id === element.id_){_Subject = element}
        });

        return _Subject;
    }

    getSubjectName(name: String): Subject[]{
        let _Subject: Subject[] = [];
        this.Subjects_.forEach(element => {
            if(name === element.name_){_Subject.push(element)}
        });

        return _Subject;
    }
}
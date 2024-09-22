import { mark } from "../mark";

export class marksManager{

    private marks: mark[] = [];

    constructor(){

    }

    addMark(mark: mark){
        this.marks.push(mark);
    }

    removeMark(id: number): mark[]{
        let a: mark[] = [];
        a = this.marks.splice(id-1, 1,);
        return a;
    }

    getMarks(): mark[]{
        return this.marks
    }

    

}
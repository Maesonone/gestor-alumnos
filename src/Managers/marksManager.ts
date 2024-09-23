import { Mark } from "../Mark";

export class marksManager{

    private marks: Mark[] = [];

    constructor(){

    }

    addMark(mark: Mark){
        this.marks.push(mark);
    }

    removeMark(idSt: number, idSu: number): Mark[]{
        let a: Mark[] = [];
        a = this.marks;
        a.forEach(mark => {
            if(mark.idSt_ === idSt && mark.idSu_ === idSu){
                a.splice(mark._id-1, 1);
            }else{
                console.log("Something went wrong.");
                a = [];
            }
        });
        return a;
    }

    getMarks(): Mark[]{
        return this.marks
    }

    

}
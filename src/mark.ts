
export class Mark{
    private mark: number;
    private idSt: number;
    private idSu: number;
    private id: number;
    private static id_: number = 1;

    constructor(mark: number, idSt: number, idSu:number){
        this.mark = mark;
        this.idSt = idSt;
        this.idSu = idSu;
        this.id = Mark.id_;
        this.id++;
    }

    get _mark(): number{
        return this.mark;
    }

    get _idSt(): number{
        return this.idSt;
    }

    get _idSu(): number{
        return this.idSu
    }

    get _id(): number{
        return this.id;
    }

    set mark_(mark: number){
        this.mark = mark
    }

    set idSt_(idSt: number){
        this.idSt = idSt;
    }

    set idSu_(idSu: number){
        this.idSu = idSu
    }
}
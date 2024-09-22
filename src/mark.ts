
export class mark{
    private mark: number;
    private idSt: number;
    private idSu: number;

    constructor(mark: number, idSt: number, idSu:number){
        this.mark = mark;
        this.idSt = idSt;
        this.idSu = idSu;
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
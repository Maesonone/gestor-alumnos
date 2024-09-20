export class Subject{
    private name: String;
    private id: number;
    private static _id: number = 1;

    constructor(name: String){
        this.name = name;
        this.id = Subject._id;
        Subject._id++
    }

    public get name_():String{
        return this.name;
    }

    public get id_():number{
        return this.id
    }

}
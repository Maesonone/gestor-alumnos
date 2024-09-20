export class Subject{
    private nombre: String;
    private id: number;

    constructor(nombre: String, id: number){
        this.nombre = nombre;
        this.id = id;
    }

    public get nombre_():String{
        return this.nombre;
    }

}
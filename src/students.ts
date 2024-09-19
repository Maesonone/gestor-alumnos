class students{
    private name: string;
    private surname: string;
    private age: number;
    private id: number;
    private static id_: number = 1;

    constructor(name:string, surname: string, age: number){
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.id = students.id_;
        students.id_++
    }

    get name_(): string{
        return this.name;
    }

    get surname_(): string{
        return this.surname;
    }

    get age_(): number{
        return this.age;
    }

    get id_(): number{
        return this.id;
    }

    set name_(name:string){
        this.name = name;
    }

    set surname_(surname:string){
        this.surname = surname;
    }

    set age_(age:number){
        this.age = age;
    }

    set id_(id:number){
        this.id = id;
    }
}
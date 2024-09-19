class asignaturas{
    private nombre: String;
    
    public getNombre(nombre_:String): String{
        nombre_ = this.nombre
        return nombre_;
    }

    constructor(nombre: String){
        this.nombre = nombre;
    }
}
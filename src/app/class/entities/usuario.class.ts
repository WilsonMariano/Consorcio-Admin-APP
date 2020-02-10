export class Usuario {
    
    private id: Number;
    private email: String;
    private password: String;
    private nombre: String;
    private apellido: String;


    // CONSTRUCTOR

    public Usuario(id?: Number, email?: String, password? : String, nombre? : String, apellido? : String) {

        this.id = id;
        this.email = email;
        this.password = password;
        this.nombre = nombre;
        this.apellido = apellido;
    }

    
    // GETTERS

    public getId() : Number {
        
        return this.id;
    }

    public getEmail() : String {
        
        return this.email;
    }

    public getPassword() : String {
        
        return this.password;
    }

    public getApellido() : String {
        
        return this.apellido;
    }
    
    public getNombre() : String {
        
        return this.nombre;
    }


    // SETTERS

    public setId( id: Number ) {
        
        this.id = id;
    }

    public setEmail( email: String ) {
        
        this.email = email;
    }

    public setPassword( password: String ) {
        
        this.password = password;
    }

    public setNombre( nombre: String ) {
        
        this.nombre = nombre;
    }

    public setApellido( apellido: String ) {
        
        this.apellido = apellido;
    }





}
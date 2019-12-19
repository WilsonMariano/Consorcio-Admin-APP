export class Adherente {
    
    private nroAdherente: Number;
    private nombre: String;
    private apellido: String;
    private nroDocumento: Number;
    private telefono: Number;
    private email: String;


    // CONSTRUCTOR

    public Adherente(nroAdherente?: Number, nombre?: String, apellido?: String, nroDocumento?: Number, telefono?: Number, email?: String) {

        this.nroAdherente = nroAdherente;
        this.nombre = nombre;
        this.apellido = apellido;
        this.nroDocumento = nroDocumento;
        this.telefono = telefono;
        this.email = email;
    }

    
    // GETTERS

    public getNroAdherente() : Number {
        
        return this.nroAdherente;
    }

    public getNombre() : String {
        
        return this.nombre;
    }

    public getApellido() : String {
        
        return this.apellido;
    }

    public getNroDocumento () : Number {
        
        return this.nroDocumento;
    }
    
    public getTelefono () : Number {
        
        return this.telefono;
    }

    public getEmail () : String {
        
        return this.email;
    }


    // SETTERS

    public setNroAdherente( id: Number ) {
        
        this.nroAdherente = id;
    }

    public setNombre( nombre: String ) {
        
        this.nombre = nombre;
    }

    public setApellido( apellido: String ) {
        
        this.apellido = apellido;
    }

    public setNroDocumento ( nroDocumento: Number ) {
        
        this.nroDocumento = nroDocumento;
    }
    
    public setTelefono ( telefono: Number ) {
        
        this.telefono = telefono;
    }

    public setEmail ( email: string ) {
        
        this.email = email;
    }


}
export class Usuario {
    
    private id: Number;
    private email: String;
    private password: String;


    // CONSTRUCTOR

    public Usuario(id?: Number, email?: String, password? : String) {

        this.id = id;
        this.email = email;
        this.password = password;
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





}
export class Diccionario {
    
    private id: Number;
    private codigo: String;
    private valor: String;


    // CONSTRUCTOR

    public Diccionario(id?: Number, codigo?: String, valor? : String) {

        this.id = id;
        this.codigo = codigo;
        this.valor = valor;
    }

    
    // GETTERS

    public getId() : Number {
        
        return this.id;
    }

    public getCodigo() : String {
        
        return this.codigo;
    }

    public getValor() : String {
        
        return this.valor;
    }


    // SETTERS

    public setId( id: Number ) {
        
        this.id = id;
    }

    public setCodigo( codigo: String ) {
        
        this.codigo = codigo;
    }

    public setValor( valor: String ) {
        
        this.valor = valor;
    }





}
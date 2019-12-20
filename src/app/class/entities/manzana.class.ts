export class Manzana {
    
    private id: Number;
    private nroManzana: Number;
    private mtsCuadrados: Number;
    private tipoVivienda: String;
    private nombreConsorcio: String;




    // CONSTRUCTOR

    public Manzana(id?: Number, nroManzana?: Number, mtsCuadrados?: Number, tipoVivienda?: String, nombreConsorcio?: String) {

        this.id = id;
        this.nroManzana = nroManzana;
        this.mtsCuadrados = mtsCuadrados;
        this.tipoVivienda = tipoVivienda;
        this.nombreConsorcio = nombreConsorcio;
    }

    
    // GETTERS

    public getId() : Number {
        
        return this.id;
    }

    public getNroManzana() : Number {
        
        return this.nroManzana;
    }

    public getMtsCuadrados() : Number {
        
        return this.mtsCuadrados;
    }

    public getTipoVivienda() : String {
        
        return this.tipoVivienda;
    }

    public getNombreConsorcio () : String {
        
        return this.nombreConsorcio;
    }
    
 

    // SETTERS

    public setId( id: Number ) {
        
        this.id = id;
    }

    public setNroManzana( nroManzana: Number ) {
        
        this.nroManzana = nroManzana;
    }

    public setMtsCuadrados( mtsCuadrados: Number ) {
        
        this.mtsCuadrados = mtsCuadrados;
    }

    public setTipoVivienda( tipoVivienda: String ) {
        
        this.tipoVivienda = tipoVivienda;
    }

    public setNombreConsorcio ( nombreConsorcio: String ) {
        
        this.nombreConsorcio = nombreConsorcio;
    }
    
 


}
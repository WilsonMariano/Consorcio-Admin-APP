export class Manzana {
    
    private id: Number;
    private mtsCuadrados: Number;
    private tipoVivienda: String;
    private nombreConsorcio: String;




    // CONSTRUCTOR

    public Manzana(id?: Number, mtsCuadrados?: Number, tipoVivienda?: String, nombreConsorcio?: String) {

        this.id = id;
        this.mtsCuadrados = mtsCuadrados;
        this.tipoVivienda = tipoVivienda;
        this.nombreConsorcio = nombreConsorcio;
    }

    
    // GETTERS

    public getId() : Number {
        
        return this.id;
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
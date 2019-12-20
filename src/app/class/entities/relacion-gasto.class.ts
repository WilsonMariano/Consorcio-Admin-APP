export class RelacionGasto {
    
    private id: Number;
    private idGastosLiquidaciones: Number;
    private entidad: String;    
    private numero: Number;
    private idManzana: Number;
    
    // CONSTRUCTOR

    public RelacionGasto(id?: Number, idGastosLiquidaciones?: Number, entidad?: String, numero?: Number, idManzana?: Number) {

        this.id = id;
        this.idGastosLiquidaciones = idGastosLiquidaciones;
        this.entidad = entidad;
        this.numero = numero;
        this.idManzana = idManzana;

    }

    
    // GETTERS

    public getId() : Number {
        
        return this.id;
    }

    public getIdGastosLiquidaciones () : Number {
        
        return this.idGastosLiquidaciones;
    }

    public getEntidad () : String {
        
        return this.entidad;
    }

    public getNumero() : Number {
        
        return this.numero;
    }

    public getIdManzana() : Number {
        
        return this.idManzana;
    }

    // SETTERS

    public setId( id: Number ) {
        
        this.id = id;
    }

    public setidGastosLiquidaciones ( idGastosLiquidaciones: Number ) {
        
        this.idGastosLiquidaciones = idGastosLiquidaciones;
    }

    public setEntidad ( entidad: String ) {
        
        this.entidad = entidad;
    }

   
    public setNumero( numero: Number ) {
        
        this.numero = numero;
    }

    public setIdManzana( idManzana: Number ) {
        
        this.idManzana = idManzana;
    }

    

    
}
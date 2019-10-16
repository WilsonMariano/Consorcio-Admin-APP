export class RelacionGasto {
    
    private id: Number;
    private idGastosLiquidaciones: Number;
    private entidad: String;    
    private numero: Number;
    
    // CONSTRUCTOR

    public RelacionGasto(id?: Number, idGastosLiquidaciones?: Number, entidad?: String, numero?: Number) {

        this.id = id;
        this.idGastosLiquidaciones = idGastosLiquidaciones;
        this.entidad = entidad;
        this.numero = numero;

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


    // SETTERS

    public setId( id: Number ) {
        
        this.id = id;
    }

    public setidGastosLiquidaciones ( idGastosLiquidaciones: Number ) {
        
        this.idGastosLiquidaciones = idGastosLiquidaciones;
    }

    set setEntidad ( entidad: String ) {
        
        this.entidad = entidad;
    }

   
    public setNumero( numero: Number ) {
        
        this.numero = numero;
    }

    

    
}
export class GastoLiquidacionUF {
    
    private id: Number;
    private idLiquidacionUF: Number;
    private idGastosLiquidaciones: Number;
    private monto: Number;
    
    

    // CONSTRUCTOR

    public GastoLiquidacionUF(id?: Number, idLiquidacionUF?: Number, idGastosLiquidaciones?: Number, monto?: Number) {

        this.id = id;
        this.idLiquidacionUF = idLiquidacionUF;
        this.idGastosLiquidaciones = idGastosLiquidaciones;
        this.monto = monto;
            
    }

    
    // GETTERS

    public getId() : Number {
        
        return this.id;
    }

    public getIdLiquidacionUF () : Number {
        
        return this.idLiquidacionUF;
    }

    public getIdGastosLiquidaciones () : Number {
        
        return this.idGastosLiquidaciones;
    }

    public getMonto() : Number {
        
        return this.monto;
    }

    

    // SETTERS

    public setId( id: Number ) {
        
        this.id = id;
    }

    public setIdLiquidacionUF ( idLiquidacionUF: Number ) {
        
        this.idLiquidacionUF = idLiquidacionUF;
    }

    public setIdGastosLiquidaciones ( idGastosLiquidaciones: Number ) {
        
        this.idGastosLiquidaciones = idGastosLiquidaciones;
    }

    public setMonto( monto: Number ) {
        
        this.monto = monto;
    }

    
}
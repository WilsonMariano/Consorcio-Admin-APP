export class LiquidacionUF {
    
    private id : Number ;
    private idLiquidacionGlobal: Number;
    private idCtaCte: Number;
    private coeficiente: Number;
    private interes: Number;
    private monto: Number;
    private fechaRecalculo: Date;
    private saldo: Number;


    // CONSTRUCTOR

    public LiquidacionUF(id?: Number,idLiquidacionGlobal?: Number, idCtaCte?: Number, coeficiente?: Number, interes?: Number, monto?: Number, fechaRecalculo?: Date, saldo?: Number) {

        this.id = id;
        this.idLiquidacionGlobal = idLiquidacionGlobal;
        this.idCtaCte = idCtaCte;
        this.coeficiente = coeficiente;
        this.interes = interes;
        this.monto = monto;
        this.fechaRecalculo = fechaRecalculo;
        this.saldo = saldo;
    }

    
    // GETTERS
    public getId() : Number {
        
        return this.id;
    }

    public getIdLiquidacionGlobal() : Number {
        
        return this.idLiquidacionGlobal;
    }

    public getIdCtaCte() : Number {
        
        return this.idCtaCte;
    }

    public getCoeficiente() : Number {
        
        return this.coeficiente;
    }

    public getInteres () : Number {
        
        return this.interes;
    }
    
    public getMonto () : Number {
        
        return this.monto;
    }

    public getFechaRecalculo () : Date {
        
        return this.fechaRecalculo;
    }

    public getSaldo () : Number {
        
        return this.saldo;
    }

    // SETTERS

    public setId( id: Number ) {
        
        this.id = id;
    }

    public setIdLiquidacionGlobal( idLiquidacionGlobal: Number ) {
        
        this.idLiquidacionGlobal = idLiquidacionGlobal;
    }

    public setIdCtaCte( idCtaCte: Number ) {
        
        this.idCtaCte = idCtaCte;
    }

    public setCoeficiente( coeficiente: Number ) {
        
        this.coeficiente = coeficiente;
    }

    public setInteres ( interes: Number ) {
        
        this.interes = interes;
    }
    
    public setMonto ( monto: Number ) {
        
        this.monto = monto;
    }

    public setFechaRecalculo ( fechaRecalculo: Date ) {
        
        this.fechaRecalculo = fechaRecalculo;
    }

    public setSaldo ( saldo: Number ) {
        
        this.saldo = saldo;
    }

}
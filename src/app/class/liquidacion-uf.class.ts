export class LiquidacionUF {
    
    private idLiquidacionGlobal: Number;
    private idCtaCte: Number;
    private coeficiente: String;
    private interes: String;
    private monto: String;
    private fechaRecalculo: String;
    private saldo: String;


    // CONSTRUCTOR

    public Adherente(idLiquidacionGlobal?: Number, idCtaCte?: Number, coeficiente?: String, interes?: String, monto?: String, fechaRecalculo?: String, saldo?: String) {

        this.idLiquidacionGlobal = idLiquidacionGlobal;
        this.idCtaCte = idCtaCte;
        this.coeficiente = coeficiente;
        this.interes = interes;
        this.monto = monto;
        this.fechaRecalculo = fechaRecalculo;
        this.saldo = saldo;
    }

    
    // GETTERS

    public getIdLiquidacionGlobal() : Number {
        
        return this.idLiquidacionGlobal;
    }

    public getIdCtaCte() : Number {
        
        return this.idCtaCte;
    }

    public getCoeficiente() : String {
        
        return this.coeficiente;
    }

    public getInteres () : String {
        
        return this.interes;
    }
    
    public getMonto () : String {
        
        return this.monto;
    }

    public getFechaRecalculo () : String {
        
        return this.fechaRecalculo;
    }

    public getSaldo () : String {
        
        return this.saldo;
    }

    // SETTERS

    public setIdLiquidacionGlobal( idLiquidacionGlobal: Number ) {
        
        this.idLiquidacionGlobal = idLiquidacionGlobal;
    }

    public setIdCtaCte( idCtaCte: Number ) {
        
        this.idCtaCte = idCtaCte;
    }

    public setCoeficiente( coeficiente: String ) {
        
        this.coeficiente = coeficiente;
    }

    public setInteres ( interes: String ) {
        
        this.interes = interes;
    }
    
    public setMonto ( monto: String ) {
        
        this.monto = monto;
    }

    public setFechaRecalculo ( fechaRecalculo: String ) {
        
        this.fechaRecalculo = fechaRecalculo;
    }

    public setSaldo ( saldo: String ) {
        
        this.saldo = saldo;
    }

}
export class GastoLiquidacion {
    
    private id: Number;
    private idLiquidacionGlobal: Number;
    private idConcepto: Number;
    private monto: Number;
    private codConceptoGasto: String;
    

    // CONSTRUCTOR

    public GastoLiquidacion(id?: Number, idLiquidacionGlobal?: Number, idConcepto?: Number, monto?: Number, codConceptoGasto?: String) {

        this.id = id;
        this.idLiquidacionGlobal = idLiquidacionGlobal;
        this.idConcepto = idConcepto;
        this.monto = monto;
        this.codConceptoGasto = codConceptoGasto;
        
    }

    
    // GETTERS

    public getId() : Number {
        
        return this.id;
    }

    public getIdLiquidacionGlobal () : Number {
        
        return this.idLiquidacionGlobal;
    }

    public getIdConcepto () : Number {
        
        return this.idConcepto;
    }

    public getMonto() : Number {
        
        return this.monto;
    }

    public getCodConceptoGasto() : String {
        
        return this.codConceptoGasto;
    }

    // SETTERS

    public setd( id: Number ) {
        
        this.id = id;
    }

    public setIdLiquidacionGlobal ( idLiquidacionGlobal: Number ) {
        
        this.idLiquidacionGlobal = idLiquidacionGlobal;
    }

    public setIdConcepto ( idConcepto: Number ) {
        
        this.idConcepto = idConcepto;
    }

    public setMonto( monto: Number ) {
        
        this.monto = monto;
    }

    public setCodConceptoGasto( codConceptoGasto: String ) {
        
        this.codConceptoGasto = codConceptoGasto;
    }

    
}
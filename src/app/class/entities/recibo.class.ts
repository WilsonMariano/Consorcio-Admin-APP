export class Recibo {
    
    private id: Number;
    private idCtaCte: Number;
    private nroRecibo: String;
    private codMedioPago: String;
    private monto: Number;
    

    // CONSTRUCTOR

    public Recibo(id?: Number, idCtaCte?: Number, nroRecibo?: String, codMedioPago?: String  ,monto?: Number) {

        this.id = id;
        this.idCtaCte = idCtaCte;
        this.nroRecibo = nroRecibo;
        this.codMedioPago = codMedioPago;
        this.monto = monto;

    }

    
    // GETTERS

    public getId() : Number {
        
        return this.id;
    }

    public getIdCtaCte () : Number {
        
        return this.idCtaCte;
    }

    public getNroRecibo () : String {
        
        return this.nroRecibo;
    }

    public getCodMedioPago() : String {
        
        return this.codMedioPago;
    }

    public getMonto() : Number {
        
        return this.monto;
    }


    // SETTERS

    public setId( id: Number ) {
        
        this.id = id;
    }

    public setIdCtaCte ( idCtaCte: Number ) {
        
        this.idCtaCte = idCtaCte;
    }

    public setNroRecibo ( nroRecibo: String ) {
        
        this.nroRecibo = nroRecibo;
    }

    public setCodMedioPago( codMedioPago: String ) {
        
        this.codMedioPago = codMedioPago;
    }
    
    public setMonto( monto: Number ) {
        
        this.monto = monto;
    }

    

    
}
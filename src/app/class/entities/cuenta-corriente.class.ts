export class CuentaCorriente {
    
    private id: Number;
    private idUF: Number;
    private fecha: Date;
    private descripcion: String;
    private monto: Number;
    private saldo: Number;


    // CONSTRUCTOR

    public CuentaCorriente(id?: Number, idUF?: Number, fecha?: Date, descripcion?: String, monto?: Number, saldo?: Number) {

        this.id = id;
        this.idUF = idUF;
        this.fecha = fecha;
        this.descripcion = descripcion;
        this.monto = monto;
        this.saldo = saldo;
    }

    
    // GETTERS

    public getId() : Number {
        
        return this.id;
    }
    
    public getIdUF () : Number {
        
        return this.idUF;
    }
    
    public getFecha() : Date {
        
        return this.fecha;
    }

    public getDescripcion() : String {
        
        return this.descripcion;
    }

    public getMonto () : Number {
        
        return this.monto;
    }

    public getSaldo () : Number {
        
        return this.saldo;
    }


    // SETTERS

    public setId( id: Number ) {
        
        this.id = id;
    }
    
    public setIdUF ( idUF: Number ) {
        
        this.idUF = idUF;
    }

    public setFecha( fecha: Date ) {
        
        this.fecha = fecha;
    }

    public setDescripcion( descripcion: String ) {
        
        this.descripcion = descripcion;
    }

    public setMonto ( monto: Number ) {
        
        this.monto = monto;
    }

    public setSaldo ( saldo: Number ) {
        
        this.saldo = saldo;
    }


}
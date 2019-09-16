export class UnidadFuncional {
    
	private id : Number ;
	private idManzana : Number ;
	private idAdherente : Number;
	private nroEdificio : Number;
	private departamento : String;
	private codSitLegal : String;
	private coeficiente : Number;
	private codAlquila : String;

    // CONSTRUCTOR

    public UnidadFuncional(id?: Number, idManzana?: Number, idAdherente?: Number, nroEdificio?: Number, departamento?: String, codSitLegal?: String, coeficiente?: Number,codAlquila? : String) {

        this.id = id;
        this.idManzana = idManzana;
        this.idAdherente = idAdherente;
        this.nroEdificio = nroEdificio;
        this.departamento = departamento;
        this.codSitLegal = codSitLegal;
        this.coeficiente = coeficiente;
        this.codAlquila = codAlquila;
    }

    
    // GETTERS
    public getId() : Number {
        
        return this.id;
    }

    public getIdManzana() : Number {
        
        return this.idManzana;
    }

    public getIdAdherente() : Number {
        
        return this.idAdherente;
    }

    public getNroEdificio() : Number {
        
        return this.nroEdificio;
    }

    public getDepartamento () : String {
        
        return this.departamento;
    }
    
    public getCodSitLegal () : String {
        
        return this.codSitLegal;
    }

    public getCoeficiente () : Number {
        
        return this.coeficiente;
    }

    public getCodAlquila () : String {
        
        return this.codAlquila;
    }


    // SETTERS
    public setId( id: Number ) {
        
        this.id = id;
    }

    public setIdManzana( idManzana: Number ) {
        
        this.idManzana = idManzana;
    }

    public setIdAdherente( idAdherente: Number ) {
        
        this.idAdherente = idAdherente;
    }

    public setNroEdificio( nroEdificio: Number ) {
        
        this.nroEdificio = nroEdificio;
    }

    public setDepartamento ( departamento: String ) {
        
        this.departamento = departamento;
    }
    
    public setCodSitLegal ( codSitLegal: String ) {
        
        this.codSitLegal = codSitLegal;
    }

    public setCoeficiente ( coeficiente: Number ) {
        
        this.coeficiente = coeficiente;
    }

    public setCodAlquila ( codAlquila: String ) {
        
        this.codAlquila = codAlquila;
    }


}
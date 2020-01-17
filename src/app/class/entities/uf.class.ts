export class UnidadFuncional {
    
    private id : Number ;
    private nroUF: Number;
	private idManzana : Number ;
	private idAdherente : Number;
	private nroEdificio : Number;
	private codDepartamento : String;
	private codSitLegal : String;
	private coeficiente : Number;
	private codAlquila : String;

    // CONSTRUCTOR

    public UnidadFuncional(id?: Number, nroUF?: Number, idManzana?: Number, idAdherente?: Number, nroEdificio?: Number, codDepartamento?: String, codSitLegal?: String, coeficiente?: Number,codAlquila? : String) {

        this.id = id;
        this.nroUF = nroUF;
        this.idManzana = idManzana;
        this.idAdherente = idAdherente;
        this.nroEdificio = nroEdificio;
        this.codDepartamento = codDepartamento;
        this.codSitLegal = codSitLegal;
        this.coeficiente = coeficiente;
        this.codAlquila = codAlquila;
    }

    
    // GETTERS
    public getId() : Number {
        
        return this.id;
    }

    public getNroUF() : Number {
        
        return this.nroUF;
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

    public getCodDepartamento () : String {
        
        return this.codDepartamento;
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

    public setNroUF( nroUF: Number ) {
        
        this.nroUF = nroUF;
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

    public setCodDepartamento ( codDepartamento: String ) {
        
        this.codDepartamento = codDepartamento;
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
export class ConceptoGastos {
    
    private id: Number;
    private codigo: String;
    private conceptoGasto: String;

    

    // CONSTRUCTOR

    public ConceptoGastos(id?: Number, codigo?: String, conceptoGasto?: String) {

        this.id = id;
        this.codigo = codigo;
        this.conceptoGasto = conceptoGasto;
    }

    
    // GETTERS

    public getId() : Number {
        
        return this.id;
    }

    public getCodigo () : String {
        
        return this.codigo;
    }

    public getConceptoGastos () : String {
        
        return this.conceptoGasto;
    }



    // SETTERS

    public setId( id: Number ) {
        
        this.id = id;
    }

    public setCodigo ( codigo: String ) {
        
        this.codigo = codigo;
    }

    public setConceptoGastos ( conceptoGasto: String ) {
        
        this.conceptoGasto = conceptoGasto;
    }
    
}
export class ConceptoGasto {
    
    private id: Number;
    private codigo: String;
    private conceptoGasto: String;

    

    // CONSTRUCTOR

    public ConceptoGasto(id?: Number, codigo?: String, conceptoGasto?: String) {

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

    public getConceptoGasto () : String {
        
        return this.conceptoGasto;
    }



    // SETTERS

    public setId( id: Number ) {
        
        this.id = id;
    }

    public setCodigo ( codigo: String ) {
        
        this.codigo = codigo;
    }

    public setConceptoGasto ( conceptoGasto: String ) {
        
        this.conceptoGasto = conceptoGasto;
    }
    
}
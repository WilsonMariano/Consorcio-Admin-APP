import { RelacionGasto } from './relacion-gasto.class';

export class GastoLiquidacion {
    
    private id: Number;
    private idLiquidacionGlobal: Number;
    private codConceptoGasto: String;
    private monto: Number;
    private detalle: String;
    private relacionesGastos: Array<RelacionGasto>;
    

    // CONSTRUCTOR

    public GastoLiquidacion(
        id?: Number, 
        idLiquidacionGlobal?: Number, 
        monto?: Number, 
        codConceptoGasto?: String, 
        detalle?: String,
        relacionesGastos?: Array<RelacionGasto>) {

        this.id = id;
        this.idLiquidacionGlobal = idLiquidacionGlobal;
        this.monto = monto;
        this.codConceptoGasto = codConceptoGasto;
        this.detalle = detalle;
        this.relacionesGastos = relacionesGastos;
    }


    /******************************************************************************************************************/
    /***************************************************** GETTERS ****************************************************/
    /******************************************************************************************************************/

    get getId() : Number { return this.id }

    get getIdLiquidacionGlobal () : Number { return this.idLiquidacionGlobal }

    get getMonto() : Number { return this.monto }

    get getCodConceptoGasto() : String { return this.codConceptoGasto }

    get getDetalle() : String { return this.detalle }

    get getRelacionesGastos() : Array<RelacionGasto> { return this.relacionesGastos }

    

    /******************************************************************************************************************/
    /***************************************************** SETTERS ****************************************************/
    /******************************************************************************************************************/

    public set setId( id: Number ) { this.id = id }

    public set setIdLiquidacionGlobal ( idLiquidacionGlobal: Number ) { this.idLiquidacionGlobal = idLiquidacionGlobal }
    
    public set setMonto( monto: any ) { this.monto = monto }

    public set setCodConceptoGasto( codConceptoGasto: any ) { this.codConceptoGasto = codConceptoGasto }

    public set setDetalle( detalle: any ) { this.detalle = detalle }

    public set setRelacionesGastos ( relacionesGastos: Array<RelacionGasto> ) { this.relacionesGastos = relacionesGastos }

}
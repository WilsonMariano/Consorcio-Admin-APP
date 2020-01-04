export class Nota {

    private id: Number;
    private tipoDocumento: EnumTipoDocumento;
    private monto: Number;
    private codEntidad: String;
    private numero: Number;
    private idManzana: Number;
    private descripcion: String;
    private vencimiento: Date;

    public Nota() {}

    public getId(): Number { return this.id }
    public getTipoDocumento(): EnumTipoDocumento { return this.tipoDocumento }
    public getMonto(): Number { return this.monto }
    public getCodEntidad(): String { return this.codEntidad }
    public getNumero(): Number { return this.numero }
    public getIdManzana(): Number { return this.idManzana }
    public getDescripcion(): String { return this.descripcion }
    public getVencimiento(): Date { return this.vencimiento }

    public setId(id: Number): void { this.id = id }
    public setTipoDocumento(tipoDocumento: EnumTipoDocumento): void { this.tipoDocumento = tipoDocumento }
    public setMonto(monto: Number): void { this.monto = monto }
    public setCodEntidad(codEntidad: String): void { this.codEntidad = codEntidad }
    public setNumero(numero: Number): void { this.numero = numero }
    public setIdManzana(idManzana: Number): void { this.idManzana = idManzana }
    public setDescripcion(descripcion: String): void { this.descripcion = descripcion }
    public setVencimiento(vencimiento: Date): void { this.vencimiento = vencimiento }






}

export enum EnumTipoDocumento {

    'ND' = 'ND',
    'NC' = 'NC'
}
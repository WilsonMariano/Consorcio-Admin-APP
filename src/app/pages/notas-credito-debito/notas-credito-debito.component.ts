import { Component, OnInit } from '@angular/core';
import { Diccionario } from '../../class/entities/diccionario.class';
import { DiccionarioService, CommonService, FxGlobalsService } from 'src/app/services/service.index';
import { Manzana } from 'src/app/class/class.index';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Nota } from 'src/app/class/class.index';
import { EnumTipoDocumento } from '../../class/entities/nota.class';

@Component({
  selector: 'app-notas-credito-debito',
  templateUrl: './notas-credito-debito.component.html'
})
export class NotasCreditoDebitoComponent implements OnInit {

  public arrEntidades  : any[];
  public arrManzanas   : any[];
  public forma: FormGroup;

  

  constructor(private _diccionario: DiccionarioService, private _common: CommonService, private _fxGlobals: FxGlobalsService) { }

  ngOnInit() {

    this.getDiccionario();

    this.forma = new FormGroup({
      'tipoDocumento': new FormControl( '', Validators.required ),
      'monto': new FormControl( '', Validators.required ),
      'entidad': new FormControl( '', Validators.required ),
      'numero': new FormControl( '', Validators.required ),
      'idManzana': new FormControl( '', Validators.required ),
      'descripcion': new FormControl( '', Validators.required ),
      'vencimiento': new FormControl( '', Validators.required )
    });
  }

  // Traigo los datos del diccionario para llenar los arreglos de los select
  private getDiccionario(): void {
 
    this._diccionario.getAll('TIPO_ENTIDAD').subscribe(
      data =>  this.arrEntidades = data);

    this._common.getAll('manzanas').subscribe(
      data => this.arrManzanas = data);
  }

  public onSubmit(): void {

    this._fxGlobals.showQuestionAlert("Confirmación", "Está seguro de confirmar la operación?", "warning").then(
      () => {

        const nota = new Nota();
        nota.setTipoDocumento(this.forma.get('tipoDocumento').value);
        nota.setMonto(this.forma.get('monto').value);
        nota.setCodEntidad(this.forma.get('entidad').value);
        nota.setIdManzana(this.forma.get('idManzana').value);
        nota.setDescripcion(this.forma.get('descripcion').value);
      

        if(nota.getDescripcion() === EnumTipoDocumento.ND.toString())
          nota.setVencimiento(this.forma.get('vencimiento').value);

        if(nota.getCodEntidad() !== "TIPO_ENTIDAD_1")
          nota.setNumero(this.forma.get('numero').value);

        
        console.log(nota);
      }
    );

    console.log(this.forma.get('tipoDocumento').value);
  }

  // Si el campo tipoDocumento es NC deshabilito el vencimiento, sino lo habilito
  public onChangeDocumento(): void {

    let documento = this.forma.get('tipoDocumento').value;

    documento === 'NC' ? this.forma.get('vencimiento').disable() : this.forma.get('vencimiento').enable();
  }

  // Si el campo tipoDocumento es NC deshabilito el vencimiento, sino lo habilito
  public onChangeEntidad(): void {

    let entidad = this.forma.get('entidad').value;

    console.log(entidad);

    entidad === 'TIPO_ENTIDAD_1' ? this.forma.get('numero').disable() : this.forma.get('numero').enable();

  }



}

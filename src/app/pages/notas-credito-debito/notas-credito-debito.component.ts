import { Component, OnInit } from '@angular/core';
import { Diccionario } from '../../class/entities/diccionario.class';
import { DiccionarioService, CommonService } from 'src/app/services/service.index';
import { Manzana } from 'src/app/class/class.index';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-notas-credito-debito',
  templateUrl: './notas-credito-debito.component.html'
})
export class NotasCreditoDebitoComponent implements OnInit {

  public arrEntidades  : Diccionario[];
  public arrManzanas   : Manzana[];
  public forma: FormGroup;

  

  constructor(private _diccionario: DiccionarioService, private _common: CommonService) { }

  ngOnInit() {

    this.getDiccionario();

    this.forma = new FormGroup({
      'tipoDocumento': new FormControl( '', Validators.required ),
      'monto': new FormControl( '', Validators.required ),
      'entidad': new FormControl( '' ),
      'numero': new FormControl( '', Validators.required ),
      'nroManzana': new FormControl( '', Validators.required ),
      'descripcion': new FormControl( '', Validators.required )
    });
  }

  // Traigo los datos del diccionario para llenar los arreglos de los select
  private getDiccionario(): void {
 
    this._diccionario.getAll('TIPO_ENTIDAD').subscribe(
      data => {console.log(data); this.arrEntidades = data});

    this._common.getAll('manzanas').subscribe(
      data => this.arrManzanas = data);
  }

  public onSubmit(): void {

    console.log(this.forma.get('tipoDocumento').value);
  }



}

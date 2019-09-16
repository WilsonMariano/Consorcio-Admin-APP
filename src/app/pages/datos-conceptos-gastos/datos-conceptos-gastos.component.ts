import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router  } from '@angular/router';

import { ValidatorsService, FxGlobalsService, CommonService } from '../../services/service.index';

@Component({
  selector: 'app-datos-conceptos-gastos',
  templateUrl: './datos-conceptos-gastos.component.html',
  styleUrls: ['./datos-conceptos-gastos.component.css']
})
export class DatosConceptosGastosComponent implements OnInit {

  // true si es para dar de alta una nueva UF
  // false si es para editar una UF
  public neWoperation: Boolean = true;
  public forma: FormGroup;

  constructor(
    private activateRoute: ActivatedRoute, 
    private _validators: ValidatorsService, 
    private _common: CommonService, 
    private _fxGlobals: FxGlobalsService,
    private router: Router
  ) { }

  ngOnInit() {

    this.forma = new FormGroup({
      'codigo': new FormControl( '', Validators.required ),
      'concepto': new FormControl( '', Validators.required )
    });


    // Recibo los parámetros de la ruta
    // Si el parametro que recibo es un id llamo al metodo para buscar la UF
    // Si el parametro que recibo es nuevo, muestro el formulario vacio
    this.activateRoute.params.subscribe(
      data => {
        if(data['id'] !== 'nuevo') {
          
          // this.getConcepto( data['id'] );
          this.neWoperation = false;
          
          // Deshabilito el campo id
          this.forma.get( 'id' ).disable();
        }
      });
  }


  public onSubmit() { 

    console.log(this.forma);
  }

}

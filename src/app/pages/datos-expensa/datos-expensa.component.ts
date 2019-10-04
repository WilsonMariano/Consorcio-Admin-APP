import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router  } from '@angular/router';

import { LiquidacionGlobal } from 'src/app/class/class.index';

import { ValidatorsService, FxGlobalsService, CommonService } from '../../services/service.index';

import * as moment from 'moment';



@Component({
  selector: 'app-datos-expensa',
  templateUrl: './datos-expensa.component.html'
})
export class DatosExpensaComponent implements OnInit {



  /************************************************************************************************
  @newOperation: indica si la operación es alta o edición (true-false)
  @forma: reactive form con los campos de la vista
  ***********************************************************************************************/
  public neWoperation: Boolean = true;
  public forma: FormGroup;
  public arrMeses = [];
  public arrAnios = [];
 



  constructor(
    private activateRoute: ActivatedRoute, 
    private _validators: ValidatorsService, 
    private _common: CommonService, 
    private _fxGlobals: FxGlobalsService,
    private router: Router) { }



    ngOnInit() {


      this.forma = new FormGroup({
        'mes': new FormControl( '', Validators.required ),
        'anio': new FormControl( '', Validators.required ),
        'primerVencimiento': new FormControl( '', Validators.required ),
        'segundoVencimiento': new FormControl( '', Validators.required ),
        'estado': new FormControl( {value: 'Abierta', disabled: true}, Validators.required )
      });



    // Recibo los parámetros de la ruta
    // Si el parametro que recibo es un id llamo al metodo para buscar el adherente
    // Si el parametro que recibo es nuevo, muestro el formulario vacio
    this.activateRoute.params.subscribe(
      data => {
        if(data['id'] !== 'nuevo') {
          
          // this.getLiquidacionGlobal( data['id'] );
          this.neWoperation = false;
          
          // Deshabilito el campo id
          this.forma.get( 'id' ).disable();
        }
      });



      // Genero arreglo de meses
      moment.locale( 'es' );
      this.arrMeses = moment.months();


      // Genero arreglo de años
      this.arrAnios.push( moment().year() );
      this.arrAnios.push( moment().year() + 1 );


      //Seteo el mes y año actual en el select
      let currentMonth = moment().month() + 1;
      let currentYear = moment().year();

      this.forma.get( 'mes' ).setValue(currentMonth);
      this.forma.get( 'anio' ).setValue(currentYear);


      //Seteo vencimientos default
      let daysInMonth = moment().daysInMonth();

      this.forma.get( 'primerVencimiento' ).setValue( `${currentYear}-${currentMonth}-${daysInMonth - 5}` );
      this.forma.get( 'segundoVencimiento' ).setValue( `${currentYear}-${currentMonth}-${daysInMonth}` );
      
  }



  public onSubmit() {

    console.log( this.forma );

    let liquidacionGlobal = new LiquidacionGlobal();
    liquidacionGlobal.setMes( this.forma.get( 'mes' ).value );
    liquidacionGlobal.setAnio( this.forma.get( 'anio' ).value );
    liquidacionGlobal.setPrimerVencimiento( this.forma.get( 'primerVencimiento' ).value );
    liquidacionGlobal.setSegundoVencimiento( this.forma.get( 'segundoVencimiento' ).value );
  

    if( this.neWoperation ) {

      // Inserto el adherente
      this._common.insertEntity( liquidacionGlobal, 'liquidacionesGlobales' ).subscribe(
        data => {

          this._fxGlobals.showAlert( 'Operación Exitosa!', 'La expensa se ha insertado con éxito', 'success' );
          this.router.navigate( ['grilla-expensas'] );
        }
      );
    }
    else {

      // Actualizo el adherente
      this._common.UpdateOne( 'liquidacionesGlobales', liquidacionGlobal ).subscribe(
        data => {

          this._fxGlobals.showAlert( 'Operación Exitosa!', 'La expensa se ha actualizado con éxito', 'success' );
          this.router.navigate( ['grilla-expensas'] );
        }
      );
    }
  }
  
  

}

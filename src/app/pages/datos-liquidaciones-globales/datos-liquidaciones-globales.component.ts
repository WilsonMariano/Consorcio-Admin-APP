import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router  } from '@angular/router';

import { LiquidacionGlobal } from 'src/app/class/class.index';

import { ValidatorsService, FxGlobalsService } from '../../services/service.index';

import * as moment from 'moment';
import { CommonService } from 'src/app/services/service.index';



@Component({
  selector: 'app-liquidaciones-globales',
  templateUrl: './datos-liquidaciones-globales.component.html'
})
export class DatosLiquidacionesGlobalesComponent implements OnInit {



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
        'id': new FormControl( '' ),
        'mes': new FormControl( '', Validators.required ),
        'anio': new FormControl( '', Validators.required ),
        'primerVencimiento': new FormControl( '', [ Validators.required, this._validators.dateValidator ] ),
        'segundoVencimiento': new FormControl( '', [ Validators.required, this._validators.dateValidator ] ),
        'estado': new FormControl( { value: 'ABIERTA', disabled: true }, Validators.required )
      });



      // Genero arreglo de meses
      moment.locale( 'es' );
      this.arrMeses = moment.months();


      // Genero arreglo de años
      this.arrAnios.push( moment().year() );
      this.arrAnios.push( moment().year() + 1 );



    // Recibo los parámetros de la ruta
    // Si el parametro que recibo es un id llamo al metodo para buscar la expensa
    // Si el parametro que recibo es nuevo, muestro el formulario vacio
    this.activateRoute.params.subscribe(
      data => {

        if(data['id'] !== 'nuevo') {

          this.getLiquidacionG( data['id'] );
          this.neWoperation = false;
        }
          
        else {

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
      }); 
      
  }



  public onSubmit() {

    let liquidacionGlobal = new LiquidacionGlobal();
    liquidacionGlobal.setMes( this.forma.get( 'mes' ).value );
    liquidacionGlobal.setAnio( this.forma.get( 'anio' ).value );
    liquidacionGlobal.setPrimerVencimiento( this.forma.get( 'primerVencimiento' ).value );
    liquidacionGlobal.setSegundoVencimiento( this.forma.get( 'segundoVencimiento' ).value );
  

    if( this.neWoperation ) {

      // Inserto la liquidación
      this._common.insertEntity( liquidacionGlobal, 'liquidacion-gbl' ).subscribe(
        data => {

          this._fxGlobals.showAlert( 'Operación Exitosa!', 'La expensa se ha insertado con éxito', 'success' );
          this.router.navigate( ['grilla-expensas'] );
        }
      );
    }
    else {

      // Actualizo la liquidación
      liquidacionGlobal.setId(this.forma.get('id').value);
      this._common.UpdateOne( 'liquidacionesGlobales', liquidacionGlobal ).subscribe(
        data => {

          this._fxGlobals.showAlert( 'Operación Exitosa!', 'La expensa se ha actualizado con éxito', 'success' );
          this.router.navigate( ['grilla-expensas'] );
        }
      );
    }
  }



    // Obtengo un adherente por ID
    public getLiquidacionG( id: String ) { 
   
      this._common.getOne( 'vwliquidacionesglobales', id ).subscribe(
        data => {

          if(data.codEstado == 'COD_ESTADO_1') {

             // Seteo el form con el adhrente recibido
            console.log(data);
            this.forma.get('id').setValue(data.id);
            this.forma.get('anio').setValue(data.anio);
            this.forma.get('mes').setValue(data.mes);
            this.forma.get('primerVencimiento').setValue(data.primerVencimiento);
            this.forma.get('segundoVencimiento').setValue(data.segundoVencimiento);
            this.forma.get('estado').setValue(data.codEstadoText);
          }
          else {
  
            this.router.navigate( ['grilla-expensas'] );
            this._fxGlobals.showAlert("Atención!", "No se puede editar una liquidación cerrada", "warning"); 
          }
          
         
  
        },
        err => this.router.navigate( ['grilla-expensas'] )
      );  
    }
  
  

}

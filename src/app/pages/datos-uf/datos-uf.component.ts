import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router  } from '@angular/router';

import { UnidadFuncional } from 'src/app/class/class.index';

import { FxGlobalsService, CommonService, DiccionarioService, ValidatorsService } from '../../services/service.index';



@Component({
  selector: 'app-datos-uf',
  templateUrl: './datos-uf.component.html'
})
export class DatosUFComponent implements OnInit {



  /************************************************************************************************
  @newOperation: indica si la operación es alta o edición (true-false)
  @forma: reactive form con los campos de la vista
  @arrSitLegal: arreglo con datos de la db para llenar el select
  @arrSitAlquiler: arreglo con datos de la db para llenar el select
  @arrDepartamentos: arreglo con los datos de la db para llenar el select
  @arrManzanas: arreglo con los datos de la db para llenar el select
  ***********************************************************************************************/
  public neWoperation: Boolean = true;
  public forma: FormGroup;
  private arrSitLegal = [];
  private arrSitAlquiler = [];
  private arrDepartamentos = [];
  private arrManzanas = [];



  constructor(
    private activateRoute: ActivatedRoute, 
    private _common: CommonService, 
    private _diccionario: DiccionarioService,
    private _fxGlobals: FxGlobalsService,
    private _validators: ValidatorsService,
    private router: Router) { }



  ngOnInit() {

      this.forma = new FormGroup({
      'id': new FormControl( '', Validators.required, this._validators.asyncExistsEntity('uf').bind(this) ),
      'idAdherente': new FormControl( '', Validators.required, this._validators.asyncNotExistsEntity('adherentes').bind(this)),
      'nroEdificio': new FormControl( '', Validators.required ),
      'idManzana': new FormControl( '', Validators.required ),
      'departamento': new FormControl( '' ),
      'codSitLegal': new FormControl( '', Validators.required ),
      'coeficiente': new FormControl( '', Validators.required ),
      'codAlquila': new FormControl( '', Validators.required )
    });



    // Recibo los parámetros de la ruta
    // Si el parametro que recibo es un id llamo al metodo para buscar la UF
    // Si el parametro que recibo es nuevo, muestro el formulario vacio
    this.activateRoute.params.subscribe(
      data => {
        if(data['id'] !== 'nuevo') {
          
          this.getUF( data['id'] );
          this.neWoperation = false;
          
          // Deshabilito el campo id
          this.forma.get( 'id' ).disable();
        }
      });

      
      // Lleno los arreglos con el diccionario
      this.getDiccionario();
  }
  


  public onSubmit() {  

    // Creo el objeto y seteo sus atributos
    let uf = new UnidadFuncional();
    
    uf.setId( this.forma.get( 'id' ).value );
    uf.setIdManzana( this.forma.get( 'idManzana' ).value );
    uf.setIdAdherente( this.forma.get( 'idAdherente' ).value );
    uf.setNroEdificio( this.forma.get( 'nroEdificio' ).value );  
    uf.setDepartamento( this.forma.get( 'departamento' ).value );
    uf.setCodSitLegal( this.forma.get( 'codSitLegal' ).value );
    uf.setCoeficiente( this.forma.get( 'coeficiente' ).value );
    uf.setCodAlquila( this.forma.get( 'codAlquila' ).value );

    if( this.neWoperation ) {

      console.log(uf);

      // Inserto la UF
      this._common.insertEntity( uf, 'uf' ).subscribe(
        data => {

          this._fxGlobals.showAlert( 'Operación Exitosa!', 'La unidad funcional se ha insertado con éxito', 'success' );
          this.router.navigate( ['grilla-uf']);
        }
      );
    }
    else {

      // Actualizo la UF
      this._common.UpdateOne( 'uf', uf ).subscribe(
        data => {

          this._fxGlobals.showAlert( 'Operación Exitosa!', 'La unidad funcional se ha actualizado con éxito', 'success' );
          this.router.navigate( ['grilla-uf'] );
        }
      );
    }
  }



  // Obtengo una UF por ID
  public getUF( id: String ) { 
    
    this._common.getOne( 'uf', id ).subscribe(
      data => {
        
        // Seteo el form con el adhrente recibido
        this.forma.get( 'id' ).setValue( data.id );
        this.forma.get( 'idAdherente' ).setValue( data.idAdherente );
        this.forma.get( 'nroEdificio' ).setValue( data.nroEdificio );
        this.forma.get( 'idManzana' ).setValue( data.idManzana );
        this.forma.get( 'departamento' ).setValue( data.departamento );
        this.forma.get( 'codSitLegal' ).setValue( data.codSitLegal );
        this.forma.get( 'coeficiente' ).setValue( data.coeficiente );
        this.forma.get( 'codAlquila' ).setValue( data.codAlquila );

      },
      err => this.router.navigate( ['grilla-uf'])
    );  
  }



  // Traigo los datos del diccionario para llenar los arreglos de los select
  private getDiccionario() {
 
    this._diccionario.getAll('COD_SIT_LEGAL').subscribe(
      data => this.arrSitLegal = data);

    this._diccionario.getAll('COD_ALQ').subscribe(
      data => this.arrSitAlquiler = data);

    this._diccionario.getAll('COD_DEPARTAMENTO').subscribe(
      data => this.arrDepartamentos = data);

    this._common.getAll('manzanas').subscribe(
      data => this.arrManzanas = data);
  }


}

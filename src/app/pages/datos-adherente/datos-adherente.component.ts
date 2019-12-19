import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router  } from '@angular/router';

import { Adherente } from 'src/app/class/class.index';

import { ValidatorsService, FxGlobalsService, CommonService } from '../../services/service.index';



@Component({
  selector: 'app-datos-adherente',
  templateUrl: './datos-adherente.component.html'
})
export class DatosAdherenteComponent implements OnInit {



  /************************************************************************************************
  @newOperation: indica si la operación es alta o edición (true-false)
  @forma: reactive form con los campos de la vista
  ***********************************************************************************************/
  public neWoperation: Boolean = true;
  public forma: FormGroup;

  

  constructor(
    private activateRoute: ActivatedRoute, 
    private _validators: ValidatorsService, 
    private _common: CommonService, 
    private _fxGlobals: FxGlobalsService,
    private router: Router) { }



  ngOnInit() {

    this.forma = new FormGroup({
      'nroAdherente': new FormControl( '', Validators.required, this._validators.asyncExistsEntity('adherentes').bind(this) ),
      'nroDocumento': new FormControl( '', Validators.required ),
      'apellido': new FormControl( '', Validators.required ),
      'nombre': new FormControl( '', Validators.required ),
      'telefono': new FormControl( '', Validators.required ),
      'email': new FormControl( '', [ Validators.required, this._validators.emailValidator ] ),
    });



    // Recibo los parámetros de la ruta
    // Si el parametro que recibo es un id llamo al metodo para buscar el adherente
    // Si el parametro que recibo es nuevo, muestro el formulario vacio
    this.activateRoute.params.subscribe(
      data => {
        if(data['id'] !== 'nuevo') {
          
          this.getAdherente( data['id'] );
          this.neWoperation = false;
          
          // Deshabilito el campo id
          this.forma.get( 'id' ).disable();
        }
      });
  }


  
  public onSubmit() {

    let adherente = new Adherente();
    
    adherente.setNroAdherente( this.forma.get( 'nroAdherente' ).value );
    adherente.setNroDocumento( this.forma.get( 'nroDocumento' ).value );
    adherente.setApellido( this.forma.get( 'apellido' ).value );
    adherente.setNombre( this.forma.get( 'nombre' ).value );  
    adherente.setTelefono( this.forma.get( 'telefono' ).value );
    adherente.setEmail( this.forma.get( 'email' ).value );


    if( this.neWoperation ) {

      // Inserto el adherente
      this._common.insertEntity( adherente, 'adherentes' ).subscribe(
        data => {

          this._fxGlobals.showAlert( 'Operación Exitosa!', 'El adherente se ha insertado con éxito', 'success' );
          this.forma.reset();
        }
      );
    }
    else {

      // Actualizo el adherente
      this._common.UpdateOne( 'adherentes', adherente ).subscribe(
        data => {

          this._fxGlobals.showAlert( 'Operación Exitosa!', 'El adherente se ha actualizado con éxito', 'success' );
          this.router.navigate( ['grilla-adherentes'] );
        }
      );
    }
  }



  // Obtengo un adherente por ID
  public getAdherente( id: String ) { 
   
    this._common.getOne( 'adherentes', id ).subscribe(
      data => {
        
        // Seteo el form con el adhrente recibido
        this.forma.get( 'nroAdherente' ).setValue( data.id );
        this.forma.get( 'nroDocumento' ).setValue( data.nroDocumento );
        this.forma.get( 'apellido' ).setValue( data.apellido );
        this.forma.get( 'nombre' ).setValue( data.nombre );
        this.forma.get( 'telefono' ).setValue( data.telefono );
        this.forma.get( 'email' ).setValue( data.email );

      },
      err => this.router.navigate( ['grilla-adherentes'] )
    );  
  }



  


}

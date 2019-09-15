import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router  } from '@angular/router';

import { UnidadFuncional } from 'src/app/class/class.index';

import { ValidatorsService, FxGlobalsService, CommonService } from '../../services/service.index';



@Component({
  selector: 'app-datos-uf',
  templateUrl: './datos-uf.component.html'
})
export class DatosUFComponent implements OnInit {

  // true si es para dar de alta una nueva UF
  // false si es para editar una UF
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
      'id': new FormControl( '', Validators.required ),
      'idAdherente': new FormControl( '', Validators.required ),
      'nroEdificio': new FormControl( '', Validators.required ),
      'idManzana': new FormControl( '', Validators.required ),
      'departamento': new FormControl( '', Validators.required ),
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
  }
  


  public onSubmit() {  

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

      this._common.insertEntity( uf, 'uf' ).subscribe(
        data => {

          this._fxGlobals.showAlert( 'Operación Exitosa!', 'La unidad funcional se ha insertado con éxito', 'success' );

          this.forma.reset();
          this.forma.get('idManzana').setValue("");
          this.forma.get('departamento').setValue("");
          this.forma.get('codSitLegal').setValue("");
          this.forma.get('codAlquila').setValue("");

        }
      );
    }
    else {

      // Actualizo el adherente
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

        this._fxGlobals.hideSpinner();
      },
      err => this.router.navigate( ['grilla-adherentes'])
    );  
  }



}

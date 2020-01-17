import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router  } from '@angular/router';

import { CommonService, FxGlobalsService } from '../../services/service.index';
import { ConceptoGasto } from 'src/app/class/class.index';



@Component({
  selector: 'app-datos-conceptos-gastos',
  templateUrl: './datos-conceptos-gastos.component.html',
  styleUrls: ['./datos-conceptos-gastos.component.css']
})
export class DatosConceptosGastosComponent implements OnInit {



  /************************************************************************************************
  @newOperation: indica si la operación es alta o edición (true-false)
  @idEdit: id de la entidad a editar (si newOperation es false)
  @forma: reactive form con los campos de la vista
  ***********************************************************************************************/
  public neWoperation: Boolean = true;
  private idEdit = 0;
  public forma: FormGroup;



  constructor(
    private activateRoute: ActivatedRoute, 
    private router: Router,
    private _common: CommonService,
    private _fxGlobals: FxGlobalsService
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
          
          this.idEdit = data['id'];
          this.getConcepto( data['id'] );
          this.neWoperation = false;
          
          // Deshabilito el campo codigo
          this.forma.get( 'codigo' ).disable();
        }
      });
  }



  public onSubmit() { 

    let conceptoGasto = new ConceptoGasto();

    conceptoGasto.setCodigo(this.forma.get('codigo').value.toUpperCase());
    conceptoGasto.setConceptoGasto(this.forma.get('concepto').value.toUpperCase());
    
    // Hago la inserción
    if( this.neWoperation ){

      this._common.insertEntity( conceptoGasto, 'concepto-gasto').subscribe(
        data => {

          this._fxGlobals.showAlert( 'Operación Exitosa!', 'El concepto se ha insertado con éxito', 'success' );
          this.forma.reset();
        }
      );
    }
    else {

      // Actualizo el concepto
      conceptoGasto.setId(Number.parseInt(this.idEdit.toString()));
      this._common.updateOne( 'conceptosgastos', conceptoGasto ).subscribe(
        data => {

          this._fxGlobals.showAlert( 'Operación Exitosa!', 'El concepto se ha actualizado con éxito', 'success' );
          this.router.navigate( ['grilla-conceptos-gastos'] );
        }
      );
    }
  }



  // Obtengo un concepto por codigo
  public getConcepto( id: String ) { 
    
    this._common.getOne( 'conceptosgastos', id ).subscribe(
      data => {
        
        // Seteo el form con el concepto recibido
        this.forma.get( 'codigo' ).setValue( data.codigo );
        this.forma.get( 'concepto' ).setValue( data.conceptoGasto );

      },
      err => this.router.navigate( ['grilla-adherentes'])
    );  
  }



}

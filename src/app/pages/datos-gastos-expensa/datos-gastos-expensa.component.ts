import { Component, OnInit } from '@angular/core';
import { ConceptosGastosService, DiccionarioService, FxGlobalsService, CommonService } from 'src/app/services/service.index';
import { FormGroup, FormControl, Validators } from '@angular/forms';

declare var $ : any;

@Component({
  selector: 'app-datos-gastos-expensa',
  templateUrl: './datos-gastos-expensa.component.html',
  styleUrls: ['./datos-gastos-expensa.component.css']
})
export class DatosGastosExpensaComponent implements OnInit {

  public forma: FormGroup;
  public arrEntidades = [];
  public arrManzanas  = [];

  constructor( private _conceptoGastos: ConceptosGastosService, private _diccionario: DiccionarioService, private _fxGlobals: FxGlobalsService, private _common: CommonService ) { }


  ngOnInit() {  

    this.forma = new FormGroup({
      'concepto': new FormControl( { value: '', disabled: true }, Validators.required ),
      'monto': new FormControl( '', Validators.required ),
      'descripcion': new FormControl( '', Validators.required ),
      'entidad': new FormControl( '', Validators.required )
    });

    this.getEntidades();
    this.getManzanas();

  }



  public pressCodigo( event ): void {

    let value: String = event['srcElement'].value;


    if(value.length == 3) {

      console.log(value);
      this._conceptoGastos.getOne( value ).subscribe(

        data => this.forma.get('concepto').setValue(data.conceptoGasto),
        err => this.forma.get('concepto').reset()
      );
    }
  }



  private getEntidades() : void {

    this._diccionario.getAll('TIPO_ENTIDAD').subscribe(

      data => this.arrEntidades = data 
    );
  }



  private getManzanas() : void {

    this._common.getAll('manzanas').subscribe(

      data => this.arrManzanas = data 
    );
  }



  public onChangeEntidad() : void {

    console.log(this.forma.get('entidad').value);
  }


  public agregarGasto() {
    console.log("Agregado");
  }
}

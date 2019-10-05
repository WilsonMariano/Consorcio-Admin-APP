import { Component, OnInit } from '@angular/core';
import { ConceptosGastosService } from 'src/app/services/service.index';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-gastos-expensa',
  templateUrl: './gastos-expensa.component.html',
  styles: ['./gastos-expensa.component.css']
})
export class GastosExpensaComponent implements OnInit {

  public forma: FormGroup;

  constructor( private _conceptoGastos: ConceptosGastosService ) { }


  ngOnInit() {

    this.forma = new FormGroup({
      'concepto': new FormControl( { value: '', disabled: true }, Validators.required )
    });
  }

  public pressCodigo( event ): void {

    let value: String = event['srcElement'].value;


    if(value.length == 3) {

      console.log(value);
      this._conceptoGastos.getOne( value ).subscribe(

        data => this.forma.get('concepto').setValue(data.conceptoGasto),
        err => this.forma.get('concepto').reset()
        // data => console.log(data)
      );

    }

  }

}

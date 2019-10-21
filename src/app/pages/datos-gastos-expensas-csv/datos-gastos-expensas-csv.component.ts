import { Component, OnInit } from '@angular/core';
import { Papa } from 'ngx-papaparse';
import { GastoLiquidacion } from 'src/app/class/class.index';

@Component({
  selector: 'app-datos-gastos-expensas-csv',
  templateUrl: './datos-gastos-expensas-csv.component.html',
  styles: []
})
export class DatosGastosExpensasCsvComponent implements OnInit {

  constructor(private _papa: Papa) { }

  ngOnInit() {
  }

  public upload ( event: any ) : void {

    let file = event.srcElement.files[0];
    let arrGastos = new Array<GastoLiquidacion> ();

    this._papa.parse(file, {

      complete: ( csv ) => {
       
        csv.data.forEach(element => {

          if(element.length == 1)
            return;

          console.log(element);
          
        });
      }
    });

  }

}

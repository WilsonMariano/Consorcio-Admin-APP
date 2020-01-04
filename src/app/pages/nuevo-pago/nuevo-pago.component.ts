import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/service.index';
import { UnidadFuncional } from '../../class/class.index';
import { Manzana } from '../../class/class.index';
import { FormGroup, FormControl, Validators } from '@angular/forms';

declare var $;

@Component({
  selector: 'app-nuevo-pago',
  templateUrl: './nuevo-pago.component.html',
  styleUrls: ['./nuevo-pago.component.css']
})
export class NuevoPagoComponent implements OnInit {

  public forma: FormGroup;
  public detalleDeuda = null;

  public arrDeudas = [
    {
      'detalle': 'Expensa 09/2019',
      'vencimiento': '30/09/2019',
      'montoPagar': 1000,
      'montoOriginal': 3000,
      'montoIntereses': 500,
      'montoPagado': 2500
    },
    {
      'detalle': 'Expensa 10/2019',
      'vencimiento': '31/10/2019',
      'montoPagar': 2700,
      'montoOriginal': 2000,
      'montoIntereses': 700,
      'montoPagado': 0
    }
  ];



  constructor() {}

  ngOnInit() {

    this.forma = new FormGroup({
      'checkPago': new FormControl('parcial'),
      'txtOtroImporte': new FormControl(''),
      'txtTotalDeuda': new FormControl('')
    });


  }

  public onChangeCheck(): void {

    console.log(this.forma.get('checkPago').value);
  }


}

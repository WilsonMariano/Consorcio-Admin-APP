import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/service.index';
import { UnidadFuncional } from '../../class/class.index';
import { Manzana } from '../../class/class.index';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

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



  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {

    this.forma = this.formBuilder.group({
      'checkPago': new FormControl('parcial'),
      'importePagar': new FormControl(0.00),
      'deudas': new FormArray([])
    });

    this.buildArrDeudas();
    console.log(this.forma);

  }

  /**
   * TODO: buscar forma mas eficiente
   */
  private buildArrDeudas(): void {

    this.arrDeudas.forEach(e => {

      (<FormArray>this.forma.get('deudas')).push(this.formBuilder.group({
        'detalle': e.detalle,
        'vencimiento': e.vencimiento,
        'montoPagar': e.montoPagar,
        'montoOriginal': e.montoOriginal,
        'montoIntereses': e.montoIntereses,
        'montoPagado': e.montoPagado,
        'montoImputado': 0,
        'checked': false
      }))
    });
  }

  public checkTotalDeuda() {

    let res = 0;

    (<Array<FormControl>>this.forma.get('deudas')['controls']).forEach(control => {

      res += Number.parseInt(control.get('montoPagar').value);
      control.get('checked').setValue(true);
    });

    this.forma.get('importePagar').setValue(res);
  }

  public checkOtroImporte() {

    this.forma.get('checkPago').setValue('parcial');

    (<Array<FormControl>>this.forma.get('deudas')['controls']).forEach(control => {

      control.get('checked').setValue(false);
    });

    this.forma.get('importePagar').setValue(0.00);
  }

  public checkDeuda(index) {

    this.forma.get('checkPago').setValue('parcial');

    let res = 0;

    (<Array<FormControl>>this.forma.get('deudas')['controls']).forEach(control => {

      if(control.get('checked').value)
        res += Number.parseInt(control.get('montoPagar').value);
    });

    this.forma.get('importePagar').setValue(res);
  }


}

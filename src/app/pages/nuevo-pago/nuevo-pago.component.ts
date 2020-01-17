import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { FxGlobalsService } from '../../services/service.index';
import { CtasctesService } from '../../services/service.index';
import { ActivatedRoute } from '@angular/router';

declare var $;

@Component({
  selector: 'app-nuevo-pago',
  templateUrl: './nuevo-pago.component.html',
  styleUrls: ['./nuevo-pago.component.css']
})
export class NuevoPagoComponent implements OnInit {

  public forma: FormGroup;
  public detalleDeuda = null;
  public inputArrPagos = {
    'totalPagar': 0,
    'arrDeudas': []
  };

  public arrDeudas = [
    {
      'idLiquidacion': 1,
      'detalle': 'Expensa 09/2019',
      'vencimiento': '30/09/2019',
      'montoPagar': 1000,
      'montoOriginal': 3000,
      'montoIntereses': 500,
      'montoPagado': 2500
    },
    {
      'idLiquidacion': 2,
      'detalle': 'Expensa 10/2019',
      'vencimiento': '31/10/2019',
      'montoPagar': 2700,
      'montoOriginal': 2000,
      'montoIntereses': 700,
      'montoPagado': 0
    },
    {
      'idLiquidacion': 1,
      'detalle': 'Expensa 11/2019',
      'vencimiento': '30/11/2019',
      'montoPagar': 1000,
      'montoOriginal': 3000,
      'montoIntereses': 500,
      'montoPagado': 2500
    },
    {
      'idLiquidacion': 2,
      'detalle': 'Expensa 12/2019',
      'vencimiento': '31/12/2019',
      'montoPagar': 2700,
      'montoOriginal': 2000,
      'montoIntereses': 700,
      'montoPagado': 0
    }
  ];



  constructor(private formBuilder: FormBuilder, public _fx: FxGlobalsService, private _ctasctes: CtasctesService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {

    this.forma = this.formBuilder.group({
      'checkPago': new FormControl('parcial'),
      'importePagar': new FormControl(0.00),
      'deudas': new FormArray([])
    });

    // this.buildArrDeudas();
    // console.log(this.forma);
    // this.validateRows();
    this.getDeudas();

  }

  private getDeudas(): void {

    this.activatedRoute.params.subscribe(
      params => this._ctasctes.getDeudas(params.id).subscribe(
        data => {
          console.log(data);
          this.arrDeudas = data;
          this.buildArrDeudas();
          this.validateRows();
        }
      )
    )

    

  }

/**
 * Retorna el arreglo de deudas de la forma
 */
  private getDeudasCtrls() { return this.forma.get('deudas')['controls'] }
  
  /**
   * TODO: buscar forma mas eficiente
   * Genera un array de controles, dentro de la forma, con las deudas de la uf
   */
  private buildArrDeudas(): void {

    this.arrDeudas.forEach(e => {

      (<FormArray>this.forma.get('deudas')).push(this.formBuilder.group({
        'idLiquidacion': e.idLiquidacion,
        'detalle': e.detalle,
        'vencimiento': e.vencimiento,
        'montoPagar': e.montoPagar,
        'montoOriginal': e.montoOriginal,
        'montoIntereses': e.montoIntereses,
        'montoPagado': e.montoPagado,
        'montoAsignado': 0,
        'checked': false
      }))
    });
  }

  /**
   * Cuando se elige pagar el total de la deuda
   * Recorre el arreglo de deudas de la forma, checkea los campos
   * y suma todos sus montos para desplegar el total en la vista
   */
  public checkTotalDeuda() {

    let res = 0;

    (<Array<FormControl>>this.getDeudasCtrls()).forEach(control => {

      res += Number.parseInt(control.get('montoPagar').value);
      control.get('checked').setValue(true);
    });

    this.forma.get('importePagar').setValue(res);
  }

  /**
   * Ejecutado cuando se selecciona la opción de pagar otro importe
   * Recorre el arreglo de pagos de la forma buscando los pagos seleccionados
   * sumando sus valores y desplegando el total en la vista
   */
  public checkOtroImporte() {

    this.forma.get('checkPago').setValue('parcial');

    (<Array<FormControl>>this.getDeudasCtrls()).forEach(control => {

      control.get('checked').setValue(false);
    });

    this.forma.get('importePagar').setValue(0.00);

  }

  /**
   * Ejecutado cuando se selecciona una deuda 
   * Recorre el arreglo de deudas de la forma, cuando encuentra una deuda seleccionada
   * lo acumula en un contador y lo despliega en el total.
  */
  public checkDeuda() {

    this.forma.get('checkPago').setValue('parcial');

    let res = 0;

    (<Array<FormControl>>this.getDeudasCtrls()).forEach(control => {

      if(control.get('checked').value)
        res += Number.parseInt(control.get('montoPagar').value);
    });

    this.forma.get('importePagar').setValue(res);

    this.validateRows();  
  }


  /**
   * Se ejecuta siempre que se checkea un campo y al comienzo de la vista
   * Se encarga de deshabilitar los controles de las deudas mas nuevas para
   * impedir que no se seleccionen deudas mas nuevas
   */
  public validateRows() {

    for(let i = 0; i < this.getDeudasCtrls().length; i++) {

      if(i == 0)
        this.getDeudasCtrls()[i].get('checked').enable();
      
      else {

        console.log(this.getDeudasCtrls()[i - 1].get('checked').value);
      
        if(this.getDeudasCtrls()[i - 1].get('checked').value)
          this.getDeudasCtrls()[i].get('checked').enable();
        
        else {
          this.getDeudasCtrls()[i].get('checked').setValue(false);
          this.getDeudasCtrls()[i].get('checked').disable();

        }
      }

    }

  }

  public onSubmit(): void {

    let totalPagar = Number.parseFloat(this.forma.get('importePagar').value);
    this.inputArrPagos.totalPagar = totalPagar;
    this.inputArrPagos.arrDeudas = [];
    
    (<Array<FormControl>>this.getDeudasCtrls()).forEach(control => {

      let montoPagar = Number.parseFloat(control.get('montoPagar').value);

      if(montoPagar <= totalPagar) {

        control.get('montoAsignado').setValue(control.get('montoPagar').value);
        totalPagar -= montoPagar;
      
      } else {

        if(montoPagar > totalPagar) {
      
          control.get('montoAsignado').setValue(totalPagar);
          totalPagar -= totalPagar;
        }
      }

      // Agrego el pago al array
      if(control.get('montoAsignado').value != 0)
        this.inputArrPagos.arrDeudas.push({
          'idLiquidacion': control.get('idLiquidacion').value,
          'detalle': control.get('detalle').value,
          'montoPagar': control.get('montoPagar').value,
          'montoAsignado': control.get('montoAsignado').value
        });

    });

    console.log(this.getDeudasCtrls());
    console.log(totalPagar);

    if(totalPagar != 0)
      this._fx.showAlert("Error", "La suma ingresada excede el total de la deuda", "error");
    
    else
      $("#modalDetallePago").modal("show");

  }


}

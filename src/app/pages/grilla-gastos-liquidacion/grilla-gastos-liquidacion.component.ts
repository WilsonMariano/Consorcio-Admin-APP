import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-grilla-gastos-liquidacion',
  templateUrl: './grilla-gastos-liquidacion.component.html'
})
export class GrillaGastosLiquidacionComponent implements OnInit {
  
  // Id de liquidacion recibida
  private idLiquidacion;

  // SEE grilla.component

  private arrControls = ['Concepto', 'Monto', 'Detalle'];


  private arrAttr = [
    { 'attr': 'codConceptoGasto',   'type': 'String'  },
    { 'attr': 'monto',              'type': 'Number'  },
    { 'attr': 'detalle',            'type': 'String'  },
  ];


  private filterParams = {
    'col': 'idLiquidacionGlobal',
    'txt': this.idLiquidacion
  }


  public options = {
    'entity': 'gastosLiquidaciones',
    'arrAttr': this.arrAttr,
    'arrControls': this.arrControls,
    'filterParams': this.filterParams,
    'buttons': [
      { 'icon': 'mdi mdi-delete' }
    ]
  }


  constructor(private activateRoute: ActivatedRoute) { }

  
  ngOnInit() {

    this.activateRoute.params.subscribe(
      data => {

        if( data['id'] ) this.idLiquidacion = data['id'];
        this.filterParams.txt = data['id'];
          
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-grilla-gastos-liquidacion',
  templateUrl: './grilla-gastos-liquidacion.component.html'
})
export class GrillaGastosLiquidacionComponent implements OnInit {


  private arrControls = ['Concepto', 'Monto'];


  private arrAttr = [
    { 'attr': 'codConceptoGasto',           'type': 'String'  },
    { 'attr': 'monto',    'type': 'Number'  }
  ];


  private filterParams = {
    'col1': 'idLiquidacionGlobal',
    'txt1': null
  }

  public options = {
    'entity': 'gastosLiquidaciones',
    'arrAttr': this.arrAttr,
    'arrControls': this.arrControls,
    'filterParams': this.filterParams,
    'buttons': [
      { 'url': 'gastos-expensa',    'icon': 'mdi mdi-lead-pencil' }
    ]
  }

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activateRoute.params.subscribe(
      data => {

        if(data['id']) 
          this.filterParams.txt1 = data['id'];
          
    });
  }

}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grilla-liquidaciones-globales',
  templateUrl: './grilla-liquidaciones-globales.component.html'
})
export class GrillaLiquidacionesGlobalesComponent implements OnInit {

  // SEE grilla.component

  private arrControls = ['Año', 'Mes', '1er vencimiento', '2do vencimiento', 'Fecha de emisión', 'Estado'];


  private arrAttr = [
    { 'attr': 'anio',               'type': 'Number'  },
    { 'attr': 'mes',                'type': 'Number'  },
    { 'attr': 'primerVencimiento',  'type': 'Date'    },
    { 'attr': 'segundoVencimiento', 'type': 'Date'    },
    { 'attr': 'fechaEmision',       'type': 'Date'    },
    { 'attr': 'codEstadoText',          'type': 'String'  }
  ];


  public options = {
    'entity': 'vwLiquidacionesGlobales',
    'arrAttr': this.arrAttr,
    'arrControls': this.arrControls,
    'buttons': [
      { 'url': 'home/datos-expensa',                 'icon': 'mdi mdi-lead-pencil'   },
      { 'url': 'home/grilla-gastos-liquidacion',     'icon': 'mdi mdi-currency-usd'  }
    ]
  }
  

  constructor() { }


  ngOnInit() {}

}

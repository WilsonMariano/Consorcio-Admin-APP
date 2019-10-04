import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grilla-expensas',
  templateUrl: './grilla-expensas.component.html',
  styles: []
})
export class GrillaExpensasComponent implements OnInit {

  private arrControls = ['Año', 'Mes', '1er vencimiento', '2do vencimiento', 'Fecha de emisión', 'Estado'];


  private arrAttr = [
    { 'attr': 'anio',               'type': 'Number'  },
    { 'attr': 'mes',                'type': 'Number'  },
    { 'attr': 'primerVencimiento',  'type': 'Date'    },
    { 'attr': 'segundoVencimiento', 'type': 'Date'    },
    { 'attr': 'fechaEmision',       'type': 'Date'    }
  ];


  public options = {
    'entity': 'liquidacionesGlobales',
    'arrAttr': this.arrAttr,
    'arrControls': this.arrControls,
  }
  

  constructor() { }

  ngOnInit() {
  }

}

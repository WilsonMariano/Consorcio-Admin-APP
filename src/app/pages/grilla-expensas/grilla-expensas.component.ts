import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grilla-expensas',
  templateUrl: './grilla-expensas.component.html',
  styles: []
})
export class GrillaExpensasComponent implements OnInit {

  public arrControls = ['Año', 'Mes', '1er vencimiento', '2do vencimiento', 'Fecha de emisión', 'Tasa interés (%)'];


  public arrAttr = [
    { 'attr': 'anio',               'type': 'Number'  },
    { 'attr': 'mes',                'type': 'Number'  },
    { 'attr': 'primerVencimiento',  'type': 'Date'    },
    { 'attr': 'segundoVencimiento', 'type': 'Date'    },
    { 'attr': 'fechaEmision',       'type': 'Date'    },
    { 'attr': 'tasaInteres',        'type': 'Number'  }
  ];
  

  constructor() { }

  ngOnInit() {
  }

}

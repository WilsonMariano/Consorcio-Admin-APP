import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cta-cte',
  templateUrl: './cta-cte.component.html'
})
export class CtaCteComponent implements OnInit {

  private arrControls = ['Fecha', 'Descrpicion', 'Monto', 'Saldo'];


  private arrAttr = [
    { 'attr': 'fecha',          'type': 'Date'  },
    { 'attr': 'descripcion',    'type': 'String'  },
    { 'attr': 'monto',          'type': 'Number'  },
    { 'attr': 'saldo',          'type': 'Number'  },
  ];

  private filterParams = {
    'column': 'idUf',
    'text': 2
  }


  public options = {
    'entity': 'CtasCtes',
    'arrAttr': this.arrAttr,
    'arrControls': this.arrControls,
    'filterParams': this.filterParams
  }

  constructor() { }

  ngOnInit() {
  }



}

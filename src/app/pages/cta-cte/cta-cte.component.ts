import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cta-cte',
  templateUrl: './cta-cte.component.html',
  styles: []
})
export class CtaCteComponent implements OnInit {

  private arrControls = ['UF', 'Apellido y Nombre', 'Nº Adherente', 'Saldo'];


  private arrAttr = [
    { 'attr': 'id',           'type': 'Number'  },
    { 'attr': 'adherente',    'type': 'String'  },
    { 'attr': 'nroAdherente', 'type': 'Number'  },
    { 'attr': 'saldo',        'type': 'Number'  },
  ];


  public options = {
    'entity': 'vwCtasCtes',
    'arrAttr': this.arrAttr,
    'arrControls': this.arrControls,
    'buttons': [
      { 'url': 'cta-cte', 'icon': 'mdi mdi-arrow-right' }
    ]
  }

  constructor() { }

  ngOnInit() {
  }



}

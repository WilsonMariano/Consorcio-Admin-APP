import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grilla-ctas-ctes',
  templateUrl: './grilla-ctas-ctes.component.html',
  styles: []
})
export class GrillaCtasCtesComponent implements OnInit {


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

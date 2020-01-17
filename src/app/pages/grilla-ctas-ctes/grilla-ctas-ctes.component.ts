import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grilla-ctas-ctes',
  templateUrl: './grilla-ctas-ctes.component.html',
  styles: []
})
export class GrillaCtasCtesComponent implements OnInit {

  // SEE grilla.component

  private arrControls = ['UF', 'Manzana', 'Nro. adherente', 'Apellido y Nombre', 'Saldo'];
  
  
  private arrAttr = [
    { 'attr': 'nroUF',        'type': 'Number'  },
    { 'attr': 'nroManzana',   'type': 'Number'  },
    { 'attr': 'nroAdherente', 'type': 'Number'  },
    { 'attr': 'adherente',    'type': 'String'  },
    { 'attr': 'saldo',        'type': 'Number'  },
  ];
  
  
  public options = {
    'entity': 'vwCtasCtes',
    'arrAttr': this.arrAttr,
    'arrControls': this.arrControls,
    'buttons': [
      { 'url': 'home/cta-cte', 'icon': 'mdi mdi-arrow-right' }
    ]
  }
  
  
  constructor() { }
  
  
  ngOnInit() {}
  
  }

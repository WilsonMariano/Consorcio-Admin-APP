import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grilla-feriados',
  templateUrl: './grilla-feriados.component.html',
  styles: []
})
export class GrillaFeriadosComponent implements OnInit {

  private arrControls = ['Día', 'Mes', 'Año', 'Tipo', 'Descripción'];

  private arrAttr = [
    { 'attr': 'dia',             'type': 'Number'  },
    { 'attr': 'mes',             'type': 'Number'  },
    { 'attr': 'anio',            'type': 'Number'  },
    { 'attr': 'tipo',            'type': 'String'  },
    { 'attr': 'descripcion',     'type': 'String'  }
  ];

  public options = {
    'entity': 'feriados',
    'arrAttr': this.arrAttr,
    'arrControls': this.arrControls,
    'delete': { 
      'icon': 'mdi mdi-delete',
      'entityUrl': 'feriados'
    }
  }

  constructor() { }

  ngOnInit() {
  }

}

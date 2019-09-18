import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grilla-conceptos-gastos',
  templateUrl: './grilla-conceptos-gastos.component.html',
  styles: []
})
export class GrillaConceptosGastosComponent implements OnInit {

  private arrControls = ['Código', 'Concepto'];
  private arrAttr = [
    { 'attr': 'codigo',       'type': 'String' },
    { 'attr': 'conceptoGasto','type': 'String' }
  ];

  public options = {
    'entity': 'conceptosgastos',
    'arrAttr': this.arrAttr,
    'arrControls': this.arrControls,
    'buttons': [
      { 'url': 'datos-conceptos-gastos', 'icon': 'mdi mdi-lead-pencil' }
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}

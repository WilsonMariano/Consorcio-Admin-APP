import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grilla-conceptos-gastos',
  templateUrl: './grilla-conceptos-gastos.component.html',
  styles: []
})
export class GrillaConceptosGastosComponent implements OnInit {

  public arrControls = ['Código', 'Concepto'];
  public arrAttr = [
    { 'attr': 'codigo',       'type': 'String' },
    { 'attr': 'conceptoGasto','type': 'String' }
  ];

  constructor() { }

  ngOnInit() {
  }

}

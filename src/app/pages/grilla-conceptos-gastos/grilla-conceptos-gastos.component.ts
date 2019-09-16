import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grilla-conceptos-gastos',
  templateUrl: './grilla-conceptos-gastos.component.html',
  styles: []
})
export class GrillaConceptosGastosComponent implements OnInit {

  public arrControls = ['Código', 'Concepto'];
  public arrAttr = ['codigo', 'conceptoGasto'];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grilla-expensas',
  templateUrl: './grilla-expensas.component.html',
  styles: []
})
export class GrillaExpensasComponent implements OnInit {

  public arrControls = ['Año', 'Mes', '1er vencimiento', '2do vencimiento', 'Fecha de emisión', 'Tasa interés (%)'];
  public arrAttr = ['anio', 'mes', 'primerVencimiento', 'segundoVencimiento', 'fechaEmision', 'tasaInteres'];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-grilla-uf',
  templateUrl: './grilla-uf.component.html'
})
export class GrillaUFComponent implements OnInit {
  

  public arrControls = ['UF', 'Manzana', 'Adherente', 'Edificio', 'Departamento', 'Sit Legal', 'Coeficiente', 'Cod Alquila'];
  public arrAttr = ['id', 'idManzana', 'idAdherente', 'nroEdificio', 'departamento', 'codSitLegal', 'coeficiente', 'codAlquila'];

  constructor() { }

  ngOnInit() {
  }

}

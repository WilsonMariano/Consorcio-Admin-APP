import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-grilla-uf',
  templateUrl: './grilla-uf.component.html'
})
export class GrillaUFComponent implements OnInit {
  

  private arrControls = ['UF', 'Manzana', 'Adherente', 'Edificio', 'Departamento', 'Sit Legal', 'Coeficiente', 'Cod Alquila'];


  private arrAttr = [
    { 'attr': 'id',           'type': 'Number' },
    { 'attr': 'idManzana',    'type': 'Number' },
    { 'attr': 'idAdherente',  'type': 'Number' },
    { 'attr': 'nroEdificio',  'type': 'Number' },
    { 'attr': 'departamento', 'type': 'String' },
    { 'attr': 'codSitLegal',  'type': 'String' },
    { 'attr': 'coeficiente',  'type': 'Number' },
    { 'attr': 'codAlquila',   'type': 'String' }
  ];


  public options = {
    'entity': 'vwUF',
    'arrAttr': this.arrAttr,
    'arrControls': this.arrControls,
    'buttons': [
      { 'url': 'datos-uf', 'icon': 'mdi mdi-lead-pencil' }
    ]
  }


  constructor() { }

  ngOnInit() {
  }

}

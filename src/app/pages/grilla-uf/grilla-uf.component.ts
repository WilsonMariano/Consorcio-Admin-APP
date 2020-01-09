import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-grilla-uf',
  templateUrl: './grilla-uf.component.html'
})
export class GrillaUFComponent implements OnInit {
  
  // SEE grilla.component

  private arrControls = ['UF', 'Manzana', 'Adherente', 'Edificio', 'Departamento', 'Sit Legal', 'Coeficiente', 'Cod Alquila'];


  private arrAttr = [
    { 'attr': 'id',               'type': 'Number' },
    { 'attr': 'nroManzana',       'type': 'Number' },
    { 'attr': 'nroAdherente',     'type': 'Number' },
    { 'attr': 'nroEdificio',      'type': 'Number' },
    { 'attr': 'codDepartamento',  'type': 'String' },
    { 'attr': 'codSitLegal',      'type': 'String' },
    { 'attr': 'coeficiente',      'type': 'Number' },
    { 'attr': 'codAlquila',       'type': 'String' }
  ];


  public options = {
    'entity': 'vwUF',
    'arrAttr': this.arrAttr,
    'arrControls': this.arrControls,
    'buttons': [
      { 'url': 'home/datos-uf',   'icon': 'mdi mdi-lead-pencil' },
      { 'url': 'home/nuevo-pago', 'icon': 'mdi mdi-currency-usd' },
    ]
  }


  constructor() { }

  
  ngOnInit() {
  }

}

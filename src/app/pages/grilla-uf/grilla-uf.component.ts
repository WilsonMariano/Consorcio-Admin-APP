import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-grilla-uf',
  templateUrl: './grilla-uf.component.html'
})
export class GrillaUFComponent implements OnInit {
  
  // SEE grilla.component

  // private arrControls = ['UF', 'Manzana', 'Edificio', 'Departamento', 'Apellido', 'Nombre', 'Sit Legal', 'Coeficiente', 'Cod Alquila'];
  private arrControls = ['UF', 'Manzana', 'Edificio', 'Departamento', 'Apellido', 'Nombre'];


  private arrAttr = [
    { 'attr': 'nroUF',            'type': 'Number' },
    { 'attr': 'nroManzana',       'type': 'Number' },
    { 'attr': 'nroEdificio',      'type': 'Number' },
    { 'attr': 'departamento',     'type': 'String' },
    { 'attr': 'apellido',         'type': 'String' },
    { 'attr': 'nombre',           'type': 'String' }
    // { 'attr': 'sitLegal',         'type': 'String' },
    // { 'attr': 'coeficiente',      'type': 'Number' },
    // { 'attr': 'alquila',          'type': 'String' }
  ];


  public options = {
    'entity': 'vwUF',
    'arrAttr': this.arrAttr,
    'arrControls': this.arrControls,
    'buttons': [
      { 'url': 'home/datos-uf',   'icon': 'mdi mdi-lead-pencil' },
      { 'url': 'home/nuevo-pago', 'icon': 'mdi mdi-currency-usd' },
    ],
    'btnDetails': {
      'attr': [
        {
          'label': 'UF',
          'attr': 'nroUF'
        },
        {
          'label': 'Manzana',
          'attr': 'nroManzana'
        },
        {
          'label': 'Edificio',
          'attr': 'nroEdificio'
        },
        {
          'label': 'Departamento',
          'attr': 'departamento'
        },
        {
          'label': 'Apellido',
          'attr': 'apellido'
        },
        {
          'label': 'Nombre',
          'attr': 'nombre'
        },
        {
          'label': 'Sit. Legal',
          'attr': 'sitLegal'
        },
        {
          'label': 'Coeficiente',
          'attr': 'coeficiente'
        },
        {
          'label': 'Cod. Alquila',
          'attr': 'alquila'
        }
      ]
    }
  }


  constructor() { }

  
  ngOnInit() {
  }

}

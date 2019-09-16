import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-grilla-adherentes',
  templateUrl: './grilla-adherentes.component.html'
})
export class GrillaAdherentesComponent implements OnInit {
  

  public arrAttr = [
    {
      'attr': 'id',
      'type': 'Number'
    }, 
    {
      'attr': 'nroDocumento',
      'type': 'Number'
    },
    {
      'attr': 'apellido',
      'type': 'String'
    },
    {
      'attr': 'nombre',
      'type': 'String'
    },
    {
      'attr': 'telefono',
      'type': 'String'
    }, 
    {
      'attr': 'email',
      'type': 'email'
    }];

  public arrControls = ['Nro Adherente', 'Nro Documento', 'Apellido', 'Nombre', 'Teléfono', 'Email'];

  constructor() {}

  ngOnInit() {}
  

}

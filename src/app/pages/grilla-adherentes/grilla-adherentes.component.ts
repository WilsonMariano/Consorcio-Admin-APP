import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-grilla-adherentes',
  templateUrl: './grilla-adherentes.component.html'
})
export class GrillaAdherentesComponent implements OnInit {
  

  public arrAttr = ['id', 'nroDocumento', 'apellido', 'nombre', 'telefono', 'email'];
  public arrControls = ['Nro Adherente', 'Nro Documento', 'Apellido', 'Nombre', 'Teléfono', 'Email'];

  constructor() {}

  ngOnInit() {}
  

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute  } from '@angular/router';

import { Adherente } from 'src/app/class/class.index';
import { ValidatorsService } from '../../services/validators/validators.service';


@Component({
  selector: 'app-datos-adherente',
  templateUrl: './datos-adherente.component.html',
  styles: []
})
export class DatosAdherenteComponent implements OnInit {

  public forma: FormGroup;

  constructor(private activateRoute: ActivatedRoute, private _validators: ValidatorsService) { }


  ngOnInit() {
    

    this.forma = new FormGroup({
      'nroAdherente': new FormControl('', Validators.required),
      'nroDocumento': new FormControl('', Validators.required),
      'apellido': new FormControl('', Validators.required),
      'nombre': new FormControl('', Validators.required),
      'telefono': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, this._validators.emailValidator]),
    });



    // Recibo los parámetros de la ruta
    // Si el parametro que recibo es un id llamo al metodo para buscar el adherente
    this.activateRoute.params.subscribe(
      data => {
        if(data['id'] !== 'nuevo') 
          this.getAdherente(data['id']);
      });
  }


  
  public onSubmit() {
    let adherente = new Adherente();
    
    //TODO - Validar que el nro de Adherente no exista
    adherente.setNroAdherente(this.forma.get('nroAdherente').value);
    adherente.setNroDocumento(this.forma.get('nroDocumento').value);
    adherente.setApellido(this.forma.get('apellido').value);
    adherente.setNombre(this.forma.get('nombre').value);
    adherente.setTelefono(this.forma.get('telefono').value);
    adherente.setEmail(this.forma.get('email').value);

    console.log(adherente);
  }


  // Obtengo un adherente por ID
  public getAdherente(id: String) { 

  }

}

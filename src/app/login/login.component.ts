import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../class/class.index';
import { ValidatorsService, UsuarioService, AuthService } from '../services/service.index';
import { Router } from '@angular/router';

declare var init_plugins: Function;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  public forma: FormGroup;

  constructor( private _validators: ValidatorsService, private _usuario: UsuarioService, private router: Router, private _auth: AuthService ) { }

  ngOnInit() {

    // Inicializo plugins sidebar y corto spinner
    init_plugins();

    this.forma = new FormGroup({
      'email':    new FormControl( '', [ Validators.required, this._validators.emailValidator] ),
      'password': new FormControl( '', Validators.required )
    });

    console.log(this._auth.isLogued());
  }



  public onSubmit() {

    let usuario = new Usuario();
    usuario.setEmail(this.forma.get('email').value);
    usuario.setPassword(this.forma.get('password').value);

    this._usuario.login(usuario).subscribe(

      token => {
        
        localStorage.setItem("token", token);
        this.router.navigate(['/dashboard']);
      }
    )
  }

}

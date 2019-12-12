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
      'password': new FormControl( '1234', Validators.required ),
      'recordarme': new FormControl( false )
    });

    this.loadUserData();
  }

  public getField(field: string) {

    return this.forma.get(field).value;
  }



  public onSubmit() :void {

    if(this.getField('recordarme'))
      this.saveUserData();

    else
      this.clearUserData();

    let usuario = new Usuario();
    usuario.setEmail(this.getField('email'));
    usuario.setPassword(this.getField('password'));

    this._usuario.login(usuario).subscribe(

      token => {

        localStorage.setItem("token", token);
        this.router.navigate(['/home/dashboard']);
      }
    )
  }

  private loadUserData(): void {

    let email = localStorage.getItem('email');

    if(email != null) {

      this.forma.get('email').setValue(email);
      this.forma.get('recordarme').setValue(true);
    }
  }

  private saveUserData(): void {

    localStorage.setItem("email", this.getField('email'));
  }

  private clearUserData(): void  {

    localStorage.removeItem('email');
  }

}

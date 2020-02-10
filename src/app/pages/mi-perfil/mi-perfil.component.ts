import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonService, AuthService, FxGlobalsService } from 'src/app/services/service.index';
import { Usuario } from '../../class/class.index';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styles: []
})
export class MiPerfilComponent implements OnInit {

  public forma: FormGroup;

  constructor(
    public fb: FormBuilder,
    private _common: CommonService,
    private _auth: AuthService,
    private _fx: FxGlobalsService) { }

  ngOnInit() {

    this.forma = this.fb.group({
      'nombre': new FormControl('', Validators.required),
      'apellido': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required),
    });

    this.getUsuario();
  }

  private getUsuario(): void {

    this._common.getOne('usuarios', this._auth.getData()['id']).subscribe(
      data => {

        this.forma.get('nombre').setValue(data.nombre);
        this.forma.get('apellido').setValue(data.apellido);
        this.forma.get('email').setValue(data.email);
        this.forma.get('password').setValue(data.password);
      }
    );
  }

  public saveUsuario(): void {

    let usuario = new Usuario();
    usuario.setNombre(this.forma.get('nombre').value);
    usuario.setApellido(this.forma.get('apellido').value);
    usuario.setEmail(this.forma.get('email').value);
    usuario.setPassword(this.forma.get('password').value);
    usuario.setId(this._auth.getData()['id']);

    this._common.updateOne('usuarios',  usuario).subscribe(
      data => { 
        this._fx.showAlert('Mensaje', 'El perfil se ha actualizado satisfactoriamente!', 'success');
        this._auth.logOut();
    }
    );

  }

}

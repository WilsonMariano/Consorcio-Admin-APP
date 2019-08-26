import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(private _ajustes: SettingsService) { }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor( tema: string, link: any ) {

    this.aplicarCheck(link);
    this._ajustes.aplicarTema(tema);
  }

  aplicarCheck( link: any ) {
    let selectores: any = document.getElementsByClassName('selector');

    for( let ref of selectores ){
      ref.classList.remove('working');
    }

    link.classList.add('working');
  }

  colocarCheck(){
    let selectores: any = document.getElementsByClassName('selector');

    for( let ref of selectores ){
      if(ref.getAttribute('data-theme') == this._ajustes.ajustes.tema){
        ref.classList.add('working');
        break;
      }
    }
  }

}

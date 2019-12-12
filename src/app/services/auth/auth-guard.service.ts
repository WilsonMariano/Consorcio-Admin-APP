import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../service.index';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public _auth: AuthService, public router: Router) { }

  canActivate(): boolean {

    console.log(this._auth.isLogued());

    if(!this._auth.isLogued()) {

      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}

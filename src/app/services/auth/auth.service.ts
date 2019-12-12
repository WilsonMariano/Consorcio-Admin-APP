import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
  })
  export class AuthService {

    constructor( private helper : JwtHelperService, private router: Router ) { }


    public logOut()
    {
      try {

        localStorage.removeItem('token');
        this.router.navigate(['/login']);

      } catch (error) {

        return false;
      }
    }

    public getToken ()
    {
      try {

        return this.helper.decodeToken(localStorage.getItem('token'));

      } catch (error) {

        return undefined;
      }
    }

    public isLogued() {

      try {
  
        return !this.helper.isTokenExpired();

      } catch (error) {

        return false;
      }
    }

    public getData() {

      return this.getToken().data;
    }




  }
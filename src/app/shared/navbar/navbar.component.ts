import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/service.index';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(public _auth: AuthService) { }

  ngOnInit() {
  }

  public logOut(): void {

    this._auth.logOut();

  }

}

import { Component, OnInit } from '@angular/core';

declare var init_plugins: Function;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // Inicializo plugins de sidebar
    init_plugins();
  }

}

import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/service.index';

declare var init_plugins: Function;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor(private _settings: SettingsService) { }

  ngOnInit() {

    // Inicializo plugins de sidebar
    init_plugins();
  }

}

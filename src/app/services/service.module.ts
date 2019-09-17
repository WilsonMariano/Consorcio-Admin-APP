import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  SettingsService, 
  SidebarService, 
  CommonService, 
  DiccionarioService,
  ConceptosGastosService, 
  FxGlobalsService } from './service.index';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    SettingsService, 
    SidebarService,
    CommonService,
    DiccionarioService,
    ConceptosGastosService,
    FxGlobalsService
  ]
})
export class ServiceModule { }

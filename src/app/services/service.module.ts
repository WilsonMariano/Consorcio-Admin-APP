import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService, SidebarService, CommonService, ConceptosGastosService, FxGlobalsService } from './service.index';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    SettingsService, 
    SidebarService,
    CommonService,
    ConceptosGastosService,
    FxGlobalsService
  ]
})
export class ServiceModule { }

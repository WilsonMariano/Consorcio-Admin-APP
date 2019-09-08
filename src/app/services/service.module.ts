import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService, SidebarService, CommonService, AdherenteService, FxGlobalsService } from './service.index';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    SettingsService, 
    SidebarService,
    CommonService,
    AdherenteService,
    FxGlobalsService
  ]
})
export class ServiceModule { }

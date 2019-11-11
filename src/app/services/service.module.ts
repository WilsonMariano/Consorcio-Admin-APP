import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { 
  SettingsService, 
  SidebarService, 
  CommonService, 
  DiccionarioService,
  UsuarioService,
  ConceptosGastosService, 
  LiquidacionGlobalService,
  FxGlobalsService,
  AuthService } from './service.index';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthModule
  ],
  providers: [
    SettingsService, 
    SidebarService,
    CommonService,
    DiccionarioService,
    ConceptosGastosService,
    UsuarioService,
    LiquidacionGlobalService,
    FxGlobalsService,
    AuthService
  ]
})
export class ServiceModule { }

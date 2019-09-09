// Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';  
import { HttpClientModule } from '@angular/common/http'; 

import { PagesModule } from './pages/pages.module';
import { ServiceModule } from './services/service.module';
import { ComponentsModule } from './components/components.module';


// Rutas
import { APP_ROUTES } from './app.routes';


// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTES,
    PagesModule,
    ComponentsModule
  ],
  providers: [
    ServiceModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';  
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 

// Modulos
import { PagesModule } from './pages/pages.module';
import { ServiceModule } from './services/service.module';
import { ComponentsModule } from './components/components.module';

// Clases
import { HttpErrorInterceptor } from './class/class.index';


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
    ServiceModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

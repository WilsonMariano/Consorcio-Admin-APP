import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Rutas
import { PAGES_ROUTES } from './pages.routes';

// Modulos
import { SharedModule } from '../shared/shared.module';
import { NgxSpinnerModule } from "ngx-spinner";
// import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

// Servicios
import { CommonService } from '../services/service.index';

// Directivas
import { OnlyNumbersDirective } from '../directives/only-numbers.directive';

// Componentes
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { GrillaAdherentesComponent } from './grilla-adherentes/grilla-adherentes.component';
import { DatosAdherenteComponent } from './datos-adherente/datos-adherente.component';




@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        AccountSettingsComponent,
        GrillaAdherentesComponent,
        DatosAdherenteComponent,
        OnlyNumbersDirective
    ],
    exports: [
        DashboardComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        NgxSpinnerModule,
        PAGES_ROUTES,
        SharedModule
    ],
    providers: [CommonService]
})
export class PagesModule { }

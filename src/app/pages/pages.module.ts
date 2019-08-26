import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Rutas
import { PAGES_ROUTES } from './pages.routes';

// Modulos
import { SharedModule } from '../shared/shared.module';

// Componentes
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { AdherentesComponent } from './adherentes/adherentes.component';




@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        AccountSettingsComponent,
        AdherentesComponent
    ],
    exports: [
        DashboardComponent
    ],
    imports: [
        FormsModule,
        PAGES_ROUTES,
        SharedModule
    ]
})
export class PagesModule { }

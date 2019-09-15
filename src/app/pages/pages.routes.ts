import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { GrillaAdherentesComponent } from './grilla-adherentes/grilla-adherentes.component';
import { DatosAdherenteComponent } from './datos-adherente/datos-adherente.component';
import { GrillaUFComponent } from './grilla-uf/grilla-uf.component';



const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard',            component: DashboardComponent,            data: { titulo: 'Dashboard' }        },
            { path: 'grilla-adherentes',    component: GrillaAdherentesComponent,     data: { titulo: 'Grilla de adherentes' } },
            { path: 'grilla-uf',            component: GrillaUFComponent,             data: { titulo: 'Grilla de UF' } },
            { path: 'account-settings',     component: AccountSettingsComponent,      data: { titulo: 'Ajustes del tema' } },
            { path: 'datos-adherente/:id',  component: DatosAdherenteComponent,       data: { titulo: 'Datos del adherente' } },
            { path: '',                     redirectTo: '/dashboard',                 pathMatch: 'full' }
        ]
    }
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
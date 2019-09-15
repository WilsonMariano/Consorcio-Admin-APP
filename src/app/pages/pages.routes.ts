import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { GrillaAdherentesComponent } from './grilla-adherentes/grilla-adherentes.component';
import { GrillaUFComponent } from './grilla-uf/grilla-uf.component';
import { DatosAdherenteComponent } from './datos-adherente/datos-adherente.component';
import { DatosUFComponent } from './datos-uf/datos-uf.component';
import { GrillaExpensasComponent } from './grilla-expensas/grilla-expensas.component';



const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard',            component: DashboardComponent,            data: { titulo: 'Dashboard' }        },
            { path: 'grilla-adherentes',    component: GrillaAdherentesComponent,     data: { titulo: 'Grilla de adherentes' } },
            { path: 'grilla-uf',            component: GrillaUFComponent,             data: { titulo: 'Grilla de UF' } },
            { path: 'grilla-expensas',      component: GrillaExpensasComponent,       data: { titulo: 'Grilla de expensas' } },
            { path: 'datos-adherente/:id',  component: DatosAdherenteComponent,       data: { titulo: 'Datos del adherente' } },
            { path: 'datos-uf/:id',         component: DatosUFComponent,              data: { titulo: 'Datos de la UF' } },
            { path: 'account-settings',     component: AccountSettingsComponent,      data: { titulo: 'Ajustes del tema' } },
            { path: '',                     redirectTo: '/dashboard',                 pathMatch: 'full' }
        ]
    }
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
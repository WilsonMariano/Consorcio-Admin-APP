import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { AdherentesComponent } from './adherentes/adherentes.component';



const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard',         component: DashboardComponent,            data: { titulo: 'Dashboard' }        },
            { path: 'adherentes',        component: AdherentesComponent,           data: { titulo: 'Grilla de adherentes' } },
            { path: 'account-settings',  component: AccountSettingsComponent,      data: { titulo: 'Ajustes del tema' } },
            { path: '',                  redirectTo: '/dashboard',                 pathMatch: 'full' }
        ]
    }
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
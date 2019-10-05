import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { GrillaAdherentesComponent } from './grilla-adherentes/grilla-adherentes.component';
import { GrillaUFComponent } from './grilla-uf/grilla-uf.component';
import { DatosAdherenteComponent } from './datos-adherente/datos-adherente.component';
import { DatosUFComponent } from './datos-uf/datos-uf.component';
import { DatosExpensaComponent } from './datos-expensa/datos-expensa.component';
import { GrillaExpensasComponent } from './grilla-expensas/grilla-expensas.component';
import { GrillaConceptosGastosComponent } from './grilla-conceptos-gastos/grilla-conceptos-gastos.component';
import { DatosConceptosGastosComponent } from './datos-conceptos-gastos/datos-conceptos-gastos.component';
import { GrillaCtasCtesComponent } from './grilla-ctas-ctes/grilla-ctas-ctes.component';
import { CtaCteComponent } from './cta-cte/cta-cte.component';
import { GastosExpensaComponent } from './gastos-expensa/gastos-expensa.component';



const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard',                    component: DashboardComponent,                data: { titulo: 'Dashboard' }        },
            { path: 'grilla-adherentes',            component: GrillaAdherentesComponent,         data: { titulo: 'Grilla de adherentes' } },
            { path: 'grilla-uf',                    component: GrillaUFComponent,                 data: { titulo: 'Grilla de UF' } },
            { path: 'grilla-expensas',              component: GrillaExpensasComponent,           data: { titulo: 'Grilla de expensas' } },
            { path: 'grilla-conceptos-gastos',      component: GrillaConceptosGastosComponent,    data: { titulo: 'Grilla de conceptos' } },
            { path: 'grilla-ctas-ctes',             component: GrillaCtasCtesComponent,           data: { titulo: 'Grilla de ctas. ctes.' } },
            { path: 'cta-cte/:id',                  component: CtaCteComponent,                   data: { titulo: 'Cuenta corriente UF' } },
            { path: 'datos-adherente/:id',          component: DatosAdherenteComponent,           data: { titulo: 'Datos del adherente' } },
            { path: 'datos-uf/:id',                 component: DatosUFComponent,                  data: { titulo: 'Datos de la UF' } },
            { path: 'datos-conceptos-gastos/:id',   component: DatosConceptosGastosComponent,     data: { titulo: 'Conceptos de Gastos' } },
            { path: 'datos-expensa/:id',            component: DatosExpensaComponent,             data: { titulo: 'Datos de la expensa' } },
            { path: 'gastos-expensa/:id',           component: GastosExpensaComponent,            data: { titulo: 'Carga de gastos' } },
            { path: 'account-settings',             component: AccountSettingsComponent,          data: { titulo: 'Ajustes del tema' } },
            { path: '',                             redirectTo: '/dashboard',                     pathMatch: 'full' }
        ]
    }
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
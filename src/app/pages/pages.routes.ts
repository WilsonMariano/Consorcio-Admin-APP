import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

import { GrillaAdherentesComponent } from './grilla-adherentes/grilla-adherentes.component';
import { GrillaUFComponent } from './grilla-uf/grilla-uf.component';
import { GrillaLiquidacionesGlobalesComponent } from './grilla-liquidaciones-globales/grilla-liquidaciones-globales.component';
import { GrillaConceptosGastosComponent } from './grilla-conceptos-gastos/grilla-conceptos-gastos.component';
import { GrillaCtasCtesComponent } from './grilla-ctas-ctes/grilla-ctas-ctes.component';
import { GrillaCtaCteComponent } from './grilla-cta-cte/grilla-cta-cte.component';
import { GrillaGastosLiquidacionComponent } from './grilla-gastos-liquidacion/grilla-gastos-liquidacion.component';

import { DatosAdherenteComponent } from './datos-adherente/datos-adherente.component';
import { DatosUFComponent } from './datos-uf/datos-uf.component';
import { DatosLiquidacionesGlobalesComponent } from './datos-liquidaciones-globales/datos-liquidaciones-globales.component';
import { DatosConceptosGastosComponent } from './datos-conceptos-gastos/datos-conceptos-gastos.component';
import { DatosGastosExpensaComponent } from './datos-gastos-expensa/datos-gastos-expensa.component';
import { DatosGastosExpensasCsvComponent } from './datos-gastos-expensas-csv/datos-gastos-expensas-csv.component';



const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard',                    component: DashboardComponent,                      data: { titulo: 'Dashboard' }        },
            { path: 'grilla-adherentes',            component: GrillaAdherentesComponent,               data: { titulo: 'Grilla de adherentes' } },
            { path: 'grilla-uf',                    component: GrillaUFComponent,                       data: { titulo: 'Grilla de UF' } },
            { path: 'grilla-expensas',              component: GrillaLiquidacionesGlobalesComponent,    data: { titulo: 'Grilla de liquidaciones' } },
            { path: 'grilla-conceptos-gastos',      component: GrillaConceptosGastosComponent,          data: { titulo: 'Grilla de conceptos' } },
            { path: 'grilla-ctas-ctes',             component: GrillaCtasCtesComponent,                 data: { titulo: 'Grilla de ctas. ctes.' } },
            { path: 'grilla-gastos-liquidacion/:id',component: GrillaGastosLiquidacionComponent,        data: { titulo: 'Grilla de gastos liquidaciones' } },
            { path: 'cta-cte/:id',                  component: GrillaCtaCteComponent,                   data: { titulo: 'Cuenta corriente UF' } },
            { path: 'datos-adherente/:id',          component: DatosAdherenteComponent,                 data: { titulo: 'Datos del adherente' } },
            { path: 'datos-uf/:id',                 component: DatosUFComponent,                        data: { titulo: 'Datos de la UF' } },
            { path: 'datos-conceptos-gastos/:id',   component: DatosConceptosGastosComponent,           data: { titulo: 'Conceptos de Gastos' } },
            { path: 'datos-expensa/:id',            component: DatosLiquidacionesGlobalesComponent,     data: { titulo: 'Datos de la liquidación' } },
            { path: 'gastos-expensa/:id',           component: DatosGastosExpensaComponent,             data: { titulo: 'Carga de gastos' } },
            { path: 'gastos-expensa-csv/:id',       component: DatosGastosExpensasCsvComponent,         data: { titulo: 'Carga csv de gastos' } },
            { path: 'account-settings',             component: AccountSettingsComponent,                data: { titulo: 'Ajustes del tema' } },
            { path: '',                             redirectTo: '/dashboard',                           pathMatch: 'full' }
        ]
    }
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService as AuthGuard } from '../services/service.index';

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
import { NuevoPagoComponent } from './nuevo-pago/nuevo-pago.component';
import { NotasCreditoDebitoComponent } from './notas-credito-debito/notas-credito-debito.component';



const pagesRoutes: Routes = [
    {
        path: 'home',
        component: PagesComponent,
        children: [
            { path: 'dashboard',                    component: DashboardComponent,                      canActivate: [AuthGuard],   data: { titulo: 'Dashboard' }        },
            { path: 'grilla-adherentes',            component: GrillaAdherentesComponent,               canActivate: [AuthGuard],   data: { titulo: 'Grilla de adherentes' } },
            { path: 'grilla-uf',                    component: GrillaUFComponent,                       canActivate: [AuthGuard],   data: { titulo: 'Grilla de UF' } },
            { path: 'grilla-expensas',              component: GrillaLiquidacionesGlobalesComponent,    canActivate: [AuthGuard],   data: { titulo: 'Grilla de liquidaciones' } },
            { path: 'grilla-conceptos-gastos',      component: GrillaConceptosGastosComponent,          canActivate: [AuthGuard],   data: { titulo: 'Grilla de conceptos' } },
            { path: 'grilla-ctas-ctes',             component: GrillaCtasCtesComponent,                 canActivate: [AuthGuard],   data: { titulo: 'Grilla de ctas. ctes.' } },
            { path: 'notas-credito-debito/:id',     component: NotasCreditoDebitoComponent,             canActivate: [AuthGuard],   data: { titulo: 'Nota de crédito / débito' } },
            { path: 'grilla-gastos-liquidacion/:id',component: GrillaGastosLiquidacionComponent,        canActivate: [AuthGuard],   data: { titulo: 'Grilla de gastos liquidaciones' } },
            { path: 'cta-cte/:id',                  component: GrillaCtaCteComponent,                   canActivate: [AuthGuard],   data: { titulo: 'Cuenta corriente UF' } },
            { path: 'datos-adherente/:id',          component: DatosAdherenteComponent,                 canActivate: [AuthGuard],   data: { titulo: 'Datos del adherente' } },
            { path: 'datos-uf/:id',                 component: DatosUFComponent,                        canActivate: [AuthGuard],   data: { titulo: 'Datos de la UF' } },
            { path: 'datos-conceptos-gastos/:id',   component: DatosConceptosGastosComponent,           canActivate: [AuthGuard],   data: { titulo: 'Conceptos de Gastos' } },
            { path: 'datos-expensa/:id',            component: DatosLiquidacionesGlobalesComponent,     canActivate: [AuthGuard],   data: { titulo: 'Datos de la liquidación' } },
            { path: 'gastos-expensa/:id',           component: DatosGastosExpensaComponent,             canActivate: [AuthGuard],   data: { titulo: 'Carga de gastos' } },
            { path: 'gastos-expensa-csv/:id',       component: DatosGastosExpensasCsvComponent,         canActivate: [AuthGuard],   data: { titulo: 'Carga csv de gastos' } },
            { path: 'nuevo-pago/:id',               component: NuevoPagoComponent,                      canActivate: [AuthGuard],   data: { titulo: 'Nuevo pago' } },
            { path: 'account-settings',             component: AccountSettingsComponent,                canActivate: [AuthGuard],   data: { titulo: 'Ajustes del tema' } },
            { path: '',                             redirectTo: '/dashboard',                           canActivate: [AuthGuard],   pathMatch: 'full' }
        ]
    }
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
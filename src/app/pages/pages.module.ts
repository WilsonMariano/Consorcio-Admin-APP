import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Rutas
import { PAGES_ROUTES } from './pages.routes';

// Modulos
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { NgxSpinnerModule } from "ngx-spinner";


// Servicios
import { CommonService } from '../services/service.index';

// Directivas
import { OnlyNumbersDirective } from '../directives/only-numbers.directive';

// Componentes
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

import { GrillaAdherentesComponent } from './grilla-adherentes/grilla-adherentes.component';
import { GrillaUFComponent } from './grilla-uf/grilla-uf.component';
import { GrillaLiquidacionesGlobalesComponent } from './grilla-liquidaciones-globales/grilla-liquidaciones-globales.component';
import { GrillaConceptosGastosComponent } from './grilla-conceptos-gastos/grilla-conceptos-gastos.component';
import { GrillaGastosLiquidacionComponent } from './grilla-gastos-liquidacion/grilla-gastos-liquidacion.component';
import { GrillaCtasCtesComponent } from './grilla-ctas-ctes/grilla-ctas-ctes.component';
import { GrillaCtaCteComponent } from './grilla-cta-cte/grilla-cta-cte.component';

import { DatosLiquidacionesGlobalesComponent } from './datos-liquidaciones-globales/datos-liquidaciones-globales.component';
import { DatosAdherenteComponent } from './datos-adherente/datos-adherente.component';
import { DatosConceptosGastosComponent } from './datos-conceptos-gastos/datos-conceptos-gastos.component';
import { DatosUFComponent } from './datos-uf/datos-uf.component';
import { DatosGastosExpensaComponent } from './datos-gastos-expensa/datos-gastos-expensa.component';
import { ModalConceptosComponent } from '../modals/modal-conceptos/modal-conceptos.component';
import { DatosGastosExpensasCsvComponent } from './datos-gastos-expensas-csv/datos-gastos-expensas-csv.component';




@NgModule({
    declarations: [
        GrillaAdherentesComponent,
        GrillaLiquidacionesGlobalesComponent,
        GrillaConceptosGastosComponent,
        GrillaUFComponent,
        GrillaCtasCtesComponent,
        GrillaGastosLiquidacionComponent,
        GrillaCtaCteComponent,
        DatosAdherenteComponent,
        DatosUFComponent,
        DatosConceptosGastosComponent,
        DatosLiquidacionesGlobalesComponent,
        DatosGastosExpensaComponent,
        PagesComponent,
        DashboardComponent,
        AccountSettingsComponent,
        OnlyNumbersDirective,
        ModalConceptosComponent,
        DatosGastosExpensasCsvComponent
    ],
    exports: [
        DashboardComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        PAGES_ROUTES,
        SharedModule,
        ComponentsModule,
        NgxSpinnerModule
    ],
    providers: [CommonService]
})
export class PagesModule { }

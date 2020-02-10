import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from "ngx-spinner";
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SpinnerComponent } from './spinner/spinner.component';
import { GrillaComponent } from './grilla/grilla.component';
import { ModalDetalleGrillaComponent } from '../modals/modal-detalle-grilla/modal-detalle-grilla.component';




@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgxSpinnerModule
    ],
    declarations: [
        SpinnerComponent,
        GrillaComponent,
        ModalDetalleGrillaComponent
    ],
    exports: [
        SpinnerComponent,
        GrillaComponent
    ]
})
export class ComponentsModule { }

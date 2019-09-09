import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from "ngx-spinner";

import { SpinnerComponent } from './spinner/spinner.component';
import { GrillaComponent } from './grilla/grilla.component';




@NgModule({
    imports: [
        CommonModule,
        NgxSpinnerModule
    ],
    declarations: [
        SpinnerComponent,
        GrillaComponent
    ],
    exports: [
        SpinnerComponent,
        GrillaComponent
    ]
})
export class ComponentsModule { }

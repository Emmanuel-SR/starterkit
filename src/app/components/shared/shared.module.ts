import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { LoadingComponent } from './loading/loading.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule
    ],
    declarations: [
        LoadingComponent
    ],
    exports: [
        LoadingComponent
    ],
    entryComponents: [
        LoadingComponent
    ]
})
export class SharedModule { }

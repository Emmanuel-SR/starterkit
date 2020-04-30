import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SupportComponent } from './support.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { EmpresaService } from 'src/app/services/empresa.service';
import { HttpClientModule } from '@angular/common/http';
import { EmpresaDialogComponent } from './empresa/components/empresa-dialog/empresa-dialog.component';

@NgModule({
  declarations: [
    SupportComponent,
    EmpresaComponent,
    EmployeeComponent,
    ProyectoComponent,
    EmpresaDialogComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EmpresaService],
  entryComponents: [
    EmpresaDialogComponent
  ]
})
export class SupportModule { }

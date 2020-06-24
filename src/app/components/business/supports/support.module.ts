import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from 'src/app/modules/material/material.module';
import { AppRoutingModule } from 'src/app/modules/route/routing.module';
import { SupportComponent } from './support.component';
import { Utility } from 'src/app/utils/helper/utility';
import { UserService } from 'src/app/services/user.service';
import { UserComponent } from './user/user.component';
import { UserDialogComponent } from './user/components/user-dialog/user-dialog.component';
import { RoleService } from 'src/app/services/role.service';
import { VehicleComponent } from './vehicle/vehicle.component';
import { VehicleDialogComponent } from './vehicle/components/vehicle-dialog.component.ts/vehicle-dialog.component';
import { ClientComponent } from './client/client.component';
import { ClientService } from 'src/app/services/client.service';
import { VehicleService } from 'src/app/services/vehicle.service';
import { ClientDialogComponent } from './client/components/client-dialog.component';
import { IdentityDocumentService } from 'src/app/services/identity-document.service';

@NgModule({
  declarations: [
    SupportComponent,
    UserComponent,
    UserDialogComponent,
    VehicleComponent,
    VehicleDialogComponent,
    ClientComponent,
    ClientDialogComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    SupportComponent
  ],
  providers: [UserService, RoleService, Utility, VehicleService, ClientService, IdentityDocumentService],
  entryComponents: [
    UserDialogComponent,
    VehicleDialogComponent,
    ClientDialogComponent
  ]
})
export class SupportModule { }

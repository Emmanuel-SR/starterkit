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


@NgModule({
  declarations: [
    SupportComponent,
    UserComponent,
    UserDialogComponent
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
  providers: [UserService, RoleService, Utility],
  entryComponents: [
    UserDialogComponent
  ]
})
export class SupportModule { }

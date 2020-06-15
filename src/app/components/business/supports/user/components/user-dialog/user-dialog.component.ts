import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

import { IElementTypeModel } from 'src/app/models/element-type.model';
import { ActionsEnum } from 'src/app/shared/actions.enum';
import { IUserModel } from 'src/app/models/user.model';
import { IRoleModel } from 'src/app/models/role.model';


@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css']
})
export class UserDialogComponent implements OnInit {

  title: string = 'Editar';
  user: IUserModel;
  isView: boolean;

  roleList: IRoleModel[]

  constructor(
    public dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IElementTypeModel,
  ) { }

  ngOnInit(): void {
    this.user = this.data.element;
    this.roleList = this.data.lists.roles;
    this.setTitle(this.data.type);
  }

  compareFn(r1: IRoleModel, r2: IRoleModel): boolean {
    return r1 && r2 ? r1.id === r2.id : r1 === r2;
  }

  setTitle(type: string) {
    if (type === ActionsEnum.EDIT) {
      this.title = "Editar";
    } else if (type === ActionsEnum.NEW) {
      this.title = 'Nuevo';
    } else if (type === ActionsEnum.VIEW) {
      this.title = 'Vista de';
    }
    this.isView = type === ActionsEnum.VIEW;
  }

  cancel(): void {
    this.dialogRef.close();
  }

  accept() {

  }

}

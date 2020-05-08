import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { IElementTypeModel } from 'src/app/models/element-type.model';
import { ActionsEnum } from 'src/app/shared/actions.enum';
import { UserModel } from 'src/app/models/user.model';


@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css']
})
export class UserDialogComponent implements OnInit {

  title: string = 'Editar';
  user: UserModel;
  isView: boolean;

  identityDocuments: any[];

  constructor(
    public dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IElementTypeModel,
  ) { }

  ngOnInit(): void {
    this.user = this.data.element;
    this.identityDocuments = this.data.lists.identityDocuments;
    this.setTitle(this.data.type);
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

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { IElementTypeModel } from 'src/app/shared/models/element-type.model';
import { ActionsEnum } from 'src/app/shared/enums/actions.enum';
import { IClientModel } from 'src/app/models/client.model';
import { IIdentityDocumentModel } from 'src/app/models/identity-documents.model';


@Component({
  selector: 'app-client-dialog',
  templateUrl: './client-dialog.component.html',
  styleUrls: ['./client-dialog.component.css']
})
export class ClientDialogComponent implements OnInit {

  title: string = 'Editar';
  client: IClientModel;
  isView: boolean;
  documents: IIdentityDocumentModel[];

  constructor(
    public dialogRef: MatDialogRef<ClientDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IElementTypeModel,
  ) { }

  public ngOnInit(): void {
    this.client = this.data.element;
    this.documents = this.data.lists.documents;
    this.setTitle(this.data.type);
  }

  public setTitle(type: string) {
    if (type === ActionsEnum.EDIT) {
      this.title = "Editar";
    } else if (type === ActionsEnum.NEW) {
      this.title = 'Nuevo';
    } else if (type === ActionsEnum.VIEW) {
      this.title = 'Vista de';
    }
    this.isView = type === ActionsEnum.VIEW;
  }

  public cancel(): void {
    this.dialogRef.close();
  }

  public accept(): void {
    
  }
  
}

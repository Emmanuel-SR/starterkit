import { Component, OnInit, Inject } from '@angular/core';
import { IEmpresaModel } from 'src/app/models/empresa.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IElementTypeModel } from 'src/app/models/element-type.model';
import { ActionsEnum } from 'src/app/shared/actions.enum';

@Component({
  selector: 'app-empresa-dialog',
  templateUrl: './empresa-dialog.component.html',
  styleUrls: ['./empresa-dialog.component.css']
})
export class EmpresaDialogComponent implements OnInit {

  title: string = 'Editar';
  empresa: IEmpresaModel;
  isView: boolean;

  constructor(
    public dialogRef: MatDialogRef<EmpresaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IElementTypeModel,
  ) { }

  ngOnInit(): void {
    this.empresa = this.data.element;
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

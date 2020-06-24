import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { IElementTypeModel } from 'src/app/shared/models/element-type.model';
import { ActionsEnum } from 'src/app/shared/enums/actions.enum';
import { IVehicleModel } from 'src/app/models/vehicle.model';


@Component({
  selector: 'app-vehicle-dialog',
  templateUrl: './vehicle-dialog.component.html',
  styleUrls: ['./vehicle-dialog.component.css']
})
export class VehicleDialogComponent implements OnInit {

  title: string = 'Editar';
  vehicle: IVehicleModel;
  isView: boolean;

  constructor(
    public dialogRef: MatDialogRef<VehicleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IElementTypeModel,
  ) { }

  ngOnInit(): void {
    this.vehicle = this.data.element;
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

  accept(): void {
    
  }
  
}

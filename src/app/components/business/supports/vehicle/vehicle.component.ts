import { Component, OnInit, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IVehicleModel } from 'src/app/models/vehicle.model';
import { ITableColumnModel } from 'src/app/shared/models/table-column.model';
import { Utility } from 'src/app/utils/helper/utility';
import { MatDialog } from '@angular/material/dialog';

import { VehicleDialogComponent } from './components/vehicle-dialog.component.ts/vehicle-dialog.component';
import { ActionPerformService } from 'src/app/shared/services/action-perform.service';
import { ActionsEnum } from 'src/app/shared/enums/actions.enum';
import { CrudService } from 'src/app/shared/services/crud.service';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
    selector: 'app-vehicle',
    templateUrl: './vehicle.component.html',
    styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent extends ActionPerformService<IVehicleModel, number> implements OnInit {

    tableColumns: ITableColumnModel[];
    displayedColumns: string[] = [];
    pagination = [1, 10, 25, 100];
    vehicles: IVehicleModel[];

    datasource: MatTableDataSource<IVehicleModel>;
    pageIndex: number;
    pageSize: number;
    length: number;

    constructor(private vehicleService: VehicleService, public utilityService: Utility, public dialog: MatDialog) {
        super(dialog, VehicleDialogComponent);
    }

    ngOnInit(): void {
        this.loadTableColumns();
        this.getServerData(null);
    }

    loadTableColumns(): void {
        this.tableColumns = [
            {
                displayedColumn: 'id',
                titleColumn: 'Id'
            },
            {
                displayedColumn: 'licensePlate',
                titleColumn: 'Placa'
            },
            {
                displayedColumn: 'model',
                titleColumn: 'Modelo'
            },
            {
                displayedColumn: 'brand',
                titleColumn: 'Marca'
            },
            {
                displayedColumn: 'active',
                titleColumn: 'Activo'
            }
        ];

        this.tableColumns.forEach(element => {
            this.displayedColumns.push(element.displayedColumn);
        });

        this.displayedColumns.push('btnAction');
    }

    newVehicle(): void {
        this.actionPerformed(ActionsEnum.NEW, {} as IVehicleModel);
    }

    viewVehicleSelected(element: IVehicleModel): void {
        this.actionPerformed(ActionsEnum.VIEW, element);
    }

    editVehicleSelected(element: IVehicleModel): void {
        this.actionPerformed(ActionsEnum.EDIT, element);
    }

    public getServerData(event?: PageEvent): PageEvent {

        this.vehicleService.getPage(event).subscribe(response => {
            this.datasource = new MatTableDataSource<IVehicleModel>(response.data)
            this.pageIndex = response.pageIndex;
            this.pageSize = response.pageSize;
            this.length = response.length;
        });

        return event;
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.datasource.filter = filterValue.trim().toLowerCase();
    }

    getService(): CrudService<IVehicleModel, number> {
        return this.vehicleService;
    }

}
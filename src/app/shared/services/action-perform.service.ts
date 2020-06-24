import { IElementTypeModel } from '../models/element-type.model';
import { MatDialog } from '@angular/material/dialog';
import { ActionsEnum } from '../enums/actions.enum';
import { PageEvent } from '@angular/material/paginator';
import { CrudService } from './crud.service';

export abstract class ActionPerformService<M, K> {

    public pageEvent: PageEvent;

    constructor(public dialog: MatDialog, protected templateRef: any) { }

    actionPerformed(type: string, element: any) {
        const data: IElementTypeModel = {
            element,
            type
        };
        this.openDialog(data);
    }

    openDialog(data: IElementTypeModel): void {

        const dialogRef = this.dialog.open(this.templateRef, {
            width: "400px",
            data,
        });

        dialogRef.afterClosed().subscribe((model: any) => {
            if (!model) return;

            if (data.type === ActionsEnum.EDIT) {
                this.getService().update(model).subscribe();
            } else if (data.type === ActionsEnum.NEW) {
                this.getService().insert(model).subscribe(() => {
                    this.getServerData(this.pageEvent);
                });
            }
        });
    };

    protected abstract getService(): CrudService<M, K>;

    public abstract getServerData(event?: PageEvent): PageEvent;

}
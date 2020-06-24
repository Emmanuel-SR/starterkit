import { OnInit, Component } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Utility } from 'src/app/utils/helper/utility';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IClientModel } from 'src/app/models/client.model';
import { ITableColumnModel } from 'src/app/shared/models/table-column.model';
import { ActionsEnum } from 'src/app/shared/enums/actions.enum';
import { ActionPerformService } from 'src/app/shared/services/action-perform.service';
import { CrudService } from 'src/app/shared/services/crud.service';
import { ClientDialogComponent } from './components/client-dialog.component';
import { IdentityDocumentService } from 'src/app/services/identity-document.service';
import { IIdentityDocumentModel } from 'src/app/models/identity-documents.model';
import { IElementTypeModel } from 'src/app/shared/models/element-type.model';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent extends ActionPerformService<IClientModel, number> implements OnInit {

  tableColumns: ITableColumnModel[];
  displayedColumns: string[] = [];
  pagination = [1, 10, 25, 100];
  vehicles: IClientModel[];
  documents: IIdentityDocumentModel[];

  datasource: MatTableDataSource<IClientModel>;
  pageIndex: number;
  pageSize: number;
  length: number;

  constructor(private clientService: ClientService, private documentService: IdentityDocumentService, public utilityService: Utility, public dialog: MatDialog) {
    super(dialog, ClientDialogComponent);
  }

  ngOnInit(): void {
    this.loadDocuments();
    this.loadTableColumns();
    this.getServerData(null);
  }

  loadDocuments() {
    this.documentService.getAll().subscribe((data) => {
      this.documents = data;
    });
  }

  loadTableColumns(): void {
    this.tableColumns = [
      {
        displayedColumn: 'id',
        titleColumn: 'Id'
      },
      {
        displayedColumn: 'description',
        titleColumn: 'Description'
      },
      {
        displayedColumn: 'identityNumber',
        titleColumn: 'Numero Documento'
      },
      {
        displayedColumn: 'identityDocument.name',
        titleColumn: 'Documento'
      },
      {
        displayedColumn: 'phone',
        titleColumn: 'Telefono'
      },
      {
        displayedColumn: 'address',
        titleColumn: 'Direccion'
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

  newClient(): void {
    this.actionPerformed(ActionsEnum.NEW, { identityDocument: {} } as IClientModel);
  }

  viewClientSelected(element: IClientModel): void {
    this.actionPerformed(ActionsEnum.VIEW, element);
  }

  editClientSelected(element: IClientModel): void {
    this.actionPerformed(ActionsEnum.EDIT, element);
  }

  actionPerformed(type: string, element: any) {
    const data: IElementTypeModel = {
      element,
      type,
      lists: {
        documents: this.documents
      }
    };
    this.openDialog(data);
  }

  public getServerData(event?: PageEvent): PageEvent {

    this.clientService.getPage(event).subscribe(response => {
      this.datasource = new MatTableDataSource<IClientModel>(response.data)
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

  getService(): CrudService<IClientModel, number> {
    return this.clientService;
  }

}
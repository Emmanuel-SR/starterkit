import { Component, OnInit, ViewChild } from '@angular/core';
import { ITableColumnModel } from 'src/app/models/table-column.model';
import { MatTableDataSource } from '@angular/material/table';
import { IEmpresaModel } from 'src/app/models/empresa.model';
import { MatPaginator } from '@angular/material/paginator';
import { EmpresaService } from 'src/app/services/empresa.service';
import { MatDialog } from '@angular/material/dialog';
import { EmpresaDialogComponent } from './components/empresa-dialog/empresa-dialog.component';
import { IElementTypeModel } from 'src/app/models/element-type.model';
import { ActionsEnum } from 'src/app/shared/actions.enum';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  dataSource: MatTableDataSource<IEmpresaModel>;
  tableColumns: ITableColumnModel[];
  displayedColumns: string[] = [];
  pagination = [10, 20, 50, 100];

  empresas: IEmpresaModel[];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private empresaService: EmpresaService,
    public dialog: MatDialog
  ) { }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.loadTableColumns();
    this.loadDataSource();
  }

  newEmpresa() {
    this.empresaSelected(ActionsEnum.NEW, {} as IEmpresaModel);
  }

  viewEmpresaSelected(element: IEmpresaModel) {
    this.empresaSelected(ActionsEnum.VIEW, element);
  }

  deleteEmpresaSelected(element: IEmpresaModel) {

  }

  editEmpresaSelected(element: IEmpresaModel) {
    this.empresaSelected(ActionsEnum.EDIT, element);
  }

  empresaSelected(type: string, element: IEmpresaModel) {
    const tableEvent: IElementTypeModel = {
      element,
      type
    }
    this.openDialog(tableEvent);
  }

  openDialog(elementType: IElementTypeModel): void {
    const dialogRef = this.dialog.open(EmpresaDialogComponent, {
      width: '400px',
      data: elementType
    });

    dialogRef.afterClosed().subscribe((empresa: IEmpresaModel) => {
      if (!empresa) {
        return;
      }
      if (elementType.type === ActionsEnum.EDIT) {
        this.empresaService.update(empresa).subscribe();
      } else if (elementType.type === ActionsEnum.NEW) {
        this.empresaService.save(empresa).subscribe(() => {
          this.loadDataSource();
        });
      }
    });
  }

  loadDataSource() {
    this.empresaService.getAll().subscribe(empresas => {
      this.dataSource = new MatTableDataSource<IEmpresaModel>(empresas);
      this.dataSource.paginator = this.paginator;
    });
  }

  loadTableColumns() {
    this.tableColumns = [
      {
        displayedColumn: 'id',
        titleColumn: 'Id'
      },
      {
        displayedColumn: 'nombre',
        titleColumn: 'Nombre Empresa'
      },
      {
        displayedColumn: 'ruc',
        titleColumn: 'RUC'
      },
      {
        displayedColumn: 'direccion',
        titleColumn: 'Direccion'
      }
    ];

    this.tableColumns.forEach(element => {
      this.displayedColumns.push(element.displayedColumn);
    });

    this.displayedColumns.push('btnAction');
  }


}

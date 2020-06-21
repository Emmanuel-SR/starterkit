import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { IElementTypeModel } from "src/app/models/element-type.model";
import { ActionsEnum } from "src/app/shared/actions.enum";
import { MatDialog } from "@angular/material/dialog";
import { IUserModel } from "src/app/models/user.model";
import { UserService } from "src/app/services/user.service";
import { UserDialogComponent } from "./components/user-dialog/user-dialog.component";
import { RoleService } from 'src/app/services/role.service';
import { IRoleModel } from 'src/app/models/role.model';
import { Utility } from 'src/app/utils/helper/utility';
import { MatTableDataSource } from '@angular/material/table';
import { ITableColumnModel } from 'src/app/models/table-column.model';

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource: MatTableDataSource<IUserModel>;
  tableColumns: ITableColumnModel[];
  displayedColumns: string[] = [];
  pagination = [10, 20, 50, 100];

  users: IUserModel[];

  roles: IRoleModel[];

  constructor(private userService: UserService, private roleService: RoleService, public utilityService: Utility, public dialog: MatDialog) { }

  ngOnInit() {
    this.loadRoles();
    this.loadTableColumns();
    this.loadDataSource();
  }

  loadRoles() {
    this.roleService.getAll().subscribe(data => {
      this.roles = data;
    })
  }

  newUser() {
    this.actionPerformed(ActionsEnum.NEW, {} as IUserModel);
  }

  viewUserSelected(user: IUserModel) {
    this.actionPerformed(ActionsEnum.VIEW, user);
  }

  editUserSelected(user: IUserModel) {
    this.actionPerformed(ActionsEnum.EDIT, user);
  }

  actionPerformed(type: string, element: IUserModel) {
    const data: IElementTypeModel = {
      element,
      type,
      lists: {
        roles: this.roles
      },
    };
    this.openDialog(data);
  }

  openDialog(data: IElementTypeModel): void {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: "400px",
      data,
    });

    dialogRef.afterClosed().subscribe((user: IUserModel) => {
      if (!user) return;

      if (data.type === ActionsEnum.EDIT) {
        this.userService.update(user).subscribe();
      } else if (data.type === ActionsEnum.NEW) {
        this.userService.save(user).subscribe(() => {
          this.loadDataSource();
        });
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadDataSource() {
    this.userService.getAll().subscribe(users => {
      this.dataSource = new MatTableDataSource<IUserModel>(users);
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
        displayedColumn: 'username',
        titleColumn: 'UserName'
      },
      {
        displayedColumn: 'email',
        titleColumn: 'email'
      },
      {
        displayedColumn: 'roles.name',
        titleColumn: 'Roles'
      },
      {
        displayedColumn: 'active',
        titleColumn: 'Active'
      }
    ];

    this.tableColumns.forEach(element => {
      this.displayedColumns.push(element.displayedColumn);
    });

    this.displayedColumns.push('btnAction');
  }
}

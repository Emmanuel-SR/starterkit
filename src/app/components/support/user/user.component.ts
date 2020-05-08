import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { IElementTypeModel } from 'src/app/models/element-type.model';
import { ActionsEnum } from 'src/app/shared/actions.enum';
import { MatDialog } from '@angular/material/dialog';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { UserDialogComponent } from './components/employee-dialog/user-dialog.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource: UserModel[];

  users: UserModel[];

  pagination = [10, 20, 50, 100];

  pageSize = this.pagination[0];

  currentPage = 0;

  totalSize = 0;

  paginated: UserModel[];

  constructor(private userService: UserService, public dialog: MatDialog) { }

  ngOnInit() {
    this.loadDataSource();
  }

  ngOnDestroy() {

  }

  newUser() {
    this.actionPerformed(ActionsEnum.NEW, { name: {}, doc: {}, location: {}, login: {} } as UserModel);
  }

  viewUserSelected(user: UserModel) {
    this.actionPerformed(ActionsEnum.VIEW, user);
  }

  editUserSelected(user: UserModel) {
    this.actionPerformed(ActionsEnum.EDIT, user);
  }

  actionPerformed(type: string, element: UserModel) {
    const data: IElementTypeModel = {
      element,
      type,
      lists: {
        identityDocuments: []
      }
    }
    this.openDialog(data);
  }

  openDialog(data: IElementTypeModel): void {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '400px',
      data
    });

    dialogRef.afterClosed().subscribe((user: UserModel) => {

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
    const value = filterValue.trim().toLowerCase();
    if (value) {
      const filtered = this.paginated.filter(e => {
        return e.name.first.trim().toLowerCase().includes(value);
      });
      this.dataSource = filtered;
    } else {
      this.dataSource = this.paginated;
    }
  }

  loadDataSource() {

    this.users = [{
      "gender": "male",
      "name": {
        "first": "brad",
        "last": "gibson"
      },
      "location": {
        "street": "9278 new road",
        "city": "kilcoole",
        "state": "waterford",
        "postcode": "93027",
        "coordinates": {
          "latitude": "20.9267",
          "longitude": "-7.9310"
        }
      },
      "email": "brad.gibson@example.com",
      "login": {
        "uid": 1,
        "username": "silverswan131",
        "password": "firewall"
      },
      "dob": {
        "date": new Date("1993-07-20T09:44:18.674Z"),
        "age": 26
      },
      "phone": "011-962-7516",
      "cell": "081-454-0666",
      "doc": {
        "id": 1,
        "name": "DNI",
        "value": "77715633"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/75.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
      },
      "nat": "IE"
    }];
    this.totalSize = this.users.length;
    this.iterator();

  }

  private iterator() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    this.paginated = this.users.slice(start, end);
    this.dataSource = this.paginated;
  }

  handlePage(event?: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.iterator();
  }

}
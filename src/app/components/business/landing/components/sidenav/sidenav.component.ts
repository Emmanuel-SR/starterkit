import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavMenuItem } from 'src/app/models/nav-menu-item.model';
import { MatSidenav } from '@angular/material/sidenav';
import { NavMenuService } from 'src/app/services/nav-menu.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  opened: boolean;

  menuItems: NavMenuItem[];

  @ViewChild('sidenav', { static: true })
  sidenav: ElementRef;

  constructor(private navMenuService: NavMenuService) { }

  ngOnInit(): void {
    this.menuItems = this.navMenuService.getMenu();
  }

  ngAfterViewInit() {
    this.navMenuService.sidenav = this.sidenav;
  }

  onMenuSelect(item: NavMenuItem) {
    this.navMenuService.select(item);
  }

}

import { Component, OnInit } from '@angular/core';
import { NavItem } from 'src/app/models/nav-item.model';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  opened: boolean;

  menuIcon: string = 'menu';

  menuItems: NavItem[];

  constructor() { }

  ngOnInit(): void {
    this.menuItems = [
      {
        name: "Home",
        iconName: "home",
        route: "home"
      },
      {
        name: "Assignation",
        iconName: "work",
        route: "assignation"
      },
      {
        name: "Support",
        iconName: "build",
        route: "support",
        children: [
          {
            name: "Employee",
            iconName: "face",
            route: "support/employee"
          },
          {
            name: "Business",
            iconName: "business",
            route: "support/business"
          }
          ,
          {
            name: "Project",
            iconName: "emoji_objects",
            route: "support/project"
          }
        ]
      }
    ]
  }

  onMenuClick(sidenav: MatSidenav) {
    sidenav.toggle();
    this.menuIcon = (sidenav.opened) ? 'menu_open' : 'menu';
  }

}

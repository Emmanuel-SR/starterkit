import { Injectable } from '@angular/core';
import { NavMenuItem } from '../models/nav-menu-item.model';
import { AppPath } from '../modules/route/path/routing.path';

@Injectable({
  providedIn: 'root',
})
export class NavMenuService {

  public sidenav: any;

  private opened: boolean = false;

  menu: NavMenuItem[] = [
    {
      name: "Support",
      iconName: "build",
      children: [
        {
          name: "User",
          iconName: "face",
          route: `${AppPath.LANDING}/${AppPath.USERS}`
        },
        {
          name: "Vehicle",
          iconName: "commute",
          route: `${AppPath.LANDING}/${AppPath.VEHICLES}`
        },
        {
          name: "Client",
          iconName: "face",
          route: `${AppPath.LANDING}/${AppPath.CLIENTS}`
        }
      ]
    }
  ];

  getMenu(): NavMenuItem[] {
    return this.menu;
  }

  select(item: NavMenuItem) {
    item.selected = true;
  }

  toggle(): void {
    this.sidenav.toggle();
    this.opened = !this.opened;
  }

  isOpened(): boolean {
    return this.opened;
  }

}

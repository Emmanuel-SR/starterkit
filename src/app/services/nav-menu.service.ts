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
        }
      ]
    }
  ];

  getMenu(): NavMenuItem[] {
    return this.menu;
  }

  select(item: NavMenuItem) {
    //this.unselectAll(this.menu);
    item.selected = true;
    localStorage.setItem('menu-selected', item.route);
  }

  toggle(): void {
    this.sidenav.toggle();
    this.opened = !this.opened;
  }

  isOpened(): boolean {
    return this.opened;
  }

}

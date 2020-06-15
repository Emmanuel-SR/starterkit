import { Component, OnInit } from '@angular/core';
import { NavMenuService } from 'src/app/services/nav-menu.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  appName: string = "App";

  menuIcon: string = 'menu';

  email: string;

  constructor(private navMenuService: NavMenuService,
    private readonly authService: AuthenticationService,
    public router: Router) { }

  ngOnInit(): void {
    this.email = sessionStorage.getItem('email');
  }

  onToggle() {
    this.navMenuService.toggle();
    this.menuIcon = (this.navMenuService.isOpened()) ? 'menu_open' : 'menu';
  }

  logout() {
    console.log('logout');
    this.authService.logout();
    this.router.navigate(["login"]);
  }

}

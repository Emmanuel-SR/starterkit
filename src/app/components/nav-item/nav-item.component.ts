import { Component, OnInit, Input } from '@angular/core';
import { NavItem } from '../../models/nav-item.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css']
})
export class NavItemComponent implements OnInit {

  @Input()
  item: NavItem;

  expanded: boolean = false;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  onSelection(item: NavItem) {
    if (!item.children || !item.children.length) {
      this.router.navigate([item.route]);
    }
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
    }
  }

}

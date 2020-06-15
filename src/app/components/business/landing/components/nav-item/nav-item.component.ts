import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NavMenuItem } from 'src/app/models/nav-menu-item.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css']
})
export class NavItemComponent implements OnInit {

  @Input()
  item: NavMenuItem;

  @Output()
  selectItem = new EventEmitter<NavMenuItem>();
  
  expanded: boolean = false;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  onSelection(item: NavMenuItem) {
    if (!item.children || !item.children.length) {
      this.selectItem.emit(item);
      this.router.navigate([item.route]);
    }
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
    }
  }

}

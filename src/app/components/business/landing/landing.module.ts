import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { AppRoutingModule } from 'src/app/modules/route/routing.module';
import { LandingComponent } from './landing.component';
import { NavMenuService } from 'src/app/services/nav-menu.service';



@NgModule({
  declarations: [
    LandingComponent,
    SidenavComponent,
    NavItemComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule,
  ],
  providers: [NavMenuService]
})
export class LandingModule { }

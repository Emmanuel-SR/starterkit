import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './components/support/employee/employee.component';
import { HomeComponent } from './components/home/home.component';
import { SupportComponent } from './components/support/support.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'support',
    component: SupportComponent,
    children: [
      {
        path: 'employee',
        component: EmployeeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

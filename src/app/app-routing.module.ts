import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './components/support/employee/employee.component';
import { HomeComponent } from './components/home/home.component';
import { SupportComponent } from './components/support/support.component';
import { EmpresaComponent } from './components/support/empresa/empresa.component';
import { AssignationComponent } from './components/assignation/assignation.component';
import { ProyectoComponent } from './components/support/proyecto/proyecto.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'assignation',
    component: AssignationComponent
  },
  {
    path: 'support',
    component: SupportComponent,
    children: [
      {
        path: 'employee',
        component: EmployeeComponent
      },
      {
        path: 'business',
        component: EmpresaComponent
      },
      {
        path: 'project',
        component: ProyectoComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

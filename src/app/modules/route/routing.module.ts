import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule } from '@angular/router';


import { AppPath } from './path/routing.path';
import { LandingComponent } from 'src/app/components/business/landing/landing.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { UserComponent } from 'src/app/components/business/supports/user/user.component';
import { AuthGaurdService } from 'src/app/services/auth-gaurd.service';

const emptyRoute: Route = { path: AppPath.EMPTY, redirectTo: AppPath.LOGIN, pathMatch: AppPath.MATCH_FULL };
const loginRoute: Route = { path: AppPath.LOGIN, component: LoginComponent };
const landingRoute: Route = {
  path: AppPath.LANDING,
  component: LandingComponent,
  canActivate:[AuthGaurdService],
  children: [
    {
      path: AppPath.USERS,
      component: UserComponent,
      canActivate:[AuthGaurdService]
    }
  ]
};

const routes: Routes = [
  emptyRoute,
  loginRoute,
  landingRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

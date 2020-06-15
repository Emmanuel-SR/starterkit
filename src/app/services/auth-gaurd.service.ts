import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { AppPath } from '../modules/route/path/routing.path';

@Injectable({
    providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

    constructor(private router: Router,
        private authService: AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authService.isUserLoggedIn())
            return true;

        this.router.navigate([AppPath.LOGIN]);
        return false;

    }

}
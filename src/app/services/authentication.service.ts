import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ILogin } from 'src/app/models/login.model';
import { LoginApi } from './api/login.api';
import { IJwtResponse } from '../models/jwt-response.model';
import { map, tap, mapTo, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class AuthenticationService {

    constructor(private loginApi: LoginApi) { }

    authenticate(login: ILogin): Observable<IJwtResponse> {
        return this.loginApi.authenticate(login).pipe(
            map((token: IJwtResponse) => {
                sessionStorage.setItem('username', login.username);
                let tokenStr = 'Bearer ' + token.jwt;
                sessionStorage.setItem('token', tokenStr);
                return token;
            }));
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('username')
        return !(user === null)
    }

    logout() {
        this.loginApi.logout().subscribe((data) => {
            sessionStorage.clear();
        });
    }

}

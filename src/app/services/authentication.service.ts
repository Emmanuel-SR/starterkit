import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogin } from 'src/app/models/login.model';
import { LoginApi } from './api/login.api';
import { IJwtResponse } from '../models/jwt-response.model';
import { map } from 'rxjs/operators';

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

    isUserLoggedIn(): boolean {
        let user = sessionStorage.getItem('username')
        return !(user === null)
    }

    logout(): Observable<any> {
        return this.loginApi.logout();
    }

}

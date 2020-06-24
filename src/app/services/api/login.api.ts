import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogin } from 'src/app/models/login.model';
import { IJwtResponse } from 'src/app/models/jwt-response.model';
import { HttpApi } from 'src/app/shared/services/apis/http.api';

@Injectable({
    providedIn: 'root'
})
export class LoginApi {

    private readonly AUTHENTICATE_URL = '/authenticate';
    private readonly LOGOUT_URL = '/sign-out';

    constructor(private httpApi: HttpApi) { }

    authenticate(login: ILogin): Observable<IJwtResponse> {
        return this.httpApi.post(this.AUTHENTICATE_URL, login);
    }

    logout(): Observable<any> {
        return this.httpApi.post(this.LOGOUT_URL, null);
    }

}

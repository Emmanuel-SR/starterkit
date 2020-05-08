import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpApi } from './http.api';
import { UserModel } from 'src/app/models/user.model';

@Injectable({
    providedIn: 'root'
})
export class UserApi {

    private resourceUrl = '/users';

    constructor(private httpApi: HttpApi) { }

    getById(uid: number): Observable<UserModel> {
        return this.httpApi.get(`${this.resourceUrl}/${uid}`);
    }

    getAll(): Observable<UserModel[]> {
        return this.httpApi.get(this.resourceUrl);
    }

    save(user: any): Observable<UserModel> {
        return this.httpApi.post(this.resourceUrl, user);
    }

    update(user: any): Observable<UserModel> {
        return this.httpApi.put(`${this.resourceUrl}/${user.login.uid}`, user);
    }

} 

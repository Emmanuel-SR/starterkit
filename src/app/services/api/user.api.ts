import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpApi } from '../../shared/services/apis/http.api';
import { IUserModel } from 'src/app/models/user.model';

@Injectable({
    providedIn: 'root'
})
export class UserApi {

    private resourceUrl = '/users';

    constructor(private httpApi: HttpApi) { }

    getByUserName(username: string): Observable<IUserModel> {
        return this.httpApi.get(`${this.resourceUrl}/profile/${username}`);
    }

    getById(uid: number): Observable<IUserModel> {
        return this.httpApi.get(`${this.resourceUrl}/${uid}`);
    }

    getAll(): Observable<IUserModel[]> {
        return this.httpApi.get(this.resourceUrl);
    }

    save(user: any): Observable<IUserModel> {
        return this.httpApi.post(this.resourceUrl, user);
    }

    update(user: any): Observable<IUserModel> {
        return this.httpApi.put(`${this.resourceUrl}/${user.id}`, user);
    }

} 

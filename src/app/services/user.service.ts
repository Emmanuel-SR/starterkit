import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserApi } from './api/user.api';
import { UserModel } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private userApi: UserApi) { }

    getById(uid: number): Observable<UserModel> {
        return this.userApi.getById(uid);
    }

    getAll(): Observable<UserModel[]> {
        return this.userApi.getAll();
    }

    save(user: any): Observable<UserModel> {
        return this.userApi.save(user);
    }

    update(user: any): Observable<UserModel> {
        return this.userApi.update(user);
    }

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpApi } from './http.api';
import { IUserModel } from 'src/app/models/user.model';
import { IRoleModel } from 'src/app/models/role.model';

@Injectable({
    providedIn: 'root'
})
export class RoleApi {

    private resourceUrl = '/roles';

    constructor(private httpApi: HttpApi) { }

    getAll(): Observable<IRoleModel[]> {
        return this.httpApi.get(this.resourceUrl);
    }

} 

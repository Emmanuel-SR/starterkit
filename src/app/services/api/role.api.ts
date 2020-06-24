import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRoleModel } from 'src/app/models/role.model';
import { HttpApi } from 'src/app/shared/services/apis/http.api';

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

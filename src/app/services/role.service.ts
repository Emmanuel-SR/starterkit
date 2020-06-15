import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RoleApi } from './api/role.api';
import { IRoleModel } from '../models/role.model';

@Injectable({
  providedIn: "root",
})
export class RoleService {

  constructor(private roleApi: RoleApi) {}

  getAll(): Observable<IRoleModel[]> {
    return this.roleApi.getAll();
  }

}

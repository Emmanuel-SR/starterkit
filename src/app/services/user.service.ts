import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserApi } from "./api/user.api";
import { IUserModel } from "../models/user.model";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: "root",
})
export class UserService {

  constructor(private userApi: UserApi) { }

  getByUserName(username: string): Observable<IUserModel> {
    return this.userApi.getByUserName(username).pipe(
      map((profile: IUserModel) => {
        sessionStorage.setItem('email', profile.email);
        return profile;
      }));
  }

  getById(uid: number): Observable<IUserModel> {
    return this.userApi.getById(uid);
  }

  getAll(): Observable<IUserModel[]> {
    return this.userApi.getAll();
  }

  save(user: any): Observable<IUserModel> {
    return this.userApi.save(user);
  }

  update(user: any): Observable<IUserModel> {
    return this.userApi.update(user);
  }
  
}

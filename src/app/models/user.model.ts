import { IRoleModel } from './role.model';

export interface IUserModel {
  id?:number;
  username: string;
  password?: string;
  email?: string;
  roles?: IRoleModel[];
  active?: boolean;
}
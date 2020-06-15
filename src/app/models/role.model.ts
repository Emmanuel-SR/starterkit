import { IPrivilegeModel } from './privilege.model';

export interface IRoleModel {
  id: number;
  name: string;
  privileges: IPrivilegeModel[]
}
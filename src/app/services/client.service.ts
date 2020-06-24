import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ClientApi } from './api/client.api';
import { IClientModel } from '../models/client.model';
import { BasicOperationService } from '../shared/services/basic-operation.service';
import { FullService } from '../shared/services/full.service';
import { FullApi } from '../shared/services/apis/full.api';
import { PageEvent } from '@angular/material/paginator';
import { PageData } from '../shared/models/page-data.model';

@Injectable({
  providedIn: "root",
})
export class ClientService extends BasicOperationService<IClientModel, number> implements FullService<IClientModel, number> {

  constructor(private clientApi: ClientApi) {
    super();
  }

  protected getApi(): FullApi<IClientModel, number> {
    return this.clientApi;
  }

  public getById(id: number): Observable<IClientModel> {
    return super.getById(id);
  }

  public getPage(pageEvent: PageEvent): Observable<PageData<IClientModel>> {
    return super.getPage(pageEvent);
  }

  public insert(model: IClientModel): Observable<IClientModel> {
    return super.insert(model);
  }

  public update(model: IClientModel): Observable<IClientModel> {
    return super.update(model);
  }

}

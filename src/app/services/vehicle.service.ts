import { IVehicleModel } from '../models/vehicle.model';
import { Observable } from 'rxjs';
import { BasicOperationService } from '../shared/services/basic-operation.service';
import { Injectable } from '@angular/core';
import { VehicleApi } from './api/vehicle.api';
import { FullService } from '../shared/services/full.service';
import { PageEvent } from '@angular/material/paginator';
import { PageData } from '../shared/models/page-data.model';
import { FullApi } from '../shared/services/apis/full.api';

@Injectable({
  providedIn: "root",
})
export class VehicleService extends BasicOperationService<IVehicleModel, number> implements FullService<IVehicleModel, number> {

  constructor(private vehicleApi: VehicleApi) {
    super();
  }

  protected getApi(): FullApi<IVehicleModel, number> {
    return this.vehicleApi;
  }

  public getById(id: number): Observable<IVehicleModel> {
    return super.getById(id);
  }

  public getPage(pageEvent: PageEvent): Observable<PageData<IVehicleModel>> {
    return super.getPage(pageEvent);
  }

  public insert(model: IVehicleModel): Observable<IVehicleModel> {
    return super.insert(model);
  }

  public update(model: IVehicleModel): Observable<IVehicleModel> {
    return super.update(model);
  }

}

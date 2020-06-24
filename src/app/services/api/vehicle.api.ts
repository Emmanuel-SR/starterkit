import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IVehicleModel } from 'src/app/models/vehicle.model';
import { PageData } from 'src/app/shared/models/page-data.model';
import { HttpApi } from 'src/app/shared/services/apis/http.api';
import { FullApi } from 'src/app/shared/services/apis/full.api';
import { BasicOperaionApi } from 'src/app/shared/services/apis/basic-operation.api';

@Injectable({
    providedIn: 'root'
})
export class VehicleApi extends BasicOperaionApi<IVehicleModel, number> implements FullApi<IVehicleModel, number>{

    private resourceUrl = '/vehicles';

    constructor(private httpApi: HttpApi) {
        super();
    }

    getById(id: number): Observable<IVehicleModel> {
        return super.getById(id);
    }

    getPage(page: number, size: number): Observable<PageData<IVehicleModel>> {
        return super.getPage(page, size);
    }

    insert(model: IVehicleModel): Observable<IVehicleModel> {
        return super.insert(model);
    }

    update(model: IVehicleModel): Observable<IVehicleModel> {
        return super.update(model, model.id);
    }

    protected getResourceUrl(): string {
        return this.resourceUrl;
    }
    protected getApi(): HttpApi {
        return this.httpApi;
    }

} 

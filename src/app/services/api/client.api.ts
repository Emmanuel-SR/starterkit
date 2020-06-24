import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IClientModel } from 'src/app/models/client.model';
import { HttpApi } from 'src/app/shared/services/apis/http.api';
import { FullApi } from 'src/app/shared/services/apis/full.api';
import { PageData } from 'src/app/shared/models/page-data.model';
import { BasicOperaionApi } from 'src/app/shared/services/apis/basic-operation.api';


@Injectable({
    providedIn: 'root'
})
export class ClientApi extends BasicOperaionApi<IClientModel, number> implements FullApi<IClientModel, number> {
    
    private resourceUrl = '/clients';

    constructor(private httpApi: HttpApi) {
        super();
    }

    getById(id: number): Observable<IClientModel> {
        return super.getById(id);
    }

    getPage(page: number, size: number): Observable<PageData<IClientModel>> {
        return super.getPage(page, size);
    }

    insert(model: IClientModel): Observable<IClientModel> {
        return super.insert(model);
    }

    update(model: IClientModel): Observable<IClientModel> {
        return super.update(model, model.id);
    }

    protected getResourceUrl(): string {
        return this.resourceUrl;
    }
    protected getApi(): HttpApi {
        return this.httpApi;
    }

} 

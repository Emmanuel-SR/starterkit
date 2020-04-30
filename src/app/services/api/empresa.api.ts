import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpApi } from './http.api';
import { IEmpresaModel } from 'src/app/models/empresa.model';

@Injectable({
    providedIn: 'root'
})
export class EmpresaApi {

    private resourceUrl = '/empresas';

    constructor(private httpApi: HttpApi) { }

    getById(id: number): Observable<IEmpresaModel> {
        return this.httpApi.get(`${this.resourceUrl}/${id}`);
    }

    getAll(): Observable<IEmpresaModel[]> {
        return this.httpApi.get(this.resourceUrl);
    }

    save(empresa: any): Observable<IEmpresaModel> {
        return this.httpApi.post(this.resourceUrl, empresa);
    }

    update(empresa: any): Observable<IEmpresaModel> {
        return this.httpApi.put(`${this.resourceUrl}/${empresa.id}`, empresa);
    }

} 

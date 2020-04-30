import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmpresaApi } from './api/empresa.api';
import { IEmpresaModel } from '../models/empresa.model';

@Injectable({
    providedIn: 'root'
})
export class EmpresaService {

    constructor(private empresaApi: EmpresaApi) { }

    getById(id: number): Observable<IEmpresaModel> {
        return this.empresaApi.getById(id);
    }

    getAll(): Observable<IEmpresaModel[]> {
        return this.empresaApi.getAll();
    }

    save(empresa: any): Observable<IEmpresaModel> {
        return this.empresaApi.save(empresa);
    }

    update(empresa: any): Observable<IEmpresaModel> {
        return this.empresaApi.update(empresa);
    }

}

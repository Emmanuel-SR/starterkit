import { Observable } from 'rxjs';
import { PageData } from '../../models/page-data.model';
import { HttpApi } from './http.api';

export abstract class BasicOperaionApi<M, K>{

    constructor() { }

    public getById(id: number): Observable<M> {
        return this.getApi().get(`${this.getResourceUrl()}/${id}`);
    }

    public getPage(page: number, size: number): Observable<PageData<M>> {
        return this.getApi().get(`${this.getResourceUrl()}?page=${page}&size=${size}`);
    }

    public insert(model: M): Observable<M> {
        return this.getApi().post(this.getResourceUrl(), model);
    }

    public update(model: M, id: K): Observable<M> {
        return this.getApi().put(`${this.getResourceUrl()}/${id}`, model);
    }

    protected abstract getResourceUrl(): string;

    protected abstract getApi(): HttpApi;

} 

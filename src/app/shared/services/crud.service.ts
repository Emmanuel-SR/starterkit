import { Observable } from 'rxjs';

export interface CrudService<M, K> {

    getById(id: K): Observable<M>;

    insert(model: M): Observable<M>;

    update(vehicle: M): Observable<M>;

}
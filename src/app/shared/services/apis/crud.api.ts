import { Observable } from 'rxjs';

export interface CrudApi<M, K> {

    getById(id: K): Observable<M>;

    insert(model: M): Observable<M>;

    update(model: M): Observable<M>;

} 
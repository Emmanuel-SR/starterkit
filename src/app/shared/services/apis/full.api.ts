import { Observable } from 'rxjs';
import { CrudApi } from './crud.api';
import { PageableApi } from './pageable.api';

export interface FullApi<M, K> extends CrudApi<M, K>, PageableApi<M> {

} 
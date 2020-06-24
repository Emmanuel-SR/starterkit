import { CrudService } from './crud.service';
import { PageableService } from './pageable.service';

export interface FullService<M, K> extends CrudService<M, K>, PageableService<M> {

}
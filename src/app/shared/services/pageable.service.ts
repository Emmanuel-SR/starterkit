import { Observable } from 'rxjs';
import { PageData } from '../models/page-data.model';
import { PageEvent } from '@angular/material/paginator';

export interface PageableService<M> {
    getPage(pageEvent: PageEvent): Observable<PageData<M>>;
}
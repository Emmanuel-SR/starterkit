import { Observable } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { PageData } from '../../models/page-data.model';

export interface PageableApi<M> {

    getPage(page: number, size: number): Observable<PageData<M>>;
    
} 
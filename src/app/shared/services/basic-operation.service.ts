import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { PageData } from '../models/page-data.model';
import { FullApi } from './apis/full.api';

export abstract class BasicOperationService<M, K> {

  constructor() { }

  public getById(id: K): Observable<M> {
    return this.getApi().getById(id);
  }

  public getPage(pageEvent: PageEvent): Observable<PageData<M>> {
    if (!pageEvent)
      return this.getApi().getPage(0, 1);

    return this.getApi().getPage(pageEvent.pageIndex, pageEvent.pageSize);
  }

  public insert(model: M): Observable<M> {
    return this.getApi().insert(model);
  }

  public update(model: M): Observable<M> {
    return this.getApi().update(model);
  }

  protected abstract getApi(): FullApi<M, K>;

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpApi } from 'src/app/shared/services/apis/http.api';
import { IIdentityDocumentModel } from 'src/app/models/identity-documents.model';

@Injectable({
    providedIn: 'root'
})
export class IdentityDocumentApi {

    private resourceUrl = '/documents';

    constructor(private httpApi: HttpApi) { }

    getAll(): Observable<IIdentityDocumentModel[]> {
        return this.httpApi.get(this.resourceUrl);
    }

} 

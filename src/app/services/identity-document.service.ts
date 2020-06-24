import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IdentityDocumentApi } from './api/identity-document.api';
import { IIdentityDocumentModel } from '../models/identity-documents.model';

@Injectable({
  providedIn: "root",
})
export class IdentityDocumentService {

  constructor(private documentApi: IdentityDocumentApi) { }

  getAll(): Observable<IIdentityDocumentModel[]> {
    return this.documentApi.getAll();
  }

}

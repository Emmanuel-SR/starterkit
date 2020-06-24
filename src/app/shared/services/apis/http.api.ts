import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HttpApi {

    public readonly envBase = environment.hostname;

    constructor(private http: HttpClient) { }

    public get(url: string): Observable<any> {
        return this.http.get<any>(`${this.envBase}${url}`)
            .pipe(catchError((catchedError: any) => throwError(catchedError.error)));
    }

    public delete(url: string): Observable<any> {
        return this.http.delete(`${this.envBase}${url}`)
            .pipe(catchError((catchedError: any) => throwError(catchedError.error)));
    }

    public post<T>(url: string, data: any): Observable<any> {
        return this.http.post<T>(`${this.envBase}${url}`, data)
            .pipe(catchError((catchedError: any) => throwError(catchedError.error)));
    }

    public put<T>(url: string, data: any): Observable<any> {
        return this.http.put<T>(`${this.envBase}${url}`, data)
            .pipe(catchError((catchedError: any) => throwError(catchedError.error)));
    }

}

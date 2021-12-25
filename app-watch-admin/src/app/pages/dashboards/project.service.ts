import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from 'app/server';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from '../e-commerce/products/product.model';
@Injectable()
export class ProjectDashboardService 
{
    private sharedHeaders = new HttpHeaders();
    constructor(
    private _http: HttpClient,
    ) { 
    this.sharedHeaders = this.sharedHeaders.set('Content-Type', 'application/json');
    }

    totalUser(): Observable<number> {
            return this._http.get(apiUrl + 'totalUser', { headers: this.sharedHeaders }).pipe(catchError(this.handleError));
    }
    totalProduct(): Observable<number> {
            return this._http.get(apiUrl + 'totalProduct', { headers: this.sharedHeaders }).pipe(catchError(this.handleError));
    }
    totalOrder(): Observable<number> {
            return this._http.get(apiUrl + 'totalOrder', { headers: this.sharedHeaders }).pipe(catchError(this.handleError));
    }
    totalCategory(): Observable<number> {
            return this._http.get(apiUrl + 'totalCategory', { headers: this.sharedHeaders }).pipe(catchError(this.handleError));
    }
    productMaxOrder(): Observable<any> {
            return this._http.get(apiUrl + 'productMaxOrder', { headers: this.sharedHeaders }).pipe(catchError(this.handleError));
    }


    protected handleError(httpErrorResponse: HttpErrorResponse): Observable<any> {
            return throwError("");
    }
}

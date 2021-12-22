import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { apiUrl } from 'app/server';
import { catchError } from 'rxjs/operators';
import { Product } from '../product/product.model';

@Injectable()
export class EcommerceProductsService {
        private sharedHeaders = new HttpHeaders();
        constructor(
        private _http: HttpClient,
        ) { 
        this.sharedHeaders = this.sharedHeaders.set('Content-Type', 'application/json');
        }

        getProduct(): Observable<Product[]> {
        return this._http.get(apiUrl + 'products', { headers: this.sharedHeaders }).pipe(catchError(this.handleError));
        }
        protected handleError(httpErrorResponse: HttpErrorResponse): Observable<any> {
        return throwError("");
        }
    
}

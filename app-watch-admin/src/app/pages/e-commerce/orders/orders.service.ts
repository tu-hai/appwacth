import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { apiUrl } from 'app/server';
import { catchError } from 'rxjs/operators';
import { Order } from './orders.model';


@Injectable()
export class OrdersService {
        private sharedHeaders = new HttpHeaders();
        constructor(
        private _http: HttpClient,
        ) { 
        this.sharedHeaders = this.sharedHeaders.set('Content-Type', 'application/json');
        }
        // Get danh sách đơn hàng
        getOrders(): Observable<Order[]> {
                return this._http.get(apiUrl + 'orders', { headers: this.sharedHeaders }).pipe(catchError(this.handleError));
        }

        protected handleError(httpErrorResponse: HttpErrorResponse): Observable<any> {
                return throwError("");
        }
    
}

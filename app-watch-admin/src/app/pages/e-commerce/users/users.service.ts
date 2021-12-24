import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { apiUrl } from 'app/server';
import { catchError } from 'rxjs/operators';
import { Product } from '../products/product.model';
import { User } from './users.model';

@Injectable()
export class UserService {

    private sharedHeaders = new HttpHeaders();
    constructor(
    private _http: HttpClient,
    ) { 
    this.sharedHeaders = this.sharedHeaders.set('Content-Type', 'application/json');
    }
    // Get danh sách đồng hồ trong bảng sanpam
    getUsers(): Observable<User[]> {
            return this._http.get<User[]>(apiUrl + 'users', { headers: this.sharedHeaders }).pipe(catchError(this.handleError));
    }
    // xóa 1 user theo id
    deleteUserById(IDuser: number): Observable<string> {
            return this._http.delete(apiUrl + 'users/' + IDuser , { headers: this.sharedHeaders }).pipe(catchError(this.handleError));
    }
    protected handleError(httpErrorResponse: HttpErrorResponse): Observable<any> {
            return throwError("");
    }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { apiUrl } from 'app/server';
import { catchError } from 'rxjs/operators';
import { Product } from './product.model';


@Injectable()
export class SanPhamService {
        private sharedHeaders = new HttpHeaders();
        constructor(
        private _http: HttpClient,
        ) { 
        this.sharedHeaders = this.sharedHeaders.set('Content-Type', 'application/json');
        }
        // Get danh sách đồng hồ trong bảng sanpam
        getProduct(): Observable<Product[]> {
                return this._http.get(apiUrl + 'products', { headers: this.sharedHeaders }).pipe(catchError(this.handleError));
        }
        // xóa 1 đồng hồ theo id
        deleteProductById(id: number): Observable<string> {
                return this._http.delete(apiUrl + 'products/' + id , { headers: this.sharedHeaders }).pipe(catchError(this.handleError));
        }
        // Cập nhật thông tin cho sản phẩm
        updateProduct(product: Product, ID: number): Observable<string> {
                return this._http.put(apiUrl + 'products/' + ID, product , { headers: this.sharedHeaders }).pipe(catchError(this.handleError));
        } 
        // Thêm mới sản phẩm
        postProduct(product: Product) : Observable<string> {
                return this._http.post(apiUrl + 'products', product , { headers: this.sharedHeaders }).pipe(catchError(this.handleError));

        }
        protected handleError(httpErrorResponse: HttpErrorResponse): Observable<any> {
                return throwError("");
        }
    
}

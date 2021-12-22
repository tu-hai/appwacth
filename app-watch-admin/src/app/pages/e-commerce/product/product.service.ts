import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { apiUrl } from 'app/server';
import { catchError } from 'rxjs/operators';
import { Product } from './product.model';

@Injectable()
export class EcommerceProductService
{


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
    // routeParams: any;
    // product: any;
    // onProductChanged: BehaviorSubject<any>;

    // /**
    //  * Constructor
    //  *
    //  * @param {HttpClient} _httpClient
    //  */
    // constructor(
    //     private _httpClient: HttpClient
    // )
    // {
    //     // Set the defaults
    //     this.onProductChanged = new BehaviorSubject({});
    // }

    // /**
    //  * Resolver
    //  *
    //  * @param {ActivatedRouteSnapshot} route
    //  * @param {RouterStateSnapshot} state
    //  * @returns {Observable<any> | Promise<any> | any}
    //  */
    // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    // {
    //     this.routeParams = route.params;

    //     return new Promise((resolve, reject) => {

    //         Promise.all([
    //             this.getProduct()
    //         ]).then(
    //             () => {
    //                 resolve(true);
    //             },
    //             reject
    //         );
    //     });
    // }

    // /**
    //  * Get product
    //  *
    //  * @returns {Promise<any>}
    //  */
    // getProduct(): Promise<any>
    // {
    //     return new Promise((resolve, reject) => {
    //         if ( this.routeParams.id === 'new' )
    //         {
    //             this.onProductChanged.next(false);
    //             resolve(false);
    //         }
    //         else
    //         {
    //             this._httpClient.get('api/e-commerce-products/' + this.routeParams.id)
    //                 .subscribe((response: any) => {
    //                     this.product = response;
    //                     this.onProductChanged.next(this.product);
    //                     resolve(response);
    //                 }, reject);
    //         }
    //     });
    // }



    // /**
    //  * Save product
    //  *
    //  * @param product
    //  * @returns {Promise<any>}
    //  */
    // saveProduct(product): Promise<any>
    // {
    //     return new Promise((resolve, reject) => {
    //         this._httpClient.post('api/e-commerce-products/' + product.id, product)
    //             .subscribe((response: any) => {
    //                 resolve(response);
    //             }, reject);
    //     });
    // }

    // /**
    //  * Add product
    //  *
    //  * @param product
    //  * @returns {Promise<any>}
    //  */
    // addProduct(product): Promise<any>
    // {
    //     return new Promise((resolve, reject) => {
    //         this._httpClient.post('api/e-commerce-products/', product)
    //             .subscribe((response: any) => {
    //                 resolve(response);
    //             }, reject);
    //     });
    // }
}

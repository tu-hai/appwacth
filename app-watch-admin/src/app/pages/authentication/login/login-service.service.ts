import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from 'app/server';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private sharedHeaders = new HttpHeaders();
  constructor(
    private _http: HttpClient,
  ) { 
    this.sharedHeaders = this.sharedHeaders.set('Content-Type', 'application/json');
  }

  login(data): Observable<string> {
    return this._http.post(apiUrl + 'admin-login', data, { headers: this.sharedHeaders }).pipe(catchError(this.handleError));
  }
  protected handleError(httpErrorResponse: HttpErrorResponse): Observable<any> {
    return throwError("");
  }
}

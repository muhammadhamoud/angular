import { Observable, catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/eco/src/environments/environment';
import { HttpErrorHandler } from '../../shared/services/http-error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private url: string = `${environment.api_url}/oauth/token`;

  constructor(private http: HttpClient, private eh: HttpErrorHandler) { }

  getClientSession(): Observable<object> {
    return this.http.post<object>(
      this.url,
      { grantType: 'client_credentials' })
      .pipe(catchError(this.eh.handleError));
  }

  login(email: string, password: string): Observable<object> {
    return this.http.post<object>(
      this.url,
      { username: email, password: password, grantType: 'password' })
      .pipe(catchError(this.eh.handleError));
  }
}
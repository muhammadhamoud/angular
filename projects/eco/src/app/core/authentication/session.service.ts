import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'projects/eco/src/environments/environment';
import { HttpErrorHandler } from '../../shared/services/http-error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private url: string = `${environment.api_url}/session`;
  private isLoggedIn = new BehaviorSubject(false);

  loggedInStatus = this.isLoggedIn.asObservable();

  constructor(private http: HttpClient, private eh: HttpErrorHandler) { }

  setLoggedInStatus(status: boolean) {
    this.isLoggedIn.next(status);
  }

  isCustomerLoggedIn(): Observable<{ message: string }> {
    return this.http.get<{ message: string }>(`${this.url}/customer/status`)
      .pipe(catchError(this.eh.handleError));
  }

  logout(): Observable<{ message: string }> {
    return this.http.get<{ message: string }>(`${this.url}/destroy`)
      .pipe(catchError(this.eh.handleError));
  }
}
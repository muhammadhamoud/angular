import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/eco/src/environments/environment';
import { HttpErrorHandler } from '../../shared/services/http-error-handler.service';
import { Customer } from '../models/customer';
import { Observable, catchError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url: string = `${environment.api_url}/api/customers`;

  constructor(private http: HttpClient, private eh: HttpErrorHandler) { }

  createCustomer(email: string, password: string, firstName: string, lastName: string): Observable<Customer> {
    return this.http.post<Customer>(this.url, {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName
    })
      .pipe(catchError(this.eh.handleError));
  }

  getCurrentCustomer(): Observable<Customer> {
    return this.http.get<Customer>(`${this.url}/current`)
      .pipe(catchError(this.eh.handleError));
  }

  getCustomer(id: string): Observable<Customer> {
    return this.http.get<Customer>(`${this.url}/${id}`)
      .pipe(catchError(this.eh.handleError));
  }
}

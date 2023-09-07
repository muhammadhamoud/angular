import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/eco/src/environments/environment';
import { HttpErrorHandler } from '../../shared/services/http-error-handler.service';
import { CustomerAddress } from '../models/customer-address';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerAddressService {

  private url: string = `${environment.api_url}/api/customer_addresses`;

  constructor(private http: HttpClient, private eh: HttpErrorHandler) { }

  createCustomerAddress(addressId: string, customerId: string): Observable<CustomerAddress> {
    return this.http.post<CustomerAddress>(this.url, {
      addressId: addressId, customerId: customerId
    })
      .pipe(catchError(this.eh.handleError));
  }

  getCustomerAddresses(): Observable<CustomerAddress[]> {
    return this.http.get<CustomerAddress[]>(`${this.url}`)
      .pipe(catchError(this.eh.handleError));
  }

  getCustomerAddress(id: string): Observable<CustomerAddress> {
    return this.http.get<CustomerAddress>(`${this.url}/${id}`)
      .pipe(catchError(this.eh.handleError));
  }
}

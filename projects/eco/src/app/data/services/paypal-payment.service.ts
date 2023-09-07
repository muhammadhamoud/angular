import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/eco/src/environments/environment';
import { HttpErrorHandler } from '../../shared/services/http-error-handler.service';
import { PaypalPayment } from '../models/paypal-payment';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaypalPaymentService {

  private url: string = `${environment.api_url}/api/paypal_payments`;

  constructor(private http: HttpClient, private eh: HttpErrorHandler) { }

  createPaypalPayment(payment: PaypalPayment): Observable<PaypalPayment> {
    return this.http.post<PaypalPayment>(this.url, payment)
      .pipe(catchError(this.eh.handleError));
  }

  getPaypalPayment(id: string): Observable<PaypalPayment> {
    return this.http.get<PaypalPayment>(`${this.url}/${id}`)
      .pipe(catchError(this.eh.handleError));
  }

  updatePaypalPayment(id: string, paypalPayerId: string): Observable<PaypalPayment> {
    return this.http.patch<PaypalPayment>(
      `${this.url}/${id}`,
      { paypalPayerId: paypalPayerId }
    )
      .pipe(catchError(this.eh.handleError));
  }
}

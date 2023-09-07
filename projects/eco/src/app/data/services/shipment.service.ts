import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/eco/src/environments/environment';
import { HttpErrorHandler } from '../../shared/services/http-error-handler.service';
import { Observable, catchError } from 'rxjs';
import { Shipment } from '../models/shipment';

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {

  private url: string = `${environment.api_url}/api/shipments`;

  constructor(private http: HttpClient, private eh: HttpErrorHandler) { }

  getShipment(id: string): Observable<Shipment> {
    return this.http.get<Shipment>(`${this.url}/${id}`)
      .pipe(catchError(this.eh.handleError));
  }

  updateShipment(id: string, shippingMethodId: string): Observable<Shipment> {
    return this.http.patch<Shipment>(
      `${this.url}/${id}`,
      { shippingMethodId: shippingMethodId }
    )
      .pipe(catchError(this.eh.handleError));
  }
}

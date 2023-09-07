import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/eco/src/environments/environment';
import { HttpErrorHandler } from '../../shared/services/http-error-handler.service';
import { DeliveryLeadTime } from '../models/delivery-lead-time';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeliveryLeadTimeService {

  private url: string = `${environment.api_url}/api/delivery_lead_times`;

  constructor(private http: HttpClient, private eh: HttpErrorHandler) { }

  getDeliveryLeadTimes(): Observable<DeliveryLeadTime[]> {
    return this.http.get<DeliveryLeadTime[]>(this.url)
      .pipe(catchError(this.eh.handleError));
  }
}

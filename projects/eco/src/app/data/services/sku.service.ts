import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/eco/src/environments/environment';
import { HttpErrorHandler } from '../../shared/services/http-error-handler.service';
import { Sku } from '../models/sku';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkuService {

  private url: string = `${environment.api_url}/api/skus`;

  constructor(private http: HttpClient, private eh: HttpErrorHandler) { }

  getSku(id: string): Observable<Sku> {
    return this.http.get<Sku>(`${this.url}/${id}`)
      .pipe(catchError(this.eh.handleError));
  }

  getSkus(page: number, pageSize: number): Observable<Sku[]> {
    return this.http.get<Sku[]>(
      this.url,
      {
        params: {
          'page': page.toString(),
          'pageSize': pageSize.toString()
        }
      })
      .pipe(catchError(this.eh.handleError));
  }
}

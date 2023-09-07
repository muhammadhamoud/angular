import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'projects/eco/src/environments/environment';
import { Product } from '../../products/services/products.model';


@Injectable({
  providedIn: 'root'
})
export class ConnectorService {

  private baseUrl = environment.api_url; 

  constructor(private http: HttpClient) {}

  get(endpoint: string): Observable<any> {
    return this.http.get(`${this.baseUrl}${endpoint}`, { headers: this.getHeaders() });
  }

  post(endpoint: string, data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}${endpoint}`, data, { headers: this.getHeaders() });
  }

  put(endpoint: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}${endpoint}`, data, { headers: this.getHeaders() });
  }

  delete(endpoint: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}${endpoint}`, { headers: this.getHeaders() });
  }

  // Define a function to create headers with 'application/json' content type
  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  database(): CustomDatabase {
    return new CustomDatabase(this);
  }
}

class CustomDatabase {
  constructor(private combinedService: ConnectorService) {}

  ref(path: string): CustomDatabaseReference {
    
    return new CustomDatabaseReference(path, this.combinedService);
  }
}

class CustomDatabaseReference {
  constructor(private path: string, private combinedService: ConnectorService) {}

  create(data: any): Observable<any> {
    return this.combinedService.post(this.path, data);
    // this.combinedService.post(this.path, data).subscribe({
    //   next: (response: any) => console.log('Data set successfully:', response),
    //   error: (error: any) => console.error('Error setting data:', error),
    //   complete: () => console.log('Complete')
    // });
  }
  
  read(): Observable<any> {
    return this.combinedService.get(this.path);
  }

  update(data: any): void {
    this.combinedService.put(this.path, data).subscribe({
      next: (response: any) => console.log('Data set successfully:', response),
      error: (error: any) => console.error('Error setting data:', error),
      complete: () => console.log('Complete')
    });
  }

  // Implement remove logic
  remove(): Observable<any> {
    return this.combinedService.delete(this.path);
  }
}



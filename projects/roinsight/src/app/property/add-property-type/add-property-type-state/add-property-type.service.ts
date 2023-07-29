import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PropertyType } from './add-property-type.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyTypeService {

  private readonly API_URL = 'http://127.0.0.1:8000/properties/';

  headers = new HttpHeaders({
    "Content-Type": "application/json",
    "Accept": "application/json"
  });

  constructor(private http: HttpClient) {}
  
  getPropertyTypes(): Observable<PropertyType[]> {
    return this.http.get<PropertyType[]>(this.API_URL + 'property-types');
  }
  createPropertyTypes(propertytype: PropertyType): Observable<PropertyType> {
    return this.http.post<PropertyType>(this.API_URL + 'property-types', propertytype).pipe(
      map((data) => {
        return {
          code: data.code,
          description: data.description,
          sequence: data.sequence,
        };
      })
    );;
  }
  getPropertyType(id: string | number): Observable<PropertyType> {
    const url = `${this.API_URL+ 'property-types/'}${id}`;
    return this.http.get<PropertyType>(url).pipe(
      map((data) => {
        return {
          code: data.code,
          description: data.description,
          sequence: data.sequence,
        };
      })
    );
  }


}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Property, PropertyType } from './property.model';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private readonly API_URL = 'http://127.0.0.1:8000/properties/';

  headers = new HttpHeaders({
    "Content-Type": "application/json",
    "Accept": "application/json"
  });

  constructor(private http: HttpClient) {}

  getProperties(): Observable<any> {
    return this.http.get(this.API_URL)
  }


  getProperty(id: string | number): Observable<Property> {
    const url = `${this.API_URL}${id}`;
    return this.http.get<Property>(url).pipe(
      map((data) => {
        return {
          code: data.code,
          name: data.name || '',
          legalOwner: data.legal_owner || '',
          propertyType: data.property_type || '',
          numberOfFloors: data.number_of_floors || '',
          totalRooms: data.total_rooms || '',
          numberOfBeds: data.number_of_beds || '',
          propertyInformationUrl: data.property_information_url || '',
          checkOutTime: data.check_out_time || '',
          checkInTime: data.check_in_time || '',
          latitude: data.latitude || '',
          longitude: data.longitude || '',
          baseLanguage: data.base_language || '',
        };
      })
    );
  }

  // getProperties(): Observable<Property[]> {
  //   return this.http.get<Property[]>(this.API_URL, { headers: this.headers}).pipe(
  //     map((data) => {
  //       return data.map((item) => {
  //         return {
  //           code: item.code,
  //           name: item.name || '',
  //           legalOwner: item.legal_owner || '',
  //           propertyType: item.property_type || '',
  //           numberOfFloors: item.number_of_floors || '',
  //           totalRooms: item.total_rooms || '',
  //           numberOfBeds: item.number_of_beds || '',
  //           propertyInformationUrl: item.property_information_url || '',
  //           checkOutTime: item.check_out_time || '',
  //           checkInTime: item.check_in_time || '',
  //           latitude: item.latitude || '',
  //           longitude: item.longitude || '',
  //           baseLanguage: item.base_language || '',
  //         };
  //       });
  //     })
  //   );
  // }

  createProperty(property: Property): Observable<Property> {
    return this.http.post<Property>(this.API_URL, property).pipe(
      map((data) => {
        return {
          // id: parseInt(data.code),
          code: data.code,
          name: data.name || null,
          legalOwner: data.legal_owner || null,
          propertyType: data.property_type || null,
          numberOfFloors: data.number_of_floors || null,
          totalRooms: data.total_rooms || null,
          numberOfBeds: data.number_of_beds || null,
          propertyInformationUrl: data.property_information_url || null,
          checkOutTime: data.check_out_time || null,
          checkInTime: data.check_in_time || null,
          latitude: data.latitude || null,
          longitude: data.longitude || null,
          baseLanguage: data.base_language || null,
        };
      })
    );
  }

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

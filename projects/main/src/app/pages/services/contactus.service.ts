import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ContactusService {
  // private apiUrl = 'http://localhost:3000/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' //+ authToken
    })
  };
 
  constructor(private http: HttpClient) { }

  // sendEmail(emailData: any): Observable<any>{
  //   const apiUrl = 'http://app.roinsight.com/api/send-email';
  //   // return this.http.post(apiUrl, emailData);
  //   return this.http.post(apiUrl, JSON.stringify(emailData), this.httpOptions);
  // }

  sendEmail(emailData: any): Observable<any>{
    console.log(emailData)
    const dummyResponse = {
      status: 'success',
      message: 'Email sent successfully!',
    };
    return of(dummyResponse);
  }


}

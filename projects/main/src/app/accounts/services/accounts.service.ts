import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  private registerUrl = environment.api_url + "accounts/";

  headers = new HttpHeaders({
    "Content-Type": "application/json",
    "Accept": "application/json"
  });

  constructor(private http: HttpClient) { }

  register(email: string | null | undefined, password: string | null | undefined, user_type: string | null | undefined): Observable<any> {
    return this.http.post<any>(this.registerUrl + "register", { user_type, email, password }, {
      headers: this.headers
  });
  }
  
  login(email: string | null | undefined, password: string | null | undefined): Observable<any> {
    console.log(this.http.post<any>(this.registerUrl, { email, password }))
    return this.http.post<any>(this.registerUrl + "login", {  email, password }, {
      headers: this.headers
  });
  }

  addUser(data: any): Observable<any>{
    return this.http.post('http://localhost:3000/accounts', data);
  }

}

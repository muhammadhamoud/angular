import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

// environment.apiUrl;

export interface User {
  id: string;
  email: string;
  password: string;
}

const AUTH_API = 'http://localhost:3000'; 

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + '/login',
      {
        email,
        password,
      },
      httpOptions
    );
  }

  register(email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + '/register',
      {
        email,
        password,
      },
      httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + '/signout', { }, httpOptions);
  }

}

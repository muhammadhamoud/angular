import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from "rxjs";

export interface LANGUAGES {
  languanges: string;
}

export interface Page_name {
	id: number;
	name: string;
	site: number;
}

export interface Site {
	id: number;
	name: string;
}

export interface Contents {
	id: number;
	language: string;
	title: string;
	content: string;
	description: string;
	image_url: string;
	icon_name: string;
	is_published: boolean;
	date_created: string;
	date_updated: string;
	slug: string;
	page_name: Page_name;
	site: Site;
}

@Injectable({
  providedIn: 'root'
})
export class TestingService {
  private apiUrl = 'http://127.0.0.1:8000/contents/translations/';
  // LANGUAGES = 'en'

  constructor(private http: HttpClient) { }

  getContent (languanges: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${languanges}/`);
  }

  getContentAll() {
    return this.http.get(this.apiUrl + 'en/');
  }

}

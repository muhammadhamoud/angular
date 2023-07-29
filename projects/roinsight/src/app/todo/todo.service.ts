import { Injectable } from '@angular/core';
import { Todo } from './state/todoe.state';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private apiUrl = 'http://127.0.0.1:8000/todo/'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.apiUrl, todo);
  }

  updateTodo(id: string, changes: Partial<Todo>): Observable<void> {
    const url = `${this.apiUrl}/${id}/update`;
    return this.http.put<void>(url, changes);
  }

  deleteTodo(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}/delete`;
    return this.http.delete<void>(url);
  }

}

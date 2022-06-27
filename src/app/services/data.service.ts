import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscriber } from 'rxjs';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly BASE_URL = 'https://628b2f157886bbbb37b20caa.mockapi.io/todos'

  public todos = new BehaviorSubject<Todo[]>([])

  constructor(private http: HttpClient) {
    this.getAllTodos().subscribe({
      next: todos => this.todos.next(todos),
      error: err => console.log(err)
      
    })
   }
  
  getAllTodos(){
    return this.http.get<Todo[]>(this.BASE_URL);
  }



}

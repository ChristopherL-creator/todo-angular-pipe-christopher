import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subscriber } from 'rxjs';
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


  getActiveTodos(){
    return this.todos.pipe(
      map(todos => todos.filter(todo => !todo.doneDate))
    )
  }


  getDoneTodo(){
    return this.todos.pipe(
      map(todos => todos.filter(todo => todo.doneDate))
    )
  }

  deleteTodo(todo: Todo){
    const url = this.BASE_URL + '/' + todo.id;
    this.http.delete(url).subscribe({
      next: r => {
        const newArray = this.todos.value.filter(t => t !== todo);
        this.todos.next(newArray);
      },
      error: err => console.error(err)
    })
  }

  completeTodo(todo:Todo){
    const url = this.BASE_URL + '/' + todo.id;
    const completedTodo = todo;
    completedTodo.priority = -1;
    completedTodo.doneDate = new Date().getTime() / 1000;
    const headers = new HttpHeaders({'Content-Type': 'application/json'})

    this.http.put<Todo>(url, completedTodo, {headers}).subscribe({
      next: todo => {
        const newArray = [...this.todos.value]
        this.todos.next(newArray);
      },
      error: err => console.error(err)
    })
  }

  putTodo(todo: Todo): Observable<Todo>{
    const url = this.BASE_URL + '/' + todo.id;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.put<Todo>(url, todo, httpOptions)
  }

  postTodo(todo: Todo): Observable<Todo> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post<Todo>(this.BASE_URL, todo, httpOptions)
  }

  saveTodo(todo: Todo){
    if (todo.id) {
      return this.putTodo(todo);
    } else {
      return this.postTodo(todo).pipe(
        map(todo => {
          const newArray = [...this.todos.value];
          newArray.push(todo)
          this.todos.next(newArray);
          return todo;
        })
      )
    }
  }

  getTodoById(id: string): Observable<Todo | undefined>{
    return this.todos.pipe(
      map(array => array.find(t => t.id === id))
    )

  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/model/todo';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {

  todo?: Todo;

  constructor(public dataS: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  saveTodo():void{
    this.dataS.saveTodo(this.todo!).subscribe({
      next: todo => console.log(todo),
      error: err => console.error(err)      
    })
  }

}

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


  ngOnInit(): void | Todo  {
    // ho provato a riscrivere le propetà dell'interfaccia
    // let obj = {} as Todo;
    const param = this.route.snapshot.paramMap.get('id');
    if (param){
      console.log(param);

      this.dataS.getTodoById(param).subscribe({
        next: todo => {
          this.todo = todo;
        },
        error: err => console.log(err)
      })
    } else {
      // this.todo = new /*obj*/Todo('');
    }
  }

  saveTodo():void{
    if(this.todo){
      this.dataS.saveTodo(this.todo).subscribe({
        next: todo => console.log(todo),
        error: err => console.error(err)
      })
    }
  }

}

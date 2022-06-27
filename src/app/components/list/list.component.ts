import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(public dataS: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.data);
  }

  getTodos(){
    const isActive = this.route.snapshot.data['isActive'];
    if (isActive) {
      return this.dataS.getActiveTodos();
    } else{
      return this.dataS.getDoneTodo();
    }
  }
}

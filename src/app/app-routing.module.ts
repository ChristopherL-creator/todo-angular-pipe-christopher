import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';

const routes: Routes = [
  {path: 'todo', component: ListComponent, data: {isActive: true}},
  {path: 'done', component: ListComponent, data: {isActive: false}},
  {path: 'todo/:id', component: TodoDetailComponent}, 
  {path: 'new', component: TodoDetailComponent},
  {path: '', redirectTo: '/todo', pathMatch: 'full'},
  {path: '**', redirectTo: '/todo'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

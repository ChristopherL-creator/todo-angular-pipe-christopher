import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { TodoComponent } from './components/todo/todo.component';
import { FormsModule } from '@angular/forms';
import { EpochFormatterPipe } from './pipes/epoch-formatter/epoch-formatter.pipe';
import { PriorityColorPipe } from './pipes/priority-color/priority-color.pipe';
import { TagsStringPipe } from './pipes/tags-string/tags-string.pipe';
import { PrioritySortPipe } from './pipes/priority-sort/priority-sort.pipe';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TodoComponent,
    EpochFormatterPipe,
    PriorityColorPipe,
    TagsStringPipe,
    PrioritySortPipe,
    TodoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

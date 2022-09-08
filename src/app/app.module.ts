import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { TodoListComponent } from './Components/todo-list/todo-list.component';
import { TodoDetailComponent } from './Components/todo-detail/todo-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    TodoListComponent,
    TodoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
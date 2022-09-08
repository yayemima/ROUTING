import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './Components/todo-list/todo-list.component';
import { TodoDetailComponent } from './Components/todo-detail/todo-detail.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';

const routes: Routes = [
  { path: 'todoList', component: TodoListComponent },
  { path: 'todoDetail/:id', component: TodoDetailComponent },
  { path: '', redirectTo: '/todoList', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

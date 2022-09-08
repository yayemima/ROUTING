import { Injectable } from '@angular/core';
import { Todo } from '../interface/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  taskList: Todo[] = [
    {task: 'Wash dishes', isFinished: false, id: 1},
    {task: 'Sweep floor', isFinished: true, id: 2},
    {task: 'Buy groceries', isFinished: true, id: 3},
    {task: 'Do laundry', isFinished: false, id: 4},
    {task: 'Rearrange furniture', isFinished: false, id: 5},
    {task: 'Clean bedroom', isFinished: false, id: 6}
  ];

  constructor() { }

  getAllTodos() : Todo[] {
    return this.taskList;
  }

  getTodoById(id:number) : (Todo | undefined) {
    return this.taskList.find(obj => { return obj.id == id});
  }
}

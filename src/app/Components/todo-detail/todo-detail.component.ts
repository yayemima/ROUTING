import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/interface/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  todo:Todo | undefined;
  id: number = 0;

  constructor(private service:TodoService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
      this.getTodoById();
    });

    /*
    const routeParams = this.route.snapshot.paramMap;
    this.id = Number(routeParams.get('id'));
    */
  }

  getTodoById(){
    this.todo = this.service.getTodoById(this.id);
  }

  navigateToHome(){
    this.router.navigate(['todoList']);
  }
}
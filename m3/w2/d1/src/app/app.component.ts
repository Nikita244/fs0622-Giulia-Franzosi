import { Component } from '@angular/core';
import { Todo } from './models/todo.interface';
import { getTodos } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Todo';
  myTodos!:Todo[]
  constructor(){
    getTodos().then(todos => {
      console.log(todos);
      this.myTodos = todos;
      this.completa();
      console.log(this.myTodos);

    });
  }
  completa() {
    this.myTodos = this.myTodos.map(element => {
      return { ...element, completed: true }
    });
  }
}

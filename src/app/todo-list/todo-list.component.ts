import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../actions';
import { IAppState } from '../store';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  // The @select decorator can be added to the property of any class or angular component/injectable.
  // It will turn the property into an observable which observes the Redux Store value which is selected by the decorator's parameter.
  @select() todos;

  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  addTodo(input) {
    if (!input.value) return;

    this.ngRedux.dispatch({ type: ADD_TODO, title: input.value });

    input.value = '';
  }

  toggleTodo(todo) {
    this.ngRedux.dispatch({ type: TOGGLE_TODO, id: todo.id });
  }

  removeTodo(todo) {
    this.ngRedux.dispatch({ type: REMOVE_TODO, id: todo.id });
  }
}

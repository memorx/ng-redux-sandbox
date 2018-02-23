import { Component } from '@angular/core';

// Redux
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from '../store';
import { CLEAR_TODOS } from '../actions';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css']
})
export class TodoDashboardComponent {
  // The @select decorator can be added to the property of any class or angular component/injectable.
  // It will turn the property into an observable which observes the Redux Store value which is selected by the decorator's parameter.
  @select() todos;
  @select() lastUpdate;

  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  clearTodos() {
    this.ngRedux.dispatch({ type: CLEAR_TODOS });
  }
}

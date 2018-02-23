import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// Redux
import { NgRedux, NgReduxModule, DevToolsExtension } from 'ng2-redux';

import { AppComponent } from './app.component';
// Store
import { IAppState, rootReducer, INITIAL_STATE } from './store';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension){

    // Use chrome dev tools
    var enhancers = isDevMode() ? [devTools.enhancer()] : [];
    // Configuration of the store
    ngRedux.configureStore(rootReducer, INITIAL_STATE, [], enhancers);


  }
 }

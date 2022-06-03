import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../counter.actions';
@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
})
export class MyCounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
    //TODO: Connect this.count$ stream to the current count state
  }

  increment() {
    //TODO: Dispatch an increment action
    this.store.dispatch(increment());
  }

  decrement() {
    //TODO: Dispatch an decrement action
    this.store.dispatch(decrement());
  }

  reset() {
    //TODO: Dispatch an reset action
    this.store.dispatch(reset());
  }
}

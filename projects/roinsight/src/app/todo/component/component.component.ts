import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../state/todoe.state';

import { selectAllTodos, selectCompletedTodos, selectIncompleteTodos } from '../state/todo.selectors';

@Component({
  selector: 'ROI-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentComponent {
  allTodos$: Observable<Todo[]>;
  completedTodos$: Observable<Todo[]>;
  incompleteTodos$: Observable<Todo[]>;

  constructor(private store: Store) {
    this.allTodos$ = this.store.select(selectAllTodos);
    this.completedTodos$ = this.store.select(selectCompletedTodos);
    this.incompleteTodos$ = this.store.select(selectIncompleteTodos);
    // console.log(this.allTodos$)
  }

}

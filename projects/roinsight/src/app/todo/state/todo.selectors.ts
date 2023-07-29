import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EntityState } from '@ngrx/entity';
import { Todo } from './todoe.state';
import { todoAdapter } from './todo.reducer';

export const selectTodoState = createFeatureSelector<EntityState<Todo>>('todo');

export const selectAllTodos = createSelector(
  selectTodoState,
  todoAdapter.getSelectors().selectAll
);

export const selectCompletedTodos = createSelector(
  selectAllTodos,
  (todos: Todo[]) => todos.filter(todo => todo.completed)
);

export const selectIncompleteTodos = createSelector(
  selectAllTodos,
  (todos: Todo[]) => todos.filter(todo => !todo.completed)
);

export const selectTodoById = (id: string | number) => createSelector(
  selectAllTodos,
  (todos: Todo[]) => todos.find(todo => todo.id === id)
);

import { Action, createFeature, createReducer, on } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';

import * as TodoActions from './todo.actions';

import { Todo, TodoState } from './todoe.state';


export const todoAdapter = createEntityAdapter<Todo>();

export const initialState: TodoState = todoAdapter.getInitialState();

export const todoFeatureKey = 'todo';

export const reducer = createReducer(
  initialState,
  on(TodoActions.loadTodos, state => state),
  on(TodoActions.loadTodosSuccess, (state, { todos }) =>
    todoAdapter.setAll(todos, state)
  ),
  on(TodoActions.loadTodosFailure, (state, action) => state),
  on(TodoActions.addTodoSuccess, (state, { todo }) =>
    todoAdapter.addOne(todo, state)
  ),
  // on(TodoActions.updateTodoSuccess, (state, { update }) =>
  //   todoAdapter.updateOne({ id: update.id, changes: update.changes! }, state)
  // ),
  on(TodoActions.deleteTodoSuccess, (state, { id }) =>
    todoAdapter.removeOne(id, state)
  )
);

export const todoFeature = createFeature({
  name: todoFeatureKey,
  reducer,
});

export function todoReducer(state: TodoState | undefined, action: Action) {
  return reducer(state, action);
}
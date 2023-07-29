import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { AppState } from '../core/core.module';

import { todoReducer } from './state/todo.reducer';
import { TodoState } from './state/todoe.state';

export const FEATURE_NAME = 'Todos';
export const selectExamples = createFeatureSelector<TodosState>(FEATURE_NAME);
  
export const reducers: ActionReducerMap<TodosState> = {
    todos: todoReducer,
};

export interface TodosState {
  todos: TodoState;

}

export interface State extends AppState {
  examples: TodosState;
}

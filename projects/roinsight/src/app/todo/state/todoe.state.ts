import { EntityState } from '@ngrx/entity';

export interface Todo {
  id: string | number;
  title: string;
  description: string;
  completed: boolean;
  due_date: Date;
  changes?: Partial<Todo>;
}

export interface TodoState extends EntityState<Todo> {}

const todoState: TodoState = {
  ids: [],
  entities: {}
};
console.log(todoState.ids); // should output []


export const initialTodoState: TodoState = {
  ids: [],
  entities: {}
};

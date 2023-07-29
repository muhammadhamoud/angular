
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { TodoService } from '../todo.service';
import * as TodoActions from './todo.actions';

@Injectable()
export class TodoEffects {
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.loadTodos),
      mergeMap(() =>
        this.todoService.getTodos().pipe(
          map((todos) => TodoActions.loadTodosSuccess({ todos })),
          catchError((error) =>
            of(TodoActions.loadTodosFailure({ error }))
          )
        )
      )
    )
  );

  addTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.addTodo),
      mergeMap(({ todo }) =>
        this.todoService.addTodo(todo).pipe(
          map((newTodo) => TodoActions.addTodoSuccess({ todo: newTodo })),
          catchError((error) =>
            of(TodoActions.addTodoFailure({ error }))
          )
        )
      )
    )
  );

  // updateTodo$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(TodoActions.updateTodo),
  //     mergeMap(({ update }) =>
  //       this.todoService.updateTodo(update.id, update.changes).pipe(
  //         map(() => TodoActions.updateTodoSuccess({ update })),
  //         catchError((error) =>
  //           of(TodoActions.updateTodoFailure({ error }))
  //         )
  //       )
  //     )
  //   )
  // );

  deleteTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.deleteTodo),
      mergeMap(({ id }) =>
        this.todoService.deleteTodo(id).pipe(
          map(() => TodoActions.deleteTodoSuccess({ id })),
          catchError((error) =>
            of(TodoActions.deleteTodoFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private todoService: TodoService
  ) {}
}








// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { catchError, map, concatMap } from 'rxjs/operators';
// import { Observable, EMPTY, of } from 'rxjs';
// import * as TodoActions from './todo.actions';


// @Injectable()
// export class TodoEffects {

//   loadTodos$ = createEffect(() => {
//     return this.actions$.pipe( 

//       ofType(TodoActions.loadTodos),
//       concatMap(() =>
//         /** An EMPTY observable only emits completion. Replace with your own observable API request */
//         EMPTY.pipe(
//           map(data => TodoActions.loadTodosSuccess({ data })),
//           catchError(error => of(TodoActions.loadTodosFailure({ error }))))
//       )
//     );
//   });


//   constructor(private actions$: Actions) {}
// }

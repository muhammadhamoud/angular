import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as AddPropertyActions from './add-property.actions';


@Injectable()
export class AddPropertyEffects {

  loadAddPropertys$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(AddPropertyActions.loadAddPropertys),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => AddPropertyActions.loadAddPropertysSuccess({ data })),
          catchError(error => of(AddPropertyActions.loadAddPropertysFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions) {}
}

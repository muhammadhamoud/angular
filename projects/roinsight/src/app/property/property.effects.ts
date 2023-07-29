import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as PropertyActions from './property.actions';


@Injectable()
export class PropertyEffects {

  loadPropertys$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(PropertyActions.loadPropertys),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => PropertyActions.loadPropertysSuccess({ data })),
          catchError(error => of(PropertyActions.loadPropertysFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions) {}
}

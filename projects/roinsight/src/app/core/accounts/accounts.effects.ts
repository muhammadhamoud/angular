import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as AccountsActions from './accounts.actions';


@Injectable()
export class AccountsEffects {

  loadAccountss$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(AccountsActions.loadAccountss),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => AccountsActions.loadAccountssSuccess({ data })),
          catchError(error => of(AccountsActions.loadAccountssFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions) {}
}

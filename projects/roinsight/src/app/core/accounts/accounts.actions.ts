import { createAction, props } from '@ngrx/store';

export const loadAccountss = createAction(
  '[Accounts] Load Accountss'
);

export const loadAccountssSuccess = createAction(
  '[Accounts] Load Accountss Success',
  props<{ data: any }>()
);

export const loadAccountssFailure = createAction(
  '[Accounts] Load Accountss Failure',
  props<{ error: any }>()
);

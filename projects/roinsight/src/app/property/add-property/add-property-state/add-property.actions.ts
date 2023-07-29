import { createAction, props } from '@ngrx/store';

export const loadAddPropertys = createAction(
  '[AddProperty] Load AddPropertys'
);

export const loadAddPropertysSuccess = createAction(
  '[AddProperty] Load AddPropertys Success',
  props<{ data: any }>()
);

export const loadAddPropertysFailure = createAction(
  '[AddProperty] Load AddPropertys Failure',
  props<{ error: any }>()
);

import { createAction, props } from '@ngrx/store';

export const loadPropertys = createAction(
  '[Property] Load Propertys'
);

export const loadPropertysSuccess = createAction(
  '[Property] Load Propertys Success',
  props<{ data: any }>()
);

export const loadPropertysFailure = createAction(
  '[Property] Load Propertys Failure',
  props<{ error: any }>()
);

import { createFeature, createReducer, on } from '@ngrx/store';
import * as AddPropertyActions from './add-property.actions';

export const addPropertyFeatureKey = 'addProperty';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,
  on(AddPropertyActions.loadAddPropertys, state => state),
  on(AddPropertyActions.loadAddPropertysSuccess, (state, action) => state),
  on(AddPropertyActions.loadAddPropertysFailure, (state, action) => state),
);

export const addPropertyFeature = createFeature({
  name: addPropertyFeatureKey,
  reducer,
});


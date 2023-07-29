import { createFeature, createReducer, on } from '@ngrx/store';
import * as PropertyActions from './property.actions';

export const propertyFeatureKey = 'property';

export interface State {


}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,
  on(PropertyActions.loadPropertys, state => state),
  on(PropertyActions.loadPropertysSuccess, (state, action) => state),
  on(PropertyActions.loadPropertysFailure, (state, action) => state),
);

export const propertyFeature = createFeature({
  name: propertyFeatureKey,
  reducer,
});


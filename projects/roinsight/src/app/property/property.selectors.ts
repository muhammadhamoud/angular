import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProperty from './property.reducer';

export const selectPropertyState = createFeatureSelector<fromProperty.State>(
  fromProperty.propertyFeatureKey
);

import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAddProperty from './add-property.reducer';

export const selectAddPropertyState = createFeatureSelector<fromAddProperty.State>(
  fromAddProperty.addPropertyFeatureKey
);

import { createSelector } from '@ngrx/store';
import { PropertyTypeState } from './add-property-type.reducer';

export const selectPropertyTypeState = (state: { propertyTypes: PropertyTypeState }) => state.propertyTypes;

export const selectPropertyTypes = createSelector(
  selectPropertyTypeState,
  (state) => state.propertyTypes
);

export const selectSelectedPropertyType = createSelector(
  selectPropertyTypeState,
  (state) => state.selectedPropertyType
);

export const selectPropertyTypesError = createSelector(
  selectPropertyTypeState,
  (state) => state.error
);

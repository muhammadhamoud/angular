import { createReducer, on, Action } from '@ngrx/store';
import { PropertyType } from './add-property-type.model';
import * as PropertyTypeActions from './add-property-type.actions';

export interface PropertyTypeState {
  propertyTypes: PropertyType[];
  selectedPropertyType: PropertyType | null;
  error: any;
}

export const initialState: PropertyTypeState = {
  propertyTypes: [],
  selectedPropertyType: null,
  error: null,
};

export const propertyTypeReducer = createReducer(
  initialState,

  on(PropertyTypeActions.fetchPropertyTypesSuccess, (state, { propertyTypes }) => ({
    ...state,
    propertyTypes: propertyTypes,
    error: null,
  })),

  on(PropertyTypeActions.fetchPropertyTypesFailure, (state, { error }) => ({
    ...state,
    propertyTypes: [],
    error: error,
  })),

  on(PropertyTypeActions.createPropertyTypeSuccess, (state, { propertyType }) => ({
    ...state,
    propertyTypes: [...state.propertyTypes, propertyType],
    error: null,
  })),

  on(PropertyTypeActions.createPropertyTypeFailure, (state, { error }) => ({
    ...state,
    error: error,
  })),

  on(PropertyTypeActions.getPropertyTypeSuccess, (state, { propertyType }) => ({
    ...state,
    selectedPropertyType: propertyType,
    error: null,
  })),

  on(PropertyTypeActions.getPropertyTypeFailure, (state, { error }) => ({
    ...state,
    selectedPropertyType: null,
    error: error,
  }))
);

export function reducer(state: PropertyTypeState | undefined, action: Action): PropertyTypeState {
  return propertyTypeReducer(state, action);
}

import { createAction, props } from '@ngrx/store';
import { PropertyType } from './add-property-type.model';

// Fetch property types
export const fetchPropertyTypes = createAction('[PropertyTypes] Fetch Property Types');

export const fetchPropertyTypesSuccess = createAction(
  '[PropertyTypes] Fetch Property Types Success',
  props<{ propertyTypes: PropertyType[] }>()
);

export const fetchPropertyTypesFailure = createAction(
  '[PropertyTypes] Fetch Property Types Failure',
  props<{ error: any }>()
);

// Create property type
export const createPropertyType = createAction(
  '[PropertyTypes] Create Property Type',
  props<{ propertyType: PropertyType }>()
);

export const createPropertyTypeSuccess = createAction(
  '[PropertyTypes] Create Property Type Success',
  props<{ propertyType: PropertyType }>()
);

export const createPropertyTypeFailure = createAction(
  '[PropertyTypes] Create Property Type Failure',
  props<{ error: any }>()
);

// Get property type by ID
export const getPropertyType = createAction(
  '[PropertyTypes] Get Property Type',
  props<{ id: string | number }>()
);

export const getPropertyTypeSuccess = createAction(
  '[PropertyTypes] Get Property Type Success',
  props<{ propertyType: PropertyType }>()
);

export const getPropertyTypeFailure = createAction(
  '[PropertyTypes] Get Property Type Failure',
  props<{ error: any }>()
);

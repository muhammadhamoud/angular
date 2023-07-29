import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { PropertyTypeService } from './add-property-type.service';
import {
  createPropertyType,
  createPropertyTypeFailure,
  createPropertyTypeSuccess,
  fetchPropertyTypes,
  fetchPropertyTypesFailure,
  fetchPropertyTypesSuccess,
  getPropertyType,
  getPropertyTypeFailure,
  getPropertyTypeSuccess,
} from './add-property-type.actions';

@Injectable()
export class PropertyTypeEffects {
  constructor(
    private actions$: Actions,
    private propertyTypeService: PropertyTypeService
  ) {}

  fetchPropertyTypes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchPropertyTypes),
      mergeMap(() =>
        this.propertyTypeService.getPropertyTypes().pipe(
          map((propertyTypes) =>
            fetchPropertyTypesSuccess({ propertyTypes })
          ),
          catchError((error) =>
            of(fetchPropertyTypesFailure({ error }))
          )
        )
      )
    )
  );

  createPropertyType$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createPropertyType),
      mergeMap(({ propertyType }) =>
        this.propertyTypeService.createPropertyType(propertyType).pipe(
          map((propertyType) =>
            createPropertyTypeSuccess({ propertyType })
          ),
          catchError((error) =>
            of(createPropertyTypeFailure({ error }))
          )
        )
      )
    )
  );

  getPropertyType$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPropertyType),
      mergeMap(({ id }) =>
        this.propertyTypeService.getPropertyType(id).pipe(
          map((propertyType) =>
            getPropertyTypeSuccess({ propertyType })
          ),
          catchError((error) =>
            of(getPropertyTypeFailure({ error }))
          )
        )
      )
    )
  );
}

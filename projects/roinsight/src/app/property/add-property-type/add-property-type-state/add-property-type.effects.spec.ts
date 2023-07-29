import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AddPropertyTypeEffects } from './add-property-type.effects';

describe('AddPropertyTypeEffects', () => {
  let actions$: Observable<any>;
  let effects: AddPropertyTypeEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AddPropertyTypeEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(AddPropertyTypeEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

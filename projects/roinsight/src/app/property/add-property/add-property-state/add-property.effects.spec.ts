import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AddPropertyEffects } from './add-property.effects';

describe('AddPropertyEffects', () => {
  let actions$: Observable<any>;
  let effects: AddPropertyEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AddPropertyEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(AddPropertyEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

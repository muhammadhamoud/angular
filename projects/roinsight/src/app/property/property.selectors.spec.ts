import * as fromProperty from './property.reducer';
import { selectPropertyState } from './property.selectors';

describe('Property Selectors', () => {
  it('should select the feature state', () => {
    const result = selectPropertyState({
      [fromProperty.propertyFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});

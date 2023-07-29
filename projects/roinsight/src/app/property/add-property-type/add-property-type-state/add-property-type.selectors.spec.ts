import * as fromAddPropertyType from './add-property-type.reducer';
import { selectAddPropertyTypeState } from './add-property-type.selectors';

describe('AddPropertyType Selectors', () => {
  it('should select the feature state', () => {
    const result = selectAddPropertyTypeState({
      [fromAddPropertyType.addPropertyTypeFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});

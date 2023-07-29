import * as fromAddProperty from './add-property.reducer';
import { selectAddPropertyState } from './add-property.selectors';

describe('AddProperty Selectors', () => {
  it('should select the feature state', () => {
    const result = selectAddPropertyState({
      [fromAddProperty.addPropertyFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});

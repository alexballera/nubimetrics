import { render } from '@testing-library/react';

import DetailRecipe from './detail-recipe';

describe('DetailRecipe', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DetailRecipe />);
    expect(baseElement).toBeTruthy();
  });
});

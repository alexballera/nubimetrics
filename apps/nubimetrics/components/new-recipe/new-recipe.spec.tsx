import { render } from '@testing-library/react';

import NewRecipe from './new-recipe';

describe('NewRecipe', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NewRecipe />);
    expect(baseElement).toBeTruthy();
  });
});

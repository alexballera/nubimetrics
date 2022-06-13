import { render } from '@testing-library/react';

import CustomRatings from './custom-ratings';

describe('CustomRatings', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CustomRatings />);
    expect(baseElement).toBeTruthy();
  });
});

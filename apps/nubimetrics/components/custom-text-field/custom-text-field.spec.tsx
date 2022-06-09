import { render } from '@testing-library/react';

import CustomTextField from './custom-text-field';

describe('CustomTextField', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CustomTextField />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import SelectRadioButton from './select-radio-button';

describe('SelectRadioButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SelectRadioButton />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import IOSSwitch from './ios-switch';

describe('IOSSwitch', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<IOSSwitch />);
    expect(baseElement).toBeTruthy();
  });
});

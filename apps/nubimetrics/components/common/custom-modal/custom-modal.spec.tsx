import { render } from '@testing-library/react';

import CustomModal from './custom-modal';

describe('CustomModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CustomModal />);
    expect(baseElement).toBeTruthy();
  });
});

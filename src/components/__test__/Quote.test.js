import React from 'react';
import { render } from '@testing-library/react';
import Quote from '../Quote';

describe('Quote', () => {
  it('renders correctly', () => {
    const { container } = render(<Quote />);
    expect(container).toMatchSnapshot();
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import Calculator from '../Calculator';

describe('Calculator', () => {
  it('matches the snapshot', () => {
    const { container } = render(<Calculator />);
    expect(container).toMatchSnapshot();
  });
});

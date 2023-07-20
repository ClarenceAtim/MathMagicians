import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../Navbar';

describe('Navbar', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Router>
        <Navbar />
      </Router>,
    );
    expect(container).toMatchSnapshot();
  });

  it('activates the correct link when clicked', () => {
    const { getByText } = render(
      <Router>
        <Navbar />
      </Router>,
    );

    getByText('Home');
    getByText('Calculator');
    getByText('Quote');
  });
});

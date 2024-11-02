import React from 'react';
import { render, screen } from '@testing-library/react';
import YourComponent from './YourComponent';

test('renders learn react link', () => {
  render(<YourComponent />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


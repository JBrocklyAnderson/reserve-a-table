import { render, screen } from '@testing-library/react';
import App from './App';

test('App renders the Home link in the navbar', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText('Home');
  expect(linkElement).toBeInTheDocument();
});

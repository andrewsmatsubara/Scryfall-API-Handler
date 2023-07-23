import {screen, render} from '@testing-library/react';
import App from './App';

describe('has working components', () => {
  test('there is a input component', () => {
    render(<App />);

    expect(screen.getByTestId('card-search-input')).toBeInTheDocument();
  });

  test('there is one or more <Card> components', () => {
    render(<App />);

    expect(screen.getByTestId('card')).toBeInTheDocument();
  })
});
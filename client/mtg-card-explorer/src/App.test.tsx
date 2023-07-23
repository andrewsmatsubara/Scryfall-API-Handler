import {screen, render} from '@testing-library/react';
import App from './App';

describe('has working components', () => {
  render(<App/>);

  test('there is a input component', () => {
    const input = screen.getByRole('textbox');

    expect(input).toBeInTheDocument();
  });

  test('there is one or more <Card> components', () => {
    expect(screen.getByTestId('card')).toBeInTheDocument();
  })
});
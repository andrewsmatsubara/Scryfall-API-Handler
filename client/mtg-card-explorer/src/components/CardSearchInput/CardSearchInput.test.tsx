import {screen, render, fireEvent} from '@testing-library/react';
import {CardSearchInput} from "./CardSearchInput";

describe('input component behavior', () => {
  render(<CardSearchInput/>);  

  const input = screen.getByRole('textbox') as HTMLInputElement;

  test('onchange function is working', () => {
    fireEvent.change(input, {target: {value: 'abc'}});

    expect(input.value).toBe('abc');
  });

  test('onchange calls our endpoint as it changes name parameter', () => {
    fireEvent.change(input, {target: {value: 'nico'}});
  });
});

import {screen, render, fireEvent} from '@testing-library/react';
import {CardSearchInput} from "./CardSearchInput";

describe('input component behavior', () => {
  render(<CardSearchInput/>);  

  test('onchange function is working', () => {
    const input = screen.getByRole('textbox', {name : 'card-name'});

    fireEvent.change(input, {target: {value: 'abc'}});
  });
});

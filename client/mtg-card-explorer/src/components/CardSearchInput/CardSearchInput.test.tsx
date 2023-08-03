import {screen, render, fireEvent} from '@testing-library/react';
import {CardSearchInput} from "./CardSearchInput";

describe('input component behavior', () => {
  const getCardByName = jest.fn();
  const setCardName = jest.fn();
  const setOpen = jest.fn();

  render(
    <CardSearchInput
      loading={true}
      options={[]}
      getCardByName={getCardByName}
      setCardName={setCardName}
      open={true}
      setOpen={setOpen}
    />);  

  const input = screen.getByRole('combobox') as HTMLInputElement;

  test('onchange function is working', () => {
    fireEvent.change(input, {target: {value: 'abc'}});

    expect(input.value).toBe('abc');
  });

  test('onchange calls our endpoint as it changes name parameter', () => {
    fireEvent.change(input, {target: {value: 'nico'}});
  });
});

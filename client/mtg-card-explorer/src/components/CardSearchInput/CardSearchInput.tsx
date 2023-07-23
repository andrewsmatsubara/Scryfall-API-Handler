import {ChangeEvent, useState} from "react";

/**
 * input used by the user to search a card by name
 *
 * @return {JSX.Element} the input component itself
 * 
 * @author Andrews Matsubara
 */
export function CardSearchInput(): JSX.Element {
  const [cardName, setCardName] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setCardName(e.target.value);
  }

  return (
    <input
      type="text"
      name="card-name"
      value={cardName}
      onChange={(e) => handleChange(e)}
    />
  )
}

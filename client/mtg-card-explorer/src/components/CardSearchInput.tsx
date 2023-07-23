import {ChangeEvent, useState} from "react";

export function CardSearchInput() {
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

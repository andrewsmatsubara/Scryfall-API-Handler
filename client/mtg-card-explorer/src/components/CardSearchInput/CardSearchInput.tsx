import { Autocomplete, TextField } from "@mui/material";
import CardService from "../../service/CardService";
import { ChangeEvent, useState } from 'react';

/**
 * MUI input used by the user to search a card by name
 *
 * @return {JSX.Element} the input component itself
 * 
 * @author Andrews Matsubara
 */
export function CardSearchInput(): JSX.Element {
  const [options, setOptions] = useState<string[]>([]);
  const cardService = new CardService();
  /**
   * 
   */
  async function getCardByName(userInputCardName: string): Promise<void> {
    try {
      let cardNames: Array<string> = [];
      // please write the correct type in data variable after constructing a card interface
      const data: Array<any> = await cardService.getCardByName(userInputCardName);
      
      data.map((cardName) => cardNames.push(cardName.name));
      setOptions(cardNames);
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  }

  return (
    <Autocomplete
      freeSolo
      renderInput={(params) => <TextField {...params} label="Card" />}
      options={options}
      onInputChange={(event: any, value: string) => {
        getCardByName(value);
      }}
      getOptionLabel={(option) => option}
    />
  )
}

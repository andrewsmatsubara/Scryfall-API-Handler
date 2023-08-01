import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import CardService from "../../service/CardService";
import { useState } from 'react';

/**
 * MUI input used by the user to search a card by name
 *
 * @return {JSX.Element} the input component itself
 * 
 * @author Andrews Matsubara
 */
export function CardSearchInput(): JSX.Element {
  const [options, setOptions] = useState<string[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [cardName, setCardName] = useState<string>();

  const loading: boolean = options.length === 0 && cardName !== undefined && cardName !== '';
  const cardService = new CardService();

  /**
   * method to get an array of cards by autocompleting names
   * 
   * @param {string} userInputCardName 
   * 
   * @author Andrews Matsubara
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
      renderInput={(params) => (
        <TextField
          {...params}
          label="Card"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
      filterOptions={(option) => option}
      options={options}
      onInputChange={(event: any, value: string) => {
        getCardByName(value);
        setCardName(value);
      }}
      getOptionLabel={(option) => option}
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      loading={loading}
    />
  )
}

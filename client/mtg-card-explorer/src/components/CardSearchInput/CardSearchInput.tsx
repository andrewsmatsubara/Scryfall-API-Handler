import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import { SyntheticEvent } from "react";

type CardSearchInputProps = {
  loading: boolean,
  options: string[],
  getCardByName: Function,
  setCardName: Function,
  open: boolean,
  setOpen: Function
}

/**
 * MUI input used by the user to search a card by name
 *
 * @return {JSX.Element} the input component itself
 * 
 * @author Andrews Matsubara
 */
export function CardSearchInput({loading, options, getCardByName, setCardName, open, setOpen}: CardSearchInputProps): JSX.Element {
  

  return (
    <Autocomplete
      className="card-search-input"
      sx={{
        display: "flex",
        minWidth: "10%",
        width: "50%",
        margin: "5%"
      }}
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
      onInputChange={(event: SyntheticEvent<Element, Event>, value: string) => {
        if (value.length >= 2) {
          getCardByName(value);
        }
      }}
      onChange={(event: SyntheticEvent<Element, Event>, value: string | null) => {
        if (value) {
          setCardName(value);
        }
      }}
      getOptionLabel={(option: string) => option}
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      loading={loading}
    />
  )
}

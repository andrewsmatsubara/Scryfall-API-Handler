import { useState } from 'react';
import './App.css';
import { CardSearchInput } from './components/CardSearchInput/CardSearchInput';
import { Card } from './components/Card/Card';
import { fetchCardByName } from './service/CardService';

/**
 * main component
 * 
 * @return {JSX.Element}
 * 
 * @author Andrews Matsubara
 */
function App(): JSX.Element {
  const [options, setOptions] = useState<string[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [cardName, setCardName] = useState<string>("");

  const loading: boolean = options.length === 0 && cardName !== undefined && cardName !== '';

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
      const data: Array<any> = await fetchCardByName(userInputCardName);
      
      data.map((cardName) => cardNames.push(cardName.name));
      setOptions(cardNames);
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  }

  return (
    <main className="App">
      <CardSearchInput
        loading={loading}
        options={options}
        getCardByName={getCardByName}
        setCardName={setCardName}
        open={open}
        setOpen={setOpen}
      />
      {cardName ? <Card cardName={cardName}/> : <div></div>}
    </main>
  );
}

export default App;

import './App.css';
import { CardList } from './components/CardList/CardList';
import { CardSearchInput } from './components/CardSearchInput/CardSearchInput';

/**
 * main component
 * 
 * @return {JSX.Element}
 * 
 * @author Andrews Matsubara
 */
function App() {
  return (
    <div className="App">
      <CardSearchInput/>
      <CardList/>
    </div>
  );
}

export default App;

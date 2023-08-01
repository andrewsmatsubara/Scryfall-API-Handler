import axios from "axios";

/**
 * 
 */
export default class CardService {
  /**
   * 
   */
  async getCardByName(userInputCardName: string): Promise<Array<Object>> {
    const url = `http://localhost:8080/cards?name=${userInputCardName}`;
    const response = await axios.get(url);
    const data = response.data;

    return data;
  }
}
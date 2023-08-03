import axios from "axios";

/**
 * service to fetch card by user input
 * 
 * @param {string} userInputCardName
 *
 * please change any type for another
 * @return {Promise<Array<any>>} response with card data
 *
 * @author Andrews Matsubara
 */
export default async function fetchCardByName(userInputCardName: string): Promise<Array<any>> {
  const url = `http://localhost:8080/cards?name=${userInputCardName}`;
  const response = await axios.get(url);
  const data = response.data;

  return data;
}

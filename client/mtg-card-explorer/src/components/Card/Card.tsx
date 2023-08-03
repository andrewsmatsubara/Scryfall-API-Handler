import { useEffect, useState } from "react";
import fetchCardByName from "../../service/CardService";

type CardProps = {
  cardName: string
}

/**
 * component that represents the card found by user's input
 * 
 * @return {JSX.Element}
 * 
 * @author Andrews Matsubara
 */
export function Card({cardName}: CardProps): JSX.Element {
  const [cardInfo, setCardInfo] = useState<any[]>([]);

  /**
   * @inheritdoc
   */
  useEffect(() => {
    getCardByName();
  }, [cardName]);

  /**
   * method that searches for a card through card name passed by props
   *
   * @author Andrews Matsubara
   */
  async function getCardByName(): Promise<void> {
    try {
      const cardData: any[] = await fetchCardByName(cardName);
  
      setCardInfo(cardData);
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  }

  return (
    <>
      {cardInfo.length !== 0 ? <img src={cardInfo[0].image_uris.small} alt={`${cardInfo[0].name} card`}/> : <div></div>}
    </>
  );
}
import React from "react";
import CardDisplay from "../CardDisplay/cardDisplay";



function CardsList(props) {

  props.cards.map(card => { 
      return <li key={card.id}>
          {card.question} - {card.answer}</li>
  });

  return(
      <div className="cards-list">
              <ul>
                  <CardDisplay cards={props.cards} collections={props.collections}
                              collectionIsSelected={props.collectionIsSelected}/>
              </ul>  
      </div>
  )
}

export default CardsList;


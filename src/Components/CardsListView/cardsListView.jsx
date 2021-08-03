import React from "react";

function CardList(props) {
  let cardList = props.cards.map((card) => {
    if (props.card === card.id) {
      return (
        <li
          className="collection-list-item-active"
          onClick={() => props.getAllCards(card.id)}
          key={card.id}
        >
          {card.collection}
        </li>
      );
    } else {
      return (
        <li
          className="card-list-item"
          onClick={() => props.getAllCards(card.id)}
          key={card.id}
        >
          {card.answer}
        </li>
      );
    }
  });
  return (
    <div className="card-List">
      <h2>Card</h2>
      <ul> {cardList}</ul>
    </div>
  );
}
export default CardList;

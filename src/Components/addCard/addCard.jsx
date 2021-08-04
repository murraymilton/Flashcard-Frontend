import React, { useState } from "react";
import axios from "axios";
import './addCard.css';
import useCreate from "../useCreate.jsx";

const AddCard = (props) => {
  const { values, handleChange, handleSubmit } = useCreate(CreateCard);
  const [card, setCard] = useState(props.cards);

  async function CreateCard(){
    let CardValues = { ...values};
    console.log("Card Values: ", CardValues);
      try {
      let res = await axios.post(
        `http://127.0.0.1:8000/collection/card/new/`,
        CardValues
      );
      setTimeout(3000)
      setCard(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <form
        className="form-control form-control-sm"
        onSubmit={handleSubmit}
        className="container">
        <div className="row col-align-left">
          <div className="form-group">
            <div className="col-md-4">
              <label>Answer</label>
              <input
                className="form-control"
                type="text"
                name="answer"
                value={values.answer}
                onChange={handleChange}
              />
            </div>
      
            <div className="col-md-4">
              <label>Question:</label>
              <input
                className="form-control"
                type="text"
                name="question"
                value={values.question}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4">
              <label>Colletions:</label>
              <input
                className="form-control"
                type="number"
                min='1'
                name="collection"
                value={values.collection}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-4">
              <button type="submit" className="Add Card">
                Add Card
              </button>
            </div>
          </div>
        </div>
      </form>

    </div>
)
}

export default AddCard;

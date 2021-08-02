import React, { useState } from "react";
import axios from "axios";
import useCreate from "../useCreate.jsx";

const AddCard = (props) => {
  const [card, setCard] = useState(props.card);
  const { values, handleChange, handleSubmit } = useCreate(CreateCard);

  async function CreateCard() {
    const CardValues = { ...values, collection: props.collection};
    try {
      let res = await axios.post(
        `http://127.0.0.1:8000/collection/card/collection}/new/`,
        AddCard
      );
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
        className="container"
      >
        <div className="row col-align-left">
          
          <div className="form-group">
            <div className="col-md-4">
              <label>Answer</label>
              <input
                className="form-control"
                type="text"
                name="Answer"
                value={values.answer}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-4">
              <label>Question:</label>
              <input
                className="form-control"
                type="text"
                name="Question"
                value={values.question}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4">
              <label>Colletions:</label>
              <input
                className="form-control"
                type="text"
                name="Colletions"
                value={values.collections}
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
  );
};
export default AddCard;

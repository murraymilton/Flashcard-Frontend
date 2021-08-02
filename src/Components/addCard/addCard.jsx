import React, { useState } from "react";
import axios from "axios";
import useCreate from "../useCreate.jsx";

const AddCard = (props) => {
  const [card, setCard] = useState({ question, answer, collection });
  const { values, handleChange, handleSubmit } = useCreate();

  CreateCard = async (props) => {
    const CardValues = { ...values, collection: props.collections };
    try {
      let res = await axios.post(
        `http://127.0.0.1:8000/collections/cards/1/new/`,
        AddCard
      );
      setCard(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form
        class="form-control form-control-sm"
        onSubmit={handleSubmit}
        className="container"
      >
        <div className="row col-align-left">
          <div></div>
          <div className="form-group">
            <div className="col-md-4">
              <label>Answer</label>
              <input
                className="form-control"
                type="text"
                name="Answer"
                value={answer}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-4">
              <label>Question:</label>
              <input
                className="form-control"
                type="text"
                name="Question"
                value={question}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4">
              <label>Colletions:</label>
              <input
                className="form-control"
                type="text"
                name="Colletions"
                value={collections.id}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-4">
              <input type="submit" value="Add" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default AddCard;

import React, { useState } from "react";
import axios from "axios";
import useCreate from "../useCreate.jsx";

const AddCard = (props) => {
  const { values, handleChange, handleSubmit } = useCreate(createCard);
  const [card, setCard] = useState(props.cards);

  async function createCard() {
      const addCard = {...values, collection: props.collectionIsSelected};
      try{
          let response = await axios.post(`http://127.0.0.1:8000/collection/card/${props.collectionIsSelected}/new/`, addCard)
          setCard(response.data)
      }
      catch (error) {
          console.log(error);
      }
  } 

  return (
    <div className="add-card">
        <h1>Add Card: </h1>
        <form onSubmit={handleSubmit}>
            <label>
                question:
                <input
                    type="text" 
                    name="term"
                    onChange={handleChange}
                    value={values.question || '' }
                    required={true}
                />
            </label>
            <label>
                answer: 
                <input
                    type="text" 
                    name="definition"
                    onChange={handleChange}
                    value={values.answer || '' }
                    required={true}
                />
            </label>
            <button className="btn btn-light" type="submit">Submit</button>
        </form>
    </div>
)
}

export default AddCard;

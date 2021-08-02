import React, { useState } from 'react';
import useForm from '../UseForm/useForm';
import axios from 'axios';
import './createCardForm.css';

const CreateCardForm = (props) => {
    const { values, handleChange, handleSubmit } = useForm(createCard);
    const [card, setCard] = useState(props.cards);

    async function createCard() {
        const addCard = {...values, collection: props.collectionIsSelected};
        try{
            let response = await axios.post(`http://127.0.0.1:8000/collection/card/${props.collectionIsSelected}/new/`, addCard)
            setCard(response.data)
        }
        catch (err) {
            console.log(err);
        }
    }

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

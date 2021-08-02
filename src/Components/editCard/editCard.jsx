import React, { useState } from 'react';
import useCreate from '../useCreate';
import './editCard.css';
import axios from 'axios';

const EditCard = (props) => {
    const {values, handleChange, handleSubmit} = 
    useCreate(() => EditCard(props.cards.id, values));
    const [card, setCard] = useState(props.cards);

    async function editCard(id, values) {
        const editCards = { collection: props.cards.collection, ...values};
        try{
            let res = await axios.put(`http://127.0.0.1:8000/collection/card/${id}/editCard/`, editCards)
            setCard(res.data)
        }
        catch (error) {
            alert(error);
        }
    }
    
    return(
        <div className="modify-card-form">
            <h3>Make Revisions to Card</h3>
            <form class="row gy-2 gx-3 align-items-center" onSubmit={handleSubmit}>
                <div>
                    <label class="visually-hidden" for="autoSizingInput">Question
                    <input type="text" class="form-control" id="autoSizinInput" placeholder={props.cards.question}
                    onChange={handleChange} value={values.questions || ''} required={true}/>
                    </label><label>Definition/Anwser 
                        <input type="text" placeholder={props.cards.answer} onChange={handleChange}
                        value={values.answer || ''} required={true} />
                    </label>
                    <button type="submit" class="btn btn-outline-primary">Submit</button>   
                </div>
            </form>
        </div>
    )
}
export default EditCard;
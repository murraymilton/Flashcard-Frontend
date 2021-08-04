import React, { useState } from 'react';
import useCreate from '../useCreate';
import axios from 'axios';

const EditCard = (props) => {
    const {values, handleChange, handleSubmit, setValues} = 
    useCreate(() => editCardSubmit(props.cards.id, values));
    const [show, setShow] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => {setShow(true); 
        setValues({question: props.question, answer: props.answer, collection: props.currentCollection})};

    async function editCardSubmit(id, values) {
        let collectionId =(props.collection.filter
            (item => {return item.name === values.collection}))[0].id;
            let newCard = {...values, collection: collectionId}
        try{
            let res = await axios.put(`http://127.0.0.1:8000/collection/card/${id}/editCard/`, newCard)
            setSubmitted(true)
            setTimeout(() => {setShow(false); 
                setSubmitted(false); props.setNewCards(res.data)}, 500);
        }
        catch (error) {
            alert(error);
        }
    }
    
    
    return(
    <div className="edit-card-form">
        <h1>Edit card: </h1>
        <form onSubmit={handleSubmit}>
            <label>Question:<input type="text" name="question"placeholder={props.cards.question}onChange={handleChange}value={values.question }required={true} />
            </label>
                <label>
                    Answer 
                    <input type="text" name="answer"placeholder={props.cards.answer}onChange={handleChange}value={values.answer }required={true}/>
                </label>
            <button className="btn btn-primary" type="submit">Submit</button>
        </form>
    </div>
    )
}
export default EditCard;      
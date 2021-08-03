import React, { useState } from 'react';
import useCreate from '../useCreate';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import './editCard.css';
import axios from 'axios';

const EditCard = (props) => {
    const {values, handleChange, handleSubmit, setValues} = useCreate(editCardSubmit);
    const [show, setShow] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const [card, setCard] = useState(props.cards); // Will Handle the revisions view to card are user edit. ( useEffect needed?)- verify in subcomp

    const handleClose = () => setShow(false);
    const handleShow = () => {setShow(true); 
        setValues({question: props.question, answer: props.answer, collection: props.currentCollection})};

    async function editCardSubmit(id, values) {
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
        <Modal>
            <Modal.Header closeButton>
                <Modal.Title>Edit Cards</Modal.Title>
            </Modal.Header>
            <Modal.Body>
        <div className="edit-card-form">
            <h3>Edit Card</h3>
            <form onSubmit={handleSubmit}>
                <Form.Group controlId="question">
                    <Form.Label>Question</Form.Label>
                    <Form.Control type="text" class="form-control" id="autoSizinInput" placeholder={props.cards.question}
                    onChange={handleChange} value={values.questions} required={true}/>
                </Form.Group>
                <Form.Group controlId="answer">
                    <Form.Label>Answer</Form.Label>
                    <Form.Control type="text" placeholder={props.cards.answer} onChange={handleChange}value={values.answer} required={true} />
                    </Form.Group>
                <div className="row">
                    <div className="col-md-8 col-0"></div>
                    <button type="submit" class="btn btn-outline-primary">Submit</button>   
                </div>
            </form>
        </div>
        </Modal.Body>
    </Modal>
    )
}
export default EditCard;      
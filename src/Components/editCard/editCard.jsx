import React, { useState } from 'react';
import useCreate from '../useCreate';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
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
        <>
        <Button size='sm' variant="outline-warning" onClick={handleShow}>
            Edit
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Edit Flashcard</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="word">
                        <Form.Label>Question</Form.Label>
                        <Form.Control type="text" name='question'onChange={handleChange} value={values.question} required={true}/>
                    </Form.Group>
                    <Form.Group controlId="answer">
                        <Form.Label>Answer</Form.Label>
                        <Form.Control type="text" name='answer' onChange={handleChange} value={values.answer} required={true}/>
                    </Form.Group>
                    <Form.Group controlId="answer">
                        <Form.Label>Collection</Form.Label>
                        <Form.Control as="select" name='collection' onChange={handleChange} value={values.currentCollection} required={true}>
                            {/* {generateCollectionOptions(props.currentCollection)} */}
                        </Form.Control>
                    </Form.Group>
                    <div className='row'>
                        <div className='col-md-8 col-0'></div>
                        <Button variant="secondary" className='mr-2' onClick={handleClose}>
                            Close
                        </Button>
                        {submitted ? <h4 className='text-center'>Done!</h4> : <Button type='submit' variant="primary">Submit</Button>}  
                        
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    </>
    )
}
export default EditCard;      
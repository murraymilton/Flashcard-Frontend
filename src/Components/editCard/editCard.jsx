import React, { useState } from 'react';
import useCreate from '../useCreate';
import axios from 'axios';

const EditCard = (props) => {
    const {values, handleChange, handleSubmit} = 
    useCreate(() => EditCard(props.cards.id, values));
    const [card, setCard] = useState(props.cards);
    return(
        <div>

        </div>
    )
}
export default EditCard;
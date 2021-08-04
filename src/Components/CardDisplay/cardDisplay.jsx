import React, {useState} from 'react';
import EditCard from '../editCard/editCard';


function CardDisplay(props) {
    
    const [cardNumber, setCardNumber] = useState(0)

    if(props.cards.length === 0){
        return('')
    }

    else{
        function showNextCard(){
            let currentCardNumber = cardNumber;
            currentCardNumber++;
            if(currentCardNumber === props.cards.length){
                currentCardNumber = 0
            }
            setCardNumber(currentCardNumber)
        }

        function showPreviousCard(){
            let currentCardNumber = cardNumber;
            currentCardNumber--;
            if(currentCardNumber < 0){
                currentCardNumber = props.cards.length -1
            }
            setCardNumber(currentCardNumber)
        }

        return(

            /*Carousel wrapper */
            <div className='row row-spacer'>
                <div class='col-md-4'>
                    <button  className="btn btn-primary" onClick={() => showPreviousCard()}>Previous Card</button>
                </div>
                    <div className='col-md-4'>
                        <div className="cards">
                            <h1>{props.cards[cardNumber].question} </h1>
                            <h2>{props.cards[cardNumber].answer}</h2>
                            <h3>{cardNumber + 1} / {props.cards.length}</h3>
                        </div>
                </div>
                    <div className='col-md-4'>
                        <button className="btn btn-primary" onClick={() => showNextCard()}>Next Card</button>
                </div>
                    <div   div className='edit-card'>
                        <EditCard cards={props.cards[cardNumber]} 
                            collections={props.collections}
                                collectionIsSelected={props.collectionIsSelected}/>
                 </div> 
            </div>    
        )}
    }

    export default CardDisplay;
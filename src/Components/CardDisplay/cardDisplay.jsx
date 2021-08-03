import React, {useState} from 'react';
import EditCard from '../editCard/editCard';
import './cardDisplay.css';


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
            <div id="carouselBasicExample"class="carousel slide carousel-fade"data-mdb-ride="carousel">
                <div class="carousel-indicators">
                    <button  type="button" data-mdb-target="#carouselBasicExample"
                        data-mdb-slide-to="0"class="active"aria-current="true"aria-label="Slide 1" className="btn btn-info" onClick={() => showPreviousCard()}>Previous Card</button>
                </div>
                    <div class='carousel-inner'>
                        <div className="flashcard">
                            <h1>{props.cards[cardNumber].question} </h1>
                            <h2>{props.cards[cardNumber].answer}</h2>
                            <h3>{cardNumber + 1} / {props.cards.length}</h3>
                        </div>
                    </div>
                <div className='col-md-4'>
                    <button type="button" data-mdb-target="#carouselBasicExample"data-mdb-slide-to="2"aria-label="Slide 3"   
                    className="btn btn-info" onClick={() => showNextCard()}>Next Card</button>
                </div>
                <div className='edit-card'>
                    <EditCard cards={props.cards[cardNumber]} collections={props.collections}
                            collectionIsSelected={props.collectionIsSelected}/>
                </div>
            </div>
    )}
}

export default CardDisplay;
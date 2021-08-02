import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import "./App.css";
import AddCard from './Components/addCard/addCard';
import CollectionsList from './Components/CollectionsList/collectionsList';

  

function App(){

  const [collections, setCollections] = useState([]);
  const [cards, selectedCards] = useState([]);
  const [collectionIsSelected, setCollectionIsSelected] = useState([]);

  useEffect(() => {
    getAllCollections(); // Will return all  collections within a given set/ will add search filter
    getAllCards(); // Will return all  cards within a given set/ will add search filter
  }, []);

  let getAllCollections = async () => {
    try{
      let res = await axios.get('http://127.0.0.1:8000/collections/');
      console.log(res.data) // Verified called(functions and gets all collections)
      setCollections(res.data)
    }
    catch(error) {
      alert(error);
    }
  }
  let getAllCards = async (id) => {
    try{
      let res = await axios.get(`http://127.0.0.1:8000/collection/card/`);
      console.log(res.data)
      selectedCards(res.data)
      setCollectionIsSelected(id);
    }
    catch(error){
      console.log(error);
    }
  }
  return(
    <React.Fragment>
      <div>
        <h1 className="title">Flash My IQ</h1>
        <CollectionsList collections={collections} cards={cards} getAllCards={getAllCards} collectionIsSelected={collectionIsSelected}/>
        <AddCard/>
      </div>
    </React.Fragment>
  )
}
export default App;

       
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import "./App.css";

  

function App(){

  const [collections, setCollections] = useState([]);
  const [cards, selectedCards] = useState([]);

  useEffect(() => {
    getAllCollections(); // Will return all  collections within a given set/ will add search filter 
  }, []);

  let getAllCollections = async () => {
    try{
      let res = await axios.get('http://127.0.0.1:8000/collections/');
      alert(res.data)
      setCollections(res.data)
    }
    catch(error) {
      alert(error);
    }
  }
  return(
    <React.Fragment>
      <div>
        <h1 className="title">Flash My IQ</h1>
      </div>
    </React.Fragment>
  )
}
export default App;

       
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import "./App.css";

  

function App(){

  const [collections, setCollections] = useState([]);
  const [selected, selectedCollections] = useState([]);
  const [selectedTitle, selectedTitle] = useState([]);

  useEffect(() => {
    getAllCollections();
  })
  return(
    <React.Fragment>

    </React.Fragment>
  )
}
export default App;

       
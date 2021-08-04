import React from 'react';
import './collectionsList.css';

function CollectionsList(props) {

        let collectionList = props.collections.map(collection => { if(props.collectionIsSelected === collection.id){
                return <li className="collection-list-item-active"onClick={() => props.getAllCards(collection.id)}
                key={collection.id}>{collection.name}</li>
            }
            else{
                return <li className="collection-list-item"onClick={() => props.getAllCards(collection.id)}
                key={collection.id}>{collection.description}</li>
            }
        });
     return(
         <div className="collection-List">
             <h2>Collections</h2>
              <ul> {collectionList}</ul>
         </div>
     )
}
export default CollectionsList;    
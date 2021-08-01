import React, {useState} from 'react';
import useCreate from '../useCreate';
import axios from 'axios';


const CreateCollection = (props) => {

    const {values, handleChange, handleSubmit} = useCreate(submitCollection);
    const [view, setView] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleHide = () => setView(false);
    const handleView = () => setView(true);

    async function submitCollection(){
        let addcollection = {...values};
        try{
            await axios.post(`http://127.0.0.1:8000/cards/collections`, addcollection);
            setSubmitted(true);
            setTimeout(() => {setView(false); setSubmitted(false)}, 100);
            props.refresh()
        }
        catch(error){
            alert(error);
            return
        }
    }
    return(
        <div>

        </div>
    )
}
export default CreateCollection;
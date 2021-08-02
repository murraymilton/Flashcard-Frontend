import { useState } from "react";

const useCreate = (callback) => {

    const [values, setValues] = useState({});

    const handleChange =(event) => {
        event.persist();
        setValues(values => ({...values, [event.target.name]: event.target.value}));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await callback();
        setValues({})
    }
    return {values, handleChange, handleSubmit, setValues}
}

export default useCreate;          


// We want to keep track of our values . Our callback function is passed into our hook and is called whenerver the form is submitted

/*We’re setting up one state variable and one setter function called values and setValues.
Then we create a function called handleSubmit which takes an event. It prevents the default action of that event (refreshing the page after the event has been called). Afterwards, it just calls callback();
We create a function called handleChange which also takes an event.
Finally, we return handleChange, handleSubmit and values from the custom Hook so our component has access to them. */
import React, {useState} from 'react';

const GenerateBoxForm = (props) => {
    const [color, setColor] = useState("");


    const createBox = (e) => {
        e.preventDefault();
        props.setCurrentDisplay(props.currentDisplay.concat(color));
        setColor("")
    }

    return(
        <div>
            <form onSubmit={ createBox }>
                <div>
                <label htmlFor='color'>Type in a color you hate: </label>
                <input type='text' onChange={(e) => setColor(e.target.value)} value={color} />
                </div>
                <input type='submit' value='SUBMIT' />
            </form>
        </div>
    );
};

export default GenerateBoxForm;
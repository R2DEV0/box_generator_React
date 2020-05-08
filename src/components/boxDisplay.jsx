import React, {useState} from 'react';


const DisplayBox = (props) => {


    return(

        <div>{
            props.display.map(( value , i ) =>
            <p key={i} style= {{ backgroundColor: value, height: '200px', width: '200px', display: 'inline-block', margin: '10px',}} ></p>
            )
        }</div>

    );
};



export default DisplayBox;
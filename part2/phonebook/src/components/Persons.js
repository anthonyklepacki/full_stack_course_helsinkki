
import React from 'react';
import ReactDOM from 'react-dom';

const Persons = (props) => {
    return (
        <>
            {props.namesToShow.map(person =>
                <p>
                    {person.name} {person.number}
                </p>)}
        </>
    )
}


export default Persons
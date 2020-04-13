
import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button'

const Persons = (props) => {
    return (
        <>
            {props.namesToShow.map(person =>
                <p key={person.id}>
                    {person.name} {person.number} <Button text='Delete' handleClick={() => props.clickAction(person.id,person.name)}/>
                </p>)}
        </>
    )
}


export default Persons
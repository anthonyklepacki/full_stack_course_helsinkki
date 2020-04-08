import React from 'react'
import ReactDOM from 'react-dom'

const Course = (props) => {
    return (
      <>
        <Header course={props.name} />
  
        {props.parts.map(tempPart => 
          <Part key={tempPart.id} name={tempPart.name} num={tempPart.exercises}/>
        )}
  
        <Total parts={props.parts} />
      </>
    )
  }
  
  const Header = (props) => {
    return (
      <>
        <h1>{props.course}</h1>
      </>
    )
  }
  
  const Total = (props) => {
  
    const {parts} = props
    const total = parts.reduce((accumulator, currentValue) => accumulator + currentValue.exercises, 0)
    return (
      <>
        <b>Number of exercises {total}</b>
      </>
    )
  }
  
  const Part = (props) => {
    return (
      <>
         <p>{props.name} {props.num}</p>
      </>
    )
  }

  export default Course
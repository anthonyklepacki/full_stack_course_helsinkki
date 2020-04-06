import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content  = (props) => {
  return (
    <>
      <Part 
      name={props.parts[0].name} 
      num={props.parts[0].exercises}/>

     <Part 
     name={props.parts[1].name} 
     num={props.parts[1].exercises}/>
    <Part 
    name={props.parts[2].name} 
    num={props.parts[2].exercises}/>
   </>
  )
}


const Total = (props) => {
  const sum = (p1, p2, p3) => {
    return p1 + p2 + p3
  }
  const result = sum(props.parts[0].exercises,props.parts[1].exercises,props.parts[2].exercises)
  return (
    <>
      <p>Number of exercises {result}</p>
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

ReactDOM.render(<App />, document.getElementById('root'))
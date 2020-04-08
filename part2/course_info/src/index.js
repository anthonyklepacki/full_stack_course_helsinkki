import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }      
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

const Course = (props) => {
  const {course} = props
  return (
    <>
      <Header course={course.name} />
        {course.parts.map(parts => 
          <p key={parts.id}>
            {parts.name} {parts.exercises}
          </p>
        )}
      <Total parts={course.parts} />
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

ReactDOM.render(<App />, document.getElementById('root'))
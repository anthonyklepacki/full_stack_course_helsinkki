import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      {courses.map(tempCourse => 
        <Course key={tempCourse.id} name={tempCourse.name} parts={tempCourse.parts}/>
      )}

    </div>
  )
}

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
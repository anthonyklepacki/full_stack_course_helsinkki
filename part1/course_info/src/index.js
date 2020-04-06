import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content  name={part1} num={exercises1}/>
      <Content  name={part2} num={exercises2}/>
      <Content  name={part3} num={exercises3}/>
      <Total sum={exercises1+exercises2+exercises3}/>
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
      <Part name={props.name} num={props.num}/>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.sum}</p>
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
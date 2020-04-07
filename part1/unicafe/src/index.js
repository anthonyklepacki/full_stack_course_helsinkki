import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToValue = newValue => {
    setGood(newValue)
  }



  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setToValue(good+1)} text="good" />
      <Button handleClick={() => setNeutral(neutral+1)} text="neutral" />
      <Button handleClick={() => setBad(bad+1)} text="bad" />

      <h1>statistics</h1>

      <Display text="good " value={good} />
      <Display text="neutral " value={neutral} />
      <Display text="bad " value={bad} />
      <Statistics good={good} neutral={neutral} bad={bad}/>

    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Display = props => <div>{props.text}{props.value}</div>

const Statistics = (props) => {
  const sum = props.good + props.bad + props.neutral
  const num = props.good - props.bad
  return (
    <div>
      <p>all {sum}</p>
      <p>average {num/sum}</p>
      <p>positive {100*props.good/sum} %</p>

    </div>
  )
  }



ReactDOM.render(<App />, 
  document.getElementById('root')
)


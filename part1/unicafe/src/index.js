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

    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Display = props => <div>{props.text}{props.value}</div>



ReactDOM.render(<App />, 
  document.getElementById('root')
)


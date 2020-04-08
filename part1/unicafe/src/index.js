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
      <Statistics good={good} neutral={neutral} bad={bad}/>

    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)


const Statistics = ({good, neutral, bad}) => {
  const sum = good + neutral + bad
  const pctPos = (good*100)/sum
  const avg = (good - bad)/sum

  if ((good || neutral || bad) !== 0){
    return (
      <table>
        <tbody>
        <Statistic text="good" value={good}/>
        <Statistic text="neutral" value={neutral}/>
        <Statistic text="bad" value={bad}/>
        <Statistic text="all" value={sum}/>
        <Statistic text="average" value={avg}/>
        <Statistic text="positive" value={pctPos}/>
        </tbody>
      </table>
    )
  }

  return <div>No feedback given</div>
}

const Statistic = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
    
  )
}



ReactDOM.render(<App />, 
  document.getElementById('root')
)


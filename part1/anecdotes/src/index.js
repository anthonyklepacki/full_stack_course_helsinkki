import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)

  const [votes, setVotes] = useState(new Array(6).fill(0))

  const genRandSelect = () => {
    const randInt = Math.floor(Math.random() * 6)
    setSelected(randInt)
  }

  const voteSelected = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>

      <Button text="Vote" handleClick={() => voteSelected()}/>
      <Button text="Next anecdote" handleClick={() => genRandSelect()}/>

      <BestAnecdote votes={votes} anecdotes={props.anecdotes}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const BestAnecdote = (props) => {
  const maxVotes = props.votes.indexOf(Math.max(...props.votes));
  console.log(maxVotes)
  return (
    <div>
      <h1>Best anecdote</h1>
      <p>{props.anecdotes[maxVotes]}</p>
    </div>
  )
  }


ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Anecdote = ({title, anecdote, points}) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{anecdote}</p>
      <p>has {points} votes</p>
    </div>
  )
}

const Button = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))

  const mostVotes = Math.max(...points)
  const mostVotesIndex = points.findIndex(point => mostVotes === point)

  const changeAnecdote = () => {
    let index = selected
    while(index === selected)
      index = Math.floor(Math.random()*anecdotes.length)
    setSelected(index)
  }

  const voteAnecdote = () => {
    const copy = [...points]
    copy[selected]++
    setPoints(copy)
  }

  return (
    <div>
      <Anecdote
        title='Anecdote of the day'
        anecdote={anecdotes[selected]}
        points={points[selected]}
      />
      <Button handleClick={voteAnecdote} text='vote' />
      <Button handleClick={changeAnecdote} text='next anecdote' />
      <Anecdote
        title='Anecdote with most votes'
        anecdote={anecdotes[mostVotesIndex]}
        points={points[mostVotesIndex]}
      />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App anecdotes={anecdotes} />
  </React.StrictMode>
)

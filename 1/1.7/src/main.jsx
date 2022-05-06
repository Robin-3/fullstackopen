import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

const Title = ({ title }) => {
  return (
    <h2>{title}</h2>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Display = ({ text, value }) => {
  return (
    <p>{text} {value}</p>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad
  const average = (good - bad) / all || 0
  const positive = 100 * good / all || 0

  const addGood = () => setGood(good + 1)
  const addNeutral = () => setNeutral(neutral + 1)
  const addBad = () => setBad(bad + 1)

  return (
    <div>
      <Title title='give feedback' />
      <Button handleClick={addGood} text='good' />
      <Button handleClick={addNeutral} text='neutral' />
      <Button handleClick={addBad} text='bad' />
      <Title title='statistics' />
      <Display text='good' value={good} />
      <Display text='neutral' value={neutral} />
      <Display text='bad' value={bad} />
      <Display text='all' value={all} />
      <Display text='average' value={average} />
      <Display text='positive' value={`${positive}%`} />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

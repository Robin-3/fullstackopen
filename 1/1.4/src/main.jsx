import React from 'react'
import ReactDOM from 'react-dom/client'

const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  )
}

const Part = ({part}) => (
  <p>
    {part.name} {part.exercises}
  </p>
)

const Content = ({parts}) => {
  return (
    <div>
      {
        parts.map((part, index) => <Part key={index} part={part} />)
      }
    </div>
  )
}

const Total = ({parts}) => {
  const total = parts.reduce((a, b) => {
      return {exercises: a.exercises + b.exercises}
    }, {exercises: 0}).exercises

  return (
    <p>Number of exercises {total}</p>
  )
}

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

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
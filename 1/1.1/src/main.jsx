import React from 'react'
import ReactDOM from 'react-dom/client'

const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  )
}

const Content = (props) => {
  const {part1, exercises1, part2, exercises2, part3, exercises3} = props

  return (
    <>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
    </>
  )
}

const Total = ({total}) => (
  <p>Number of exercises {total}</p>
)

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
      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
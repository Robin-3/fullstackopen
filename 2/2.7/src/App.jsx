import React, { useState } from "react"
import Person from "./components/Person"

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const savePerson = event => {
    event.preventDefault()

    let personExist = false
    persons.forEach(person => {
      if(person.name === newName) {
        alert(`${newName} is already added to phonebook`)
        personExist = true
      }
    })

    if(!personExist) {
      const newPerson = {
        name: newName
      }

      setPersons([...persons, newPerson])
    }
    setNewName('')
  }

  const inputName = event => {
    const name = event.target.value
    setNewName(name)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={savePerson}>
        <div>
          name: <input value={newName} onChange={inputName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map(person => {
          return (
            <Person key={person.name} person={person} />
          )
        })
      }
    </div>
  )
}

export default App

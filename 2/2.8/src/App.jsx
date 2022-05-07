import React, { useState } from "react"
import Persons from "./components/Persons"
import FormAddPerson from "./components/FormAddPerson"

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

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
        name: newName,
        number: newNumber
      }

      setPersons([...persons, newPerson])
    }
    setNewName('')
    setNewNumber('')
  }

  const setInputName = event => {
    const name = event.target.value
    setNewName(name)
  }

  const setInputNumber = event => {
    const number = event.target.value
    setNewNumber(number)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <FormAddPerson
        inputName={newName}
        inputNumber={newNumber}
        handleSubmit={savePerson}
        handleInputName={setInputName}
        handleInputNumber={setInputNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  )
}

export default App

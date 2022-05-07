import React, { useState } from "react"
import Persons from "./components/Persons"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newSearch, setNewSearch ] = useState('')
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

  const searchPersons = event => {
    const search = event.target.value
    setNewSearch(search)
  }

  const personsFilter = newSearch === ''
    ? persons
    : persons.filter(person => {
      return person.name.toLowerCase().includes(newSearch.toLocaleLowerCase())
    })

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        value={newSearch}
        handleInput={searchPersons}
      />
      <h2>add a new</h2>
      <PersonForm
        inputName={newName}
        inputNumber={newNumber}
        handleSubmit={savePerson}
        handleInputName={setInputName}
        handleInputNumber={setInputNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={personsFilter} />
    </div>
  )
}

export default App

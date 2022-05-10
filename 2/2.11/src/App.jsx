import React, { useState, useEffect } from "react"
import axios from "axios"
import Persons from "./components/Persons"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newSearch, setNewSearch ] = useState('')
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

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

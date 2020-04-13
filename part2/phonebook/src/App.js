import React, { useState, useEffect } from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import axios from 'axios'
import personService from './services/AddPerson'








const App = () => {
  

  const [ persons, setPersons] = useState([]) 



  useEffect(() => {
    personService
      .getAll()
        .then(initPersons => {
          setPersons(initPersons)
      })
  }, [])


  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterName, setFilterName ] = useState('')
  

  const addName = (event) => {
      event.preventDefault()
      console.log('name button click', event.target)

      console.log(persons.map(person => person.name).includes(newName))

    if (!persons.map(person => person.name).includes(newName)){
      const nameObj = {
          name: newName,
          number: newNumber 
      }


      personService
        .create(nameObj)
          .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
      })

    }else{
        window.alert(`${newName} is already added to phonebook`);
    }
  }

  const namesToShow = (filterName==='')
        ? persons
        : persons.filter(person => String(person.name).startsWith(filterName))

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }


  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilterName(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChangeHandler={handleFilterChange}/>

      <h3>Add a new</h3>
      <PersonForm onChangeName={handleNameChange}
                  onChangeNumber={handleNumberChange}
                  addName={addName}
                  newName={newName}
                  newNumber={newNumber}
                   />

      <h3>Numbers</h3>
      <Persons namesToShow={namesToShow}/>

        
    </div>
  )
}

export default App
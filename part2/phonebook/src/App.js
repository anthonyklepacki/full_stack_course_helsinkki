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
        if(window.confirm(`${newName} is already added to phonebook, replace the old nubmer with a new one?`)){
        

        const currentPerson = persons.find(p => p.name === newName)
        console.log(currentPerson)
        const nameObj = {
          name: newName,
          number: newNumber 
        }
        personService
          .update(currentPerson.id, nameObj).then(returnedPerson => {
            setPersons(persons.map(person => person.id !== currentPerson.id ? person : returnedPerson))
          })
        }
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

  const handleNameDelete = (id,name) => {
    if (window.confirm(`Delete ${name}?`)) {
      console.log(id)
      personService
        .deleteEntry(id)
      setPersons(persons.filter(n => n.id !== id)) 
    }
         

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
      <Persons namesToShow={namesToShow} clickAction={handleNameDelete}/>

        
    </div>
  )
}

export default App
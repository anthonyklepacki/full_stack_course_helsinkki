import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addName = (event) => {
      event.preventDefault()
      console.log('name button click', event.target)

      console.log(persons.map(person => person.name).includes(newName))

    if (!persons.map(person => person.name).includes(newName)){
      const nameObj = {
          name: newName,
          number: newNumber 
      }
      setPersons(persons.concat(nameObj))
      setNewName('')
      setNewNumber('')
    }else{
        window.alert(`${newName} is already added to phonebook`);
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input 
          value={newName}
          onChange={handleNameChange}
          />
        </div>
        <div>
          number: <input 
          value={newNumber}
          onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <ul>
            {persons.map(person =>
                <p>{person.name} {person.number}</p>)}
        </ul>
    </div>
  )
}

export default App
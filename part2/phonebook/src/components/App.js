import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addName = (event) => {
      event.preventDefault()
      console.log('name button click', event.target)

      console.log(persons.map(person => person.name).includes(newName))

    if (!persons.map(person => person.name).includes(newName)){
      const nameObj = {
          name: newName,
      }
      setPersons(persons.concat(nameObj))
      setNewName('')
    }else{
        window.alert(`${newName} is already added to phonebook`);
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
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
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <ul>
            {persons.map(person =>
                <p>{person.name}</p>)}
        </ul>
    </div>
  )
}

export default App
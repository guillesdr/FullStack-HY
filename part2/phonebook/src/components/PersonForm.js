import React, { useState } from 'react'

export const PersonForm = ({persons, setPersons}) => {
    
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");

    const addPersons = (event) => {
        event.preventDefault();
    
    
        if (!persons.find((e) => e.name==newName)){
          const personsObject = {
            name: newName,
            number: newNumber
          };
      
          setPersons(persons.concat(personsObject));
          setNewName("");
        } else {
          alert(`${newName} is already added to phonebook` )
        }
    
        
      };
    

    const handleNewName = (event) => {
        //event.preventDefault()
        setNewName(event.target.value);
      };
    
      const handleNewNumber = (event) => {
        //event.preventDefault()
        setNewNumber(event.target.value);
      };

    return (
        <form onSubmit={addPersons}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

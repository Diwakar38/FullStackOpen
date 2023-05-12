import { useState } from 'react'

const App = () => {
	const [persons, setPersons] = useState([
		{ name: 'Arto Hellas', phone: 998877665544 }
	])
	const [newName, setNewName] = useState('')
	const [newPhone, setNewPhone] = useState('')

	const addPerson = (event) => {
		event.preventDefault()
		// console.log('button clicked', event.target) 
		if (newName.length === 0) setNewName('')
		else {
			const person = {
				name: newName,
				phone: newPhone
			}
			const isInArray = persons.some(obj => obj.name === person.name)
			if (isInArray) alert(`${person.name} is already added to phonebook`)
			else setPersons(persons.concat(person))
			setNewName('')
			setNewPhone('')
		}
	}
	const handleNewName = (event) => {
		console.log(event.target.value)
		setNewName(event.target.value)
	}
	const handleNewPhone = (event) => {
		console.log(event.target.value)
		setNewPhone(event.target.value)
	}

	return (
		<div>
			<h2>Phonebook</h2>
			<form onSubmit={addPerson}>
				<div>
					name: <input value={newName}
						onChange={handleNewName}
					/>
				</div>
				<div>
					phone: <input value={newPhone}
						onChange={handleNewPhone}
					/>
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			{persons.map(person => <>{person.name} {person.phone}<br /></>)}
		</div>
	)
}

export default App
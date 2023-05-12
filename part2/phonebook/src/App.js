import { useState } from 'react'

const App = () => {
	const [persons, setPersons] = useState([
		{ name: 'Arto Hellas' }
	])
	const [newName, setNewName] = useState('')

	const addName = (event) => {
		event.preventDefault()
		// console.log('button clicked', event.target) 
		if (newName.length === 0) setNewName('')
		else {
			const person = {
				name: newName
			}
			const isInArray = persons.some(obj => obj.name === person.name)
			if (isInArray) alert(`${person.name} is already added to phonebook`)
			else setPersons(persons.concat(person))
			setNewName('')
		}
	}
	const handleNewName = (event) => {
		console.log(event.target.value)
		setNewName(event.target.value)
	}

	return (
		<div>
			<h2>Phonebook</h2>
			<form onSubmit={addName}>
				<div>
					name: <input value={newName}
						onChange={handleNewName}
					/>
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			{persons.map(person => <>{person.name}<br /></>)}
		</div>
	)
}

export default App
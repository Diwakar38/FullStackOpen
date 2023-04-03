import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  //new Array(anecdotes.length).fill(0) creates an array with the same length as the anecdotes array and sets value of all to 0
  const [high, setHigh] = useState(0);

  const random = () =>
    setSelected(Math.floor(Math.random() * anecdotes.length));

  const upVote = () => {
    const votesCopy = [...votes]
    // creates a copy so state isnt mutated directly
    votesCopy[selected] += 1
    // adds a vote to the given anecdote
    setVotes(votesCopy)
    // sets votes to the copy with vote addded
    if (votesCopy[selected] > votes[high]) {
      setHigh(selected);
    }
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      {/* <button onClick={() => setSelected((selected + 1) % anecdotes.length)}>next anecdote</button> */}
      <button onClick={upVote}>vote</button>
      <button onClick={random}>next anecdote</button>
      <div>has {votes[selected]} votes</div>
      <h1>Anecdote with most votes</h1>
      <div>{anecdotes[high]}</div>
      <div>has {votes[high]} votes</div>
    </div>
  )
}

export default App

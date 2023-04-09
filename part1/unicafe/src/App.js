import { useState } from 'react';
import './App.css';

const StatisticsLine = (props) => {
  const { text, value } = props
  if (text === "positive") return (
    <tr><td>{text}</td> <td> {value} %</td></tr>
  )
  return (
    <tr><td>{text}</td> <td> {value}</td></tr>
  )
}

const Button = (props) => {
  // console.log('props value is', props)
  const { handleClick, text } = props
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistics = (props) => {
  const { good, neutral, bad } = props
  const all = good + bad + neutral
  if (all === 0) return (
    <div>No feedback given</div>
  )
  return (
    <table colspan="2">
      <StatisticsLine text="good" value={good} />
      <StatisticsLine text="neutral" value={neutral} />
      <StatisticsLine text="bad" value={bad} />
      <StatisticsLine text="all" value={all} />
      <StatisticsLine text="average" value={(good - bad) / all} />
      <StatisticsLine text="positive" value={(good / all) * 100} />
      {/* <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {all}</div>
      <div>average {(good - bad) / all}</div>
      <div>positive {(good / all) * 100} %</div> */}
      {/* </tr> */}
    </table >
  )
}

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  // const [all, changeAll] = useState(0);

  const incGood = () => {
    // console.log(`goods: ${good}`)
    const updated = good + 1
    setGood(updated)
    // changeAll(updated + bad + neutral)
  }

  const incNeutral = () => {
    const updated = neutral + 1
    setNeutral(updated)
    // changeAll(good + bad + updated)
  }

  const incBad = () => {
    const updated = bad + 1
    setBad(updated)
    // changeAll(good + updated + neutral)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={incGood} text="Good" />
      <Button handleClick={incNeutral} text="Neutral" />
      <Button handleClick={incBad} text="Bad" />
      {/* <button onClick={incGood}>good</button> */}
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
      {/* <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {all}</div>
      <div>average {(good - bad) / all}</div>
      <div>positive {(good / all) * 100}</div> */}
    </div>
  )
}

export default App;

function Header(props) {
  return <h1> {props.course}</h1>;
}


function Content(props) {
  return (
    <div>
      <p> Name: {props.parts[0].name}</p>
      <p> Exercises: {props.parts[0].exercises}</p>
      <p> Name: {props.parts[1].name}</p>
      <p> Exercises: {props.parts[1].exercises}</p>
      <p> Name: {props.parts[2].name}</p>
      <p> Exercises: {props.parts[2].exercises}</p>
    </div>
  )
}

function Total(props) {
  let total = 0;
  total += props.parts[0].exercises;
  total += props.parts[1].exercises;
  total += props.parts[2].exercises;
  return (
    <div>
      <p> Total exercises: {total}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part = [
    {
      name: `Fundamentals of React`,
      exercises: 10
    },
    {
      name: `Using props to pass data`,
      exercises: 7
    },
    {
      name: `State of a component`,
      exercises: 14
    }
  ]


  return (
    <div>
      <Header course={course} />
      <Content parts={part} />
      <Total parts={part} />
    </div>
  );
}

export default App
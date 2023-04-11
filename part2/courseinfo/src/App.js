const Header = ({ course }) => <h1>{course.name}</h1>

// const Total = parts.reduce((s, p) => {
//     console.log("what is happening", s, p)
//     return <p>Number of exercises {s}</p>
// })

function Total({ parts }) {
    const ans = parts.reduce(
        (sum, curr) => sum + curr.exercises, 0
    );
    console.log(ans);
    return (<h1>Number of exercises: {ans} </h1>)
}

const Part = ({ part }) =>
    <p>
        {part.name} {part.exercises}
    </p>

const Content = ({ parts }) =>
    <>
        <Part
            part={parts[0]}
        />
        <Part
            part={parts[1]}
        />
        <Part
            part={parts[2]}
        />
    </>

const Course = ({ course }) =>
    <div>
        <Header course={course} />
        <Content parts={course.parts} />
        <Total sum={course.parts} />
    </div>

const App = () => {
    const course = {
        id: 1,
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            }
        ]
    }

    return <Course course={course} />
}

export default App
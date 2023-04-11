const Header = ({ course }) => <h1>{course.name}</h1>

function Total({ parts }) {
    const ans = parts.reduce(
        (sum, curr) => sum + curr.exercises, 0
    );
    return (<>Number of exercises: {ans} </>)
}

const Part = ({ part }) =>
    <p>
        {part.name} {part.exercises}
    </p>

const Content = ({ parts }) =>
    <>
        {parts.map(part => (
            <Part part={part} />
        ))}
    </>

const Course = ({ course }) =>
    <>
        {course.map(course => (
            <div>
                <Header course={course} />
                <Content parts={course.parts} />
                <Total parts={course.parts} />
            </div>
        ))}
    </>

const App = () => {
    const courses = [
        {
            name: 'Half Stack application development',
            id: 1,
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
                },
                {
                    name: 'Redux',
                    exercises: 11,
                    id: 4
                }
            ]
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                }
            ]
        }
    ]

    return <Course course={courses} />
}

export default App

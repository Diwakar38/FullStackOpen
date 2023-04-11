const Header = ({ course }) => <h1>{course.name}</h1>

function Total({ parts }) {
    const ans = parts.reduce(
        (sum, curr) => sum + curr.exercises, 0
    );
    return (<>Number of exercises: {ans} </>)
}

const Part = ({ part }) =>
    <p key={part.id}>
        {part.name} {part.exercises}
    </p>

const Content = ({ parts }) =>
    <>
        {parts.map(part => (
            <Part part={part} key={part.id} />
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

export default Course
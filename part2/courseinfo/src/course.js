const Header = ({ course }) => <h2>{course.name}</h2>

function Total({ parts }) {
    const ans = parts.reduce(
        (sum, curr) => sum + curr.exercises, 0
    );
    return (<><b>Total number of {ans} exercises</b> </>)
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
        <h1>Web development curriculum</h1>
        {course.map(course => (
            <div>
                <Header course={course} />
                <Content parts={course.parts} />
                <Total parts={course.parts} />
            </div>
        ))}
    </>

export default Course
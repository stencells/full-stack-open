const Header = ({ course }) => {
  return (<h1>{course}</h1>)
}

const Content = ({ parts }) => {

  const Part = ({ data }) => {
    return <p>{data.name} {data.exercises}</p>
  }

  return (
    <div>
      <Part data={parts[0]} />
      <Part data={parts[1]} />
      <Part data={parts[2]} />
    </div>
  )
}

const Total = ({ exercises }) => {
  const total = exercises.reduce((t, v) => t + v, 0)
  return (<p>Number of exercises {total}</p>)
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total exercises={course.parts.map(p => p.exercises)} />
    </div>
  )
}

export default App
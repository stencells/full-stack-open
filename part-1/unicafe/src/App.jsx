import { useState } from 'react'

const StatisticLine = ({ text, value }) => <tr><td width={100}>{text}</td><td><b>{value}</b></td></tr>

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>

const Statistics = ({ pos, neg, neu }) => {

  const all = pos + neu + neg
  const score = (pos - neg) / all
  const positive = (pos / all) * 100

  return (
    <>
      <h2>Statistics</h2>
      {
        all === 0 ?
          <p>No feedback given</p>
          :
          <table>
            <tbody>
              <StatisticLine text={"Good"} value={pos} />
              <StatisticLine text={"Neutral"} value={neu} />
              <StatisticLine text={"Bad"} value={neg} />
              <StatisticLine text={"All"} value={all} />
              <StatisticLine text={"Average"} value={score.toFixed(2)} />
              <StatisticLine text={"Positive"} value={positive.toFixed(2) + "%"} />
            </tbody>
          </table>
      }
    </>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give us feedback!</h1>
      <div>
        <Button text={"GOOD"} onClick={() => setGood(good + 1)} />
        <Button text={"NEUTRAL"} onClick={() => setNeutral(neutral + 1)} />
        <Button text={"BAD"} onClick={() => setBad(bad + 1)} />
      </div>
      <Statistics pos={good} neg={bad} neu={neutral} />
    </div>
  )
}

export default App
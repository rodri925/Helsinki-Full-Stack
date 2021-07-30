import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const StatisticLine = (props) => {
  if(props.text == "good") {
    return(
      <>
        <tr>
        <td>good </td> <td> {props.good}</td>
        </tr>
      </>
    )
  }
  if(props.text == "neutral") {
    return(
      <>
        <tr>
        <td>neutral </td> <td> {props.neutral}</td>
        </tr>
      </>
    )
  }
  if(props.text == "bad") {
    return(
      <>
        <tr>
        <td>bad </td> <td> {props.bad}</td>
        </tr>
      </>
    )
  }
  if(props.text == "all") {
    return(
      <>
        <tr>
        <td>all </td> <td> {props.good + props.neutral + props.bad}</td>
        </tr>
      </>
    )
  }
  if(props.text == "average") {
    return(
      <>
        <tr>
        <td>average </td> <td> {(props.good - props.bad) / (props.good + props.neutral + props.bad)}</td>
        </tr>
      </>
    )
  }
  if(props.text == "positive") {
    return(
      <>
        <tr>
        <td>positive </td> <td> {(props.good) / (props.good + props.neutral + props.bad) * 100}%</td>
        </tr>
      </>
    )
  }
}

const Statistics = (props) => {
  if(props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return(
      <div>
        <p>
          No feedback given
        </p>
      </div>
    )
  }
  else {
    return(
  <div>
      <StatisticLine text = "good" good = {props.good} neutral = {props.neutral} bad = {props.bad} />
      <StatisticLine text = "neutral" good = {props.good} neutral = {props.neutral} bad = {props.bad} />
      <StatisticLine text = "bad" good = {props.good} neutral = {props.neutral} bad = {props.bad} />
      <StatisticLine text = "all" good = {props.good} neutral = {props.neutral} bad = {props.bad} />
      <StatisticLine text = "average" good = {props.good} neutral = {props.neutral} bad = {props.bad} />
      <StatisticLine text = "positive" good = {props.good} neutral = {props.neutral} bad = {props.bad} />
      
    </div>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = (newValue) => setGood(newValue)
  const setToNeutral = (newValue) => setNeutral(newValue)
  const setToBad = (newValue) => setBad(newValue)


  return (
    <div>
    <h1>give feedback</h1>
      <Button handleClick = {() => setToGood(good + 1)} text = "good"  />
      <Button handleClick = {() => setToNeutral(neutral + 1)} text = "neutral" />
      <Button handleClick = {() => setToBad(bad + 1)} text = "bad" />
      <h1>statistics</h1>
      <Statistics good = {good} neutral = {neutral} bad = {bad} />
    </div>
  )
}

export default App
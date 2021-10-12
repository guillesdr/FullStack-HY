import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Statistics = ({ good, neutral, bad }) => {
  if (good + neutral + bad === 0) {
    return <p>No feedback given</p>;
  } else {
    return (
      <>
        <table>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />

          <tr>
            <td>all</td>
            <td>{good + neutral + bad}</td>
          </tr>
          <tr>
            <td>average</td>
            <td> {(good + bad * -1) / (good + neutral + bad)}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{(good / (good + neutral + bad)) * 100} %</td>
          </tr>
        </table>
      </>
    );
  }
};

const Statistic = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>

      <Button onClick={handleGoodClick} text={"good"}></Button>
      <Button onClick={handleNeutralClick} text={"Neutral"}></Button>
      <Button onClick={handleBadClick} text={"Bad"}></Button>

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

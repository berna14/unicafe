import { useState } from "react";
import "./App.css";

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const Statistic = (props) => {
  return (
    <div>
      {props.text}: {props.value}
    </div>
  );
};

const Statistics = ({ good, bad, neutral }) => {
  let total = good + bad + neutral;
  if (total === 0) {
    return "No given feedback.";
  } else {
    return (
      <div>
        <Statistic value={good} text="good" />
        <Statistic value={bad} text="bad" />
        <Statistic value={neutral} text="neutral" />
        <Statistic value={total} text="total" />
        <Statistic value={good - bad / total} text="average" />
        <Statistic value={(good * 100) / total} text="positive" />
      </div>
    );
  }
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleBadClick} text="bad" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;

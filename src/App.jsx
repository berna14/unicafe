import { useState } from "react";
import "./App.css";

const Statistics = ({ good, bad, neutral }) => {
  return (
    <div>
      <p>good {good}</p>
      <p>bad {bad}</p>
      <p>neutral {neutral}</p>
      <p>all {good + bad + neutral}</p>
      <p>average {good - bad / (good + bad + neutral)}</p>
      <p>positive {(good * 100) / (good + bad + neutral)}%</p>
    </div>
  );
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
      <div>
        <button onClick={handleGoodClick}>good</button>
      </div>
      <div>
        <button onClick={handleBadClick}>bad</button>
      </div>
      <div>
        <button onClick={handleNeutralClick}>neutral</button>
      </div>
      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;

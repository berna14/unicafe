import { useState } from "react";
import "./App.css";

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
      <div>good {good}</div>
      <div>bad {bad}</div>
      <div>neutral {neutral}</div>
    </div>
  );
};

export default App;

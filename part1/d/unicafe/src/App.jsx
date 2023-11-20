import { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Statistics = (props) => {
  if (props.good + props.neutral + props.bad === 0) {
    return <p>No Feedback given</p>;
  }
  return (
    <div>
      <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral}</p>
      <p>Bad: {props.bad}</p>
      <p>All: {props.good + props.neutral + props.bad}</p>
      <p>
        Average:
        {(props.good - props.bad) / (props.good + props.neutral + props.bad)}
      </p>
      <p>
        Positive:
        {(props.good / (props.good + props.neutral + props.bad)) * 100}%
      </p>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
      {/* <Statistic text="Good:" value={good} />
      <Statistic text="Neutral:" value={neutral} />
      <Statistic text="Bad:" value={bad} />
      <Statistic text="All:" value={good + neutral + bad} />
      <Statistic
        text="Average:"
        value={(good - bad) / (good + neutral + bad)}
      />
      <Statistic
        text="Positive:"
        value={`${(good / (good + neutral + bad)) * 100}%`}
      /> */}
    </div>
  );
};

export default App;

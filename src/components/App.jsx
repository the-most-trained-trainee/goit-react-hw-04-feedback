import { useState } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './Options/FeedbackOptions';
import Notification from './Notification/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackSubmit = feedback => {
    switch (feedback) {
      case 'good':
        feedBackGood();
        break;
      case 'neutral':
        feedBackNeutral();
        break;
      case 'bad':
        feedBackBad();
        break;
      default:
        return;
    }
  };

  const feedBackGood = () => setGood(good => good + 1);
  const feedBackNeutral = () => setNeutral(neutral => neutral + 1);
  const feedBackBad = () => setBad(bad => bad + 1);

  const countaTotal = () => good + neutral + bad;
  const positivePercentage = () => Math.round((good * 100) / countaTotal());

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={feedbackSubmit}
        />
      </Section>
      <Section title="Statistics">
        {countaTotal() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countaTotal()}
            positive={positivePercentage()}
          />
        )}
      </Section>
    </div>
  );
};

export default App;

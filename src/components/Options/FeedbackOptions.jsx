import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';


const FeedbackOptions = ({options, onLeaveFeedback}) => {
  const feedbackIncrement = e => onLeaveFeedback(e.currentTarget.name);

  return (
    <div>
      {options.map(option => (
        <button key={nanoid()} type="button" name={option} onClick={feedbackIncrement}>
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

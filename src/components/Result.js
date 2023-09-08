import React from 'react';

const Result = ({ score, totalQuestions }) => {
  return (
    <div className="result">
      <h2>Quiz Completed</h2>
      <p>Your Score: {score} / {totalQuestions}</p>
      <button onClick={() => window.location.reload()}>Play Again</button>
    </div>
  );
};

export default Result;

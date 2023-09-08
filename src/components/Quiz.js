import React, { useState, useEffect } from 'react';

const Quiz = () => {
  const [questions, setQuestions] = useState([
    {
      question: "Who is the artist of the song 'Imagine'?",
      options: ["John Lennon", "The Rolling Stones", "Elvis Presley"],
      correctAnswer: "John Lennon",
    },
    {
      question: "Which band released the album 'The Dark Side of the Moon'?",
      options: ["The Beatles", "Pink Floyd", "Led Zeppelin"],
      correctAnswer: "Pink Floyd",
    },
    {
      question: "Who is known as the 'Queen of Pop'?",
      options: ["Madonna", "Beyoncé", "Whitney Houston"],
      correctAnswer: "Madonna",
    },
    {
      question: "Which artist's real name is Stefani Joanne Angelina Germanotta?",
      options: ["Taylor Swift", "Lady Gaga", "Ariana Grande"],
      correctAnswer: "Lady Gaga",
    },
    {
      question: "Which band released the song 'Bohemian Rhapsody'?",
      options: ["The Rolling Stones", "Led Zeppelin", "Queen"],
      correctAnswer: "Queen",
    },
  ]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedAnswer) => {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;

    if (selectedAnswer === correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      alert(`Quiz completed! Your score: ${score}/${questions.length}`);
    }
  };

  useEffect(() => {
    setCurrentQuestionIndex(0);
    setScore(0);
  }, []);

  return (
    <div>
      <h1>Music Quiz</h1>
      <h2>Question {currentQuestionIndex + 1}</h2>
      <p>{questions[currentQuestionIndex].question}</p>
      <ul>
        {questions[currentQuestionIndex].options.map((option, index) => (
          <li key={index} onClick={() => handleAnswer(option)}>
            {option}
          </li>
        ))}
      </ul>
      <p>Score: {score}</p>
    </div>
  );
};

export default Quiz;

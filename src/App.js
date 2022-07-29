import { useEffect, useState } from "react";
import "./App.css";

export default function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      questionText: "What is the capital of Pakistan?",
      answerOptions: [
        { answerText: "Karachi", isCorrect: false },
        { answerText: "Islamabad", isCorrect: true },
        { answerText: "Lahore", isCorrect: false },
        { answerText: "Quetta", isCorrect: false },
      ],
    },
    {
      questionText: "What is the capital of Sindh?",
      answerOptions: [
        { answerText: "Karachi", isCorrect: true },
        { answerText: "Islamabad", isCorrect: false },
        { answerText: "Lahore", isCorrect: false },
        { answerText: "Quetta", isCorrect: false },
      ],
    },
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "Paris", isCorrect: true },
        { answerText: "London", isCorrect: false },
        { answerText: "New York", isCorrect: false },
        { answerText: "Dubai", isCorrect: false },
      ],
    },
    {
      questionText: "What is the capital of Balochistan?",
      answerOptions: [
        { answerText: "Karachi", isCorrect: false },
        { answerText: "Islamabad", isCorrect: false },
        { answerText: "Lahore", isCorrect: false },
        { answerText: "Quetta", isCorrect: true },
      ],
    },
  ];

  useEffect(() => {
    if(currentQuestion === questions.length) {
      setShowScore(true);
    }
  }, [currentQuestion])
  

  const handleButtonClick = (isCorrect) => {
    if(currentQuestion !== questions.length){
      setCurrentQuestion(currentQuestion + 1);
    }
    if(isCorrect === true) {
      setScore(score + 1);
    }
  }

  return (
    <div className="App">
      {showScore && (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      )}
      {!showScore && (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>
                Question {currentQuestion + 1} / {questions?.length}
              </span>
            </div>
            <div className="question-text">
              {questions[currentQuestion]?.questionText}
            </div>
            <div className="answer-section">
              {questions[currentQuestion]?.answerOptions?.map((answer) => (
                <button
                  onClick={() => handleButtonClick(answer?.isCorrect)}
                >
                  {answer?.answerText}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>);}
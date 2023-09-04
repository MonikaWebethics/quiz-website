import React from "react";
import "./Result.css";
import { Link } from "react-router-dom";
import data from "assets/data/quizData.json";
import { useSelector } from "react-redux";

export function Result() {
  const result = useSelector((state) => state.result);
  console.log(result);
  const { subject, answers } = result;
  const filterData = data.filter((question) => question.subject === subject);

  const correctAnswers = {};
  filterData.forEach((question) => {
    correctAnswers[question.id] = question.correct_answer;
  });

  const calculateCorrectAnswers = () => {
    let correctCount = 0;

    for (const questionId in answers) {
      const userAns = answers[questionId];
      const correctAns = correctAnswers[questionId];

      if (userAns === correctAns) {
        correctCount++;
      }
    }

    return correctCount;
  };

  const correctCount = calculateCorrectAnswers();

  const calculateScore = () => {
    const score = (correctCount / totalQuestions) * 100;
    return score.toFixed(0);
  };
  const totalQuestions = filterData.length;
  return (
    <div className="container mt-5 result-container">
      <h1 className="text-center">Quiz Results</h1>
      <div className="text-center mb-4">
        <h2>Your {subject} Quiz Result</h2>
        <p>Total Questions: {totalQuestions}</p>
        <p>Correct Answers: {correctCount}</p>
        <p>Your Score: {calculateScore()}%</p>
      </div>
      <Link to={"/"}>
        <button className="btn btn-primary mt-3">Back to Home</button>
      </Link>
    </div>
  );
}

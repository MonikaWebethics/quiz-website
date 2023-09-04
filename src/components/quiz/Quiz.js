import { React, useState, useEffect } from "react";
import "./Quiz.css";
import data from "assets/data/quizData.json";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { storeAnswer, setSubject } from "redux/resultSlice";
export function Quiz() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { subject } = useParams();
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const filteredQuestions = data.filter(
      (question) => question.subject === subject
    );
    setQuestions(filteredQuestions);
  }, [subject]);

  const currentQuestion = questions[currentIndex];

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleAnswerChange = (e) => {
    const { name, value } = e.target;
    setSelectedAnswers({
      ...selectedAnswers,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    dispatch(setSubject(subject));
    for (const questionId in selectedAnswers) {
      dispatch(
        storeAnswer({ questionId, answer: selectedAnswers[questionId] })
      );
    }

    navigate("/result");
  };
  return (
    <div className="container mt-5 quiz-container">
      <h1 className="text-center">{subject} Quiz</h1>
      {currentQuestion && (
        <>
          <div className="text-center mb-4">
            <h2 className="question-header">
              Question {currentIndex + 1} of {questions.length}
            </h2>
            <p className="question-text">{currentQuestion.question}</p>
          </div>

          {currentQuestion.options.map((option, index) => {
            const optionName = currentQuestion.id;
            const isSelected = selectedAnswers[optionName] === option;

            return (
              <div key={index} className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name={optionName}
                  id={`option${index + 1}`}
                  value={option}
                  checked={isSelected}
                  onChange={handleAnswerChange}
                />
                <label
                  className="form-check-label"
                  htmlFor={`option${index + 1}`}
                >
                  {option}
                </label>
              </div>
            );
          })}
          {currentIndex > 0 && (
            <button
              onClick={handlePreviousQuestion}
              className="btn btn-primary mr-2"
            >
              Previous
            </button>
          )}
          {currentIndex < questions.length - 1 ? (
            <button className="btn btn-primary" onClick={handleNextQuestion}>
              Next
            </button>
          ) : (
            <button className="btn btn-primary" onClick={handleSubmit}>
              Submit
            </button>
          )}
          <Link to={"/"}>
            <button className="btn btn-primary float-end">Back to Home</button>
          </Link>
        </>
      )}
    </div>
  );
}

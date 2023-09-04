import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
export function Home() {
  return (
    <div className="container-fluid pt-3">
      <h1 className="quiz-heading">Welcome to the Quiz Portal</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card card-bg-html text-center">
            <div className="card-body">
              <h1 className="display-4">HTML Quiz</h1>
              <p className="lead">Test your knowledge of HTML</p>
              <Link to={`/quiz/HTML`}>
                <button type="button" className="btn btn-success btn-lg">
                  Start Quiz
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card card-bg-css text-center">
            <div className="card-body">
              <h1 className="display-4">CSS Quiz</h1>
              <p className="lead">Test your knowledge of CSS</p>
              <Link to={`/quiz/CSS`}>
                <button type="button" className="btn btn-success btn-lg">
                  Start Quiz
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card card-bg-javascript text-center">
            <div className="card-body">
              <h1 className="display-4">JavaScript Quiz</h1>
              <p className="lead">Test your knowledge of JavaScript</p>
              <Link to={`/quiz/JavaScript`}>
                <button type="button" className="btn btn-success btn-lg">
                  Start Quiz
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card card-bg-react text-center">
            <div className="card-body">
              <h1 className="display-4">React Quiz</h1>
              <p className="lead">Test your knowledge of React</p>
              <Link to={`/quiz/React`}>
                <button type="button" className="btn btn-success btn-lg">
                  Start Quiz
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

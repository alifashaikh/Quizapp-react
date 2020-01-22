import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const QuizInstructions = () => (
  <Fragment>
    <Helmet>
      <title>Quiz Instructions</title>
    </Helmet>
    <body>
      {" "}
      <b>
        <div className="instructions container">
          <h1 className="animated slideInDown">How to Play the Game</h1>
          <p className="animated slideInDown">
            Ensure you read this guide from start to finish.
          </p>
          <ul className="browser-default" id="main-list">
            <li className="animated slideInDown">
              The game has a duration of 3 minutes and ends as soon as your time
              elapses.
            </li>
            <li className="animated slideInDown">
              Each game consists of 4 questions and 3 options.
            </li>

            <li className="animated slideInDown">
              Each game has 2 lifelines namely:
              <ul className="animated slideInDown" id="sublist">
                <li>2 50-50 chances</li>
                <li>3 Hints</li>
              </ul>
            </li>
            <li className="animated slideInDown">
              Selecting a 50-50 lifeline by clicking the icon
              <span className="mdi mdi-set-center mdi-24px lifeline-icon"></span>
              will remove 2 wrong answers, leaving the correct answer and one
              wrong answer
            </li>
            <li className="animated slideInDown">
              Using a hint by clicking the icon
              <span className="mdi mdi-lightbulb-on mdi-24px lifeline-icon"></span>
              will remove one wrong answer leaving two wrong answers and one
              correct answer. You can use as many hints as possible on a single
              question.
            </li>
          </ul>
          <div className="animated slideInDown">
            <span className="left">
              <Link to="/">Back</Link>
            </span>
            <span className="right">
              <Link to="/play/quiz">Start the quiz!</Link>
            </span>
          </div>
        </div>
      </b>
    </body>
  </Fragment>
);

export default QuizInstructions;

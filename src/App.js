import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home";
import QuizInstructions from "./components/quiz/QuizInstructions";
import Play from "./components/quiz/Play";
import QuizSummary from "./components/quiz/QuizSummary";
import Login from "./components/Login";
import Welcome from "./components/Welcome";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Welcome} />
      <Route path="/Home" exact component={Home} />
      <Route path="/play/instructions" exact component={QuizInstructions} />
      <Route path="/play/quiz" exact component={Play} />
      <Route path="/play/quizSummary" exact component={QuizSummary} />
      <Route path="/Login" exact component={Login} />
    </Router>
  );
}

export default App;

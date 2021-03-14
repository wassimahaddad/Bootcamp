import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Quiz from "./Quiz";
import QuizTitle from "./QuizTitle";
import Q1 from "./Q1";
import Q1Input from "./Q1Input";
import Q2 from "./Q2";
import Q2Input from "./Q2Input";

function App() {
  return (
    <div className="container">
      <Quiz />
      <QuizTitle />
      <Q1 />
      <Q1Input />
      <Q2 />
      <Q2Input />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

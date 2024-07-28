import { useState } from "react";
import Question from "../components/Question";

export default function GameSession(props) {

  const [questions, getQuestions] = useState(props.questions!==undefined? props.questions : [{
    question: "What is the answer to life, the universe and everything?",
    answers: ["Answer 1", "3", "42"],
    correct_answer: "42"
  }, {
    question: "What is the longest river in the world?",
    answers: ["Nile", "Amazonas", "Yangtze"],
    correct_answer: "Nile"
  }, {
    question: "What is the capital of Germany?",
    answers: ["Berlin", "Hamburg", "Munich"],
    correct_answer: "Berlin"
  }

]);


  return (
    <div>
      <h1>GameSession</h1>
      <Question questions={ questions } />
    </div>
  );
}
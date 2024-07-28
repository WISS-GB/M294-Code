import { useState } from "react";
import Question from "../components/Question";

export default function GameSession(props) {


  const [questions, getQuestions] = useState(props.questions!==undefined? props.questions : [{
    question: "What is the answer to life, the universe and everything?",
    answers: ["Answer 1", "3", "42"],
  }]);


  return (
    <div>
      <h1>GameSession</h1>
      <Question question={ questions[0] } />
    </div>
  );
}
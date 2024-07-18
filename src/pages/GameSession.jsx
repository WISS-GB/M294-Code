
import Question from "../components/Question";

export default function GameSession() {

  const question = {
    question: "What is the answer to life, the universe and everything?",
    answers: ["Answer 1", "3", "42"],
  };


  return (
    <div>
      <h1>GameSession</h1>
      <Question question={ question } />
    </div>
  );
}
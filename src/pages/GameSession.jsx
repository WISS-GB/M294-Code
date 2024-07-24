
import Question from "../components/Question";

export default function GameSession() {

  const questions = [
    {
      question: "What is the answer to life, the universe and everything?",
      answers: ["Answer 1", "3", "42"],
      correct_answer: "42"
    },
    {
      question: "What is the result of 21 * 2?",
      answers: ["21", "2", "42"],
      correct_answer: "42"
    },
    {
      question: "What is the result of 14 * 3?",
      answers: ["21", "2", "42"],
      correct_answer: "42"
    }];


  return (
    <div>
      <h2>Game - Session</h2>
      <Question questions={ questions } />
    </div>
  );
}
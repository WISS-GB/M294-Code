import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const QuestionList = () => {

  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch("http://localhost:8080/questions/",{ mode: "cors" })
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(data => {
        setQuestions(data)
      })
  }, []);

  return (
    <>
      <h1>Fragekatalog</h1>
      <div className="flex">
      <button><Link to="/categories/new">Neue Kategorie</Link></button>
      <button><Link to="/questions/new">Neue Frage</Link></button>
      </div>
      <table className="question-list">
        <thead>
          <tr>
            <th>Question</th>
            <th>Answer</th>
          </tr>
        </thead>
        <tbody>
          {questions.map(question => (
            <tr key={question.id}>
              <td>{question.question}</td>
              <td>{question.answers.map(a => <li>{a.answer}</li>)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>)
}

export default QuestionList
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

  const deleteQuestion = (event) => {
    const id = event.target.value
    fetch(`http://localhost:8080/questions/${id}`,{ method: "DELETE", mode: "cors" })
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        console.log(response.body);
        setQuestions(questions.filter(question => question.id !== id))
      })
  }

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
            <th>Frage</th>
            <th>Antwort</th>
          </tr>
        </thead>
        <tbody>
          {questions.map(question => (
            <tr key={question.id}>
              <td>{question.question}</td>
              <td>{question.answers.map(a => <li key={a.answer}>{a.answer}</li>)}</td>
              <td><button onClick={ deleteQuestion } value={question.id} >&#128465;</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>)
}

export default QuestionList
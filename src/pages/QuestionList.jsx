import { useEffect, useState } from "react";

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
              <td>{question.answers.map(a => <li>{a.answer}</li>)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>)
}

export default QuestionList
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const QuestionForm = () => {

  const [inputs, setInputs] = useState({})
  const [done, setDone] = useState(false)

  const handleChange = (event) => {
    const {name, value} = event.target
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  // required for redirection
  const navigate = useNavigate();
  // rediction on success
  useEffect(() => {
    if (done) {
      navigate('/questions', { replace: true });
    }
  }, [done, navigate]);

  const handleSubmit = (event) => {
    // strictly necessary to prevent the page from reloading(!!)
    event.preventDefault();

    if (inputs.question === "" || inputs.answer1 === "" || inputs.answer2 === "" || inputs.answer3 === "") {
      alert("Bitte alle Felder ausfüllen")
      return
    }

    if (document.querySelector('input[name="correct"]:checked') === null
        || document.querySelector('input[name="correct"]:checked') === undefined) {
      alert("Bitte eine richtige Antwort auswählen")
      return
    }

    let question = {
      "question": inputs.question,
      "answers" : [{
        "answer": inputs.answer1,
        "correct": inputs.correct === "answer1"
      },
      {
        "answer": inputs.answer2,
        "correct": inputs.correct === "answer2"
      },
      {
        "answer": inputs.answer3,
        "correct": inputs.correct === "answer3"
      }],
    }

    transmit(question)
  }

  const transmit = async(question) => {
    const response = await fetch("http://localhost:8080/questions/1/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(question)
    }).then((response) => {
      if (response.ok) {
        console.log("Frage wurde angelegt")
        setDone(true)
      } else {
        alert("Frage konnte nicht angelegt werden, Fehlercode: " + response.status)
      }
    })
  }

  return (
    <>
      <h2>Neue Frage hinzufügen</h2>
      <form action="" className='myform'>
        <div>
          <label htmlFor="question">Fragetext</label>
          <input type="text" name="question" id="question" className='long' onChange={ handleChange } />
        </div>
        <div>
          <label htmlFor="answer1">Antwort 1</label>
          <input type="text" name="answer1" id="answer1" onChange={ handleChange } />
          <label className='radio-control' htmlFor="a1_correct"><input type="radio" name="correct" id="a1_correct" value="answer1" onChange={ handleChange }/>Richtig</label>
        </div>

        <div>
          <label htmlFor="answer2">Antwort 2</label>
          <input type="text" name="answer2" id="answer2" onChange={ handleChange } />
          <label className='radio-control' htmlFor="a2_correct"><input type="radio" name="correct" id="a2_correct" value="answer2" onChange={ handleChange }/>Richtig</label>
        </div>

        <div>
          <label htmlFor="answer1">Antwort 3</label>
          <input type="text" name="answer3" id="answer3" onChange={ handleChange } />
          <label className='radio-control' htmlFor="a3_correct"><input type="radio" name="correct" id="a3_correct" value="answer3" onChange={ handleChange }/>Richtig</label>
        </div>
        <input type="hidden" name="category" id="category" value="1"/>
        <div>
          <button type="submit" onClick={ handleSubmit }>Frage hinzufügen</button>
          <button type="reset">Abbrechen</button>
        </div>
      </form>
    </>
  )

}

export default QuestionForm
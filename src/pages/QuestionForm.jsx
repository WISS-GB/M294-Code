import {useState,useEffect} from 'react';

const QuestionForm = () => {

  const [inputs, setInputs] = useState({})

  const handleChange = (event) => {
    const {name, value} = event.target
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  const handleSubmit = (event) => {

    if (inputs.question === "" || inputs.answer1 === "" || inputs.answer2 === "" || inputs.answer3 === "") {
      alert("Bitte alle Felder ausfüllen")
      event.preventDefault();
      return
    }

    if (document.querySelector('input[name="correct"]:checked') === null
        || document.querySelector('input[name="correct"]:checked') === undefined) {
      alert("Bitte eine richtige Antwort auswählen")
      event.preventDefault();
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

    fetch("http://localhost:8080/questions/1/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(question)
    }).then((response) => {
      if (response.status === 201 || response.status === 200) {
        console.log("Frage wurde angelegt")
      } else {
        alert("Frage konnte nicht angelegt werden, Fehlercode: " + response.status)
      }
    })
  }

  return (
    <>
      <h1>Neue Frage hinzufügen</h1>
      <form action="" className='myform'>
        <div>
          <label htmlFor="question">Fragetext</label>
          <input type="text" name="question" id="question" onChange={ handleChange } />
        </div>
        <div>
          <label htmlFor="answer1">Antwort 1</label>
          <input type="text" name="answer1" id="answer1" onChange={ handleChange } />
          <input type="radio" id="a1_correct" name="correct" value="answer1" onChange={ handleChange }/>
          <label htmlFor="a1_correct">Richtig</label>
        </div>

        <div>
          <label htmlFor="answer2">Antwort 2</label>
          <input type="text" name="answer2" id="answer2" onChange={ handleChange } />
          <input type="radio" name="correct" id="a2_correct" value="answer2" onChange={ handleChange }/>
          <label htmlFor="a2_correct">Richtig</label>
        </div>

        <div>
          <label htmlFor="answer1">Antwort 3</label>
          <input type="text" name="answer3" id="answer3" onChange={ handleChange } />
          <input type="radio" name="correct" id="a3_correct" value="answer3" onChange={ handleChange }/>
          <label htmlFor="a3_correct">Richtig</label>
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
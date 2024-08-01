import Button from './Button';
import { useState, useEffect } from 'react';
function Question() {
  const GAME_OVER = 2;

  const [state, setState] = useState(0)
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch("http://localhost:8080/questions/quiz/1",{ mode: "cors" })
//    fetch("https://opentdb.com/api.php?amount=3",{ mode: "cors" }) //an alternative multiple choice api with different data model
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(data => {
        shuffle(data)
        setQuestions(data)
      })
  }, []);

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }

  const evaluate_answer = (event) => {
    console.log("Hello, "+event.target.innerHTML)
    const answer = event.target.innerHTML
    document.getElementById("feedback").innerHTML = answer
    answer==questions[index].correct_answer
      ? handleCorrectAnswer()
      : handleWrongAnswer()

    setState(1)
  }

  const handleCorrectAnswer = () => {
    document.getElementById("smiley").src = "/img/kiss_smiley.png"
    setScore(score+1)
  }

  const handleWrongAnswer = () => {
    document.getElementById("smiley").src = "/img/sad_smiley.png"
  }

  const next_question = () => {
    if (index===questions.length-1) {
      setState(GAME_OVER)
      return
    }
    setIndex(index+1)
    setState(0)
  }

  const game_loads = () => {
    return (<>
      <h3>Loading...</h3>
    </>)
  }

  const game_over = () => {
    return (
      <>
        <h3>Spielende</h3>
        <p>Dein Score: { score } von { questions.length }</p>
        <Button label="Neues Spiel" onClick={ () => window.location.reload() }/>
    </>
    )
  }

  const game_screen = () => {
    return (<>
      <h2>{questions[index].question}</h2>
      { /* hier könnte ein Smiley entstehen */ }
      <img id="smiley" src="/img/question_smiley.png" alt="" />
      <hr />
      <>
          <h3>Score: { score } von { questions.length }</h3>
          <div className="buttonbar">
           { shuffle(questions[index].answers).map((label) =>
              <Button label={label} onClick={ state===0 ? evaluate_answer : null} key={ label }/>)}
          </div>
          </>
        : <></>
      <hr />
      <div className="feedbackbar">
        { state===1? <Button label="Weiter" onClick={ next_question }/> : <></>   }
        <div id="feedback">
        </div>
      </div>
    </>)
  }

  return (

    <div className="App">
      { questions.length===0 ? game_loads()
        : state===2 ? game_over()
            : game_screen()
          }
    </div>
  );
}

export default Question;

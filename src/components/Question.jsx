import Button from './Button';
import { useState, useEffect } from 'react';
function Question(props) {
  const GAME_OVER = 2;

  const [state, setState] = useState(0)
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)

  const evaluate_answer = (event) => {
    console.log("Hello, "+event.target.innerHTML)
    const answer = event.target.innerHTML
    document.getElementById("feedback").innerHTML = answer
    answer==props.questions[index].correct_answer
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
    if (index===props.questions.length-1) {
      setState(GAME_OVER)
      return
    }
    setIndex(index+1)
    setState(0)
  }

  return (

    <div className="App">
      <h2>{ state!==GAME_OVER? props.questions[index].question : "Ende" }</h2>
      { /* hier könnte ein Smiley entstehen */ }
      <img id="smiley" src="/img/question_smiley.png" alt="" />
      <hr />
      { state !== GAME_OVER
        ? <>
          <h3>Score: { score } von { props.questions.length }</h3>
          <div className="buttonbar">
            {props.questions[index].answers.map((label) =>
              <Button label={label} onClick={ state===0 ? evaluate_answer : null} key={ label }/>)}
          </div>
          </>
        : <></>
        }
      <hr />
      <div className="feedbackbar">
        { state===1? <Button label="Weiter" onClick={ next_question }/> : <></>   }
        { state===GAME_OVER?
          <>
            <h3>Spielende</h3>
            <p>Dein Score: { score } von { props.questions.length }</p>
            <Button label="Neues Spiel" onClick={ () => window.location.reload() }/>
          </>
           : <></>   }
        <div id="feedback">
        </div>
      </div>
    </div>
  );
}

export default Question;

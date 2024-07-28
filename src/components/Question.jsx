import Button from './Button';

function Question({question}) {

  const evaluate_answer = (event) => {
    console.log("Hello, "+event.target.innerHTML)
    const answer = event.target.innerHTML
    document.getElementById("feedback").innerHTML = answer
    answer==question.correct_answer
      ? document.getElementById("smiley").src = "/img/kiss_smiley.png"
      : document.getElementById("smiley").src = "/img/sad_smiley.png"
  }

  return (
    <div className="App">
      <h2>{ question.question }</h2>
      { /* hier könnte ein Smiley entstehen */ }
      <img id="smiley" src="/img/question_smiley.png" alt="" />
      <hr />
      <div className="buttonbar">
        {question.answers.map((label) => <Button label={label} onClick={ evaluate_answer } key={ label }/>)}
      </div>
      <hr />
      <div className="feedbackbar">
        { /*answer*/ }
        <div id="feedback">
        </div>
      </div>
    </div>
  );
}

export default Question;

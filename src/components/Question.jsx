import Button from "./Button";
export default function Question(props) {
  return (
    <div>
      <h1>Question</h1>
      <h2>{props.question.question}</h2>
      <div className="buttonbar">
        {
          props.question.answers.map((answer) => <Button label={answer} key={answer}/>)
        }
      </div>

    </div>
  );
}
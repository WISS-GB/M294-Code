import './App.css';
import Button from './Button';

const buttonLabels = ["Alpha", "Bravo", "Charlie"];

const myfun = (event) => {
  console.log("Hello, "+event.target.innerHTML);
  document.getElementById("feedback").innerHTML = event.target.innerHTML;
}

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Willkommen beim WISS-Quiz</h1>
        <hr />
        <h2>Welcher Begriff kommt im <a href="https://de.wikipedia.org/wiki/ICAO-Alphabet">ICAO-Buchstabieralphabet</a> zuerst?</h2>
        { /* hier könnte ein Smiley entstehen */ }
        <img src="/img/question_smiley.png" alt="" />
        <hr />
      </header>
      <div className="buttonbar">
        {buttonLabels.map((label) => <Button label={label} onClick={myfun} key={label}/>)}
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

export default App;

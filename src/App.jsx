import './App.css';
import GameSession from './pages/GameSession';
import Rules from './pages/Rules';
import Impressum from './pages/Impressum';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Willkommen beim WISS-Quiz</h1>
        <hr />
      </header>
      <GameSession />
      <hr />
      <Rules />
      <Impressum />
    </div>
  );
}

export default App;

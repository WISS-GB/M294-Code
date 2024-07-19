import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import GameSession from './pages/GameSession';
import Rules from './pages/Rules';
import Impressum from './pages/Impressum';

function App() {

  return (
    <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="quiz" element={<GameSession />} />
            <Route path="rules" element={<Rules />} />
            <Route path="impressum" element={<Impressum />} />

        </Route>
    </Routes>
  );
}

function Layout() {
  return (
      <div className="App">
      <div className="content">
          <header className="App-header">
          <h1>Welcome to the Wiss-Quiz</h1>
          <hr />
          <Outlet />
          <hr />
          </header>
      </div>
      </div>
  );
  }

export default App;

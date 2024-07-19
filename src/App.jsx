import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import GameSession from './pages/GameSession';
import Rules from './pages/Rules';
import Impressum from './pages/Impressum';
import GlobalNavigation from './components/GlobalNavigation';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="quiz" element={<GameSession />} />
          <Route path="rules" element={<Rules />} />
          <Route path="impressum" element={<Impressum />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function Layout() {
  return (
      <div className="App">
      <GlobalNavigation />
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

import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import GameSession from './pages/GameSession';
import Rules from './pages/Rules';
import Impressum from './pages/Impressum';
import CategoryForm from './pages/CategoryForm';
import QuestionForm from './pages/QuestionForm';
import QuestionList from './pages/QuestionList';
import GlobalNavigation from './components/GlobalNavigation';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="quiz" element={<GameSession />} />
          <Route path="rules" element={<Rules />} />
          <Route path='questions' element={<QuestionList />} />
          <Route path="impressum" element={<Impressum />} />
          <Route path="categories/new" element={<CategoryForm />} />
          <Route path="questions/new" element={<QuestionForm />} />
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
          <hr />
          <Outlet />
          <hr />
          </header>
      </div>
      </div>
  );
  }

export default App;

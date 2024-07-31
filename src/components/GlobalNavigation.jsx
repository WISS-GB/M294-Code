import { Link } from 'react-router-dom';

export default function GlobalNavigation() {
  return (
    <nav className='GlobalNavigation'>
      <Link to="/">Home</Link>
      <Link to="/quiz">Quiz</Link>
      <Link to="/rules">Rules</Link>
      <Link to="/questions">Questions</Link>
      <Link to="/impressum">Impressum</Link>
    </nav>
  );
}
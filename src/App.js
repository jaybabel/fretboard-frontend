import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ChordsSelection from './components/ChordsSelection';
import Login from './components/Login'
import Signup from './components/Signup'


export default function App() {
  return (
  <Router>
    <nav>
      <h1>Jay's Fretboard</h1>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
    </nav>

    <Routes>
      <Route path="/" element={<ChordsSelection />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </Router>
  );
  }


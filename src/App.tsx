import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Home from './pages/Home';
import Aktualnosci from './pages/Aktualnosci';
import Onas from './pages/Onas';
import Zasady from './pages/Zasady';
import Kontakt from './pages/Kontakt';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aktualnosci" element={<Aktualnosci />} />
        <Route path="/onas" element={<Onas />} />
        <Route path="/zasady" element={<Zasady />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import MovieDetail from './pages/MovieDetail/movieDetail';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/:id" element={<MovieDetail/>} />
      </Routes>
    </Router>
  );
}

export default App

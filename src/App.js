import nokia from './images/Logo-Nokia.png'
import About from './pages/about.js'
import Home from './pages/home.js'
import './styles/stylesheet.css';
import { Link, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className='App'>
      <nav className='navBar'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}/>
      </Routes>
    </div>


  );
}

export default App;

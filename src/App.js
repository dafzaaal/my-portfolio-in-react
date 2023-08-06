import nokia from './images/Logo-Nokia.png'
import About from './pages/about.js'
import Home from './pages/home.js'
import Contact from './pages/contact.js'
import Experience from './pages/experience.js'
import './styles/stylesheet.css';
import { Link, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className='App'>
      <nav className='navBar'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/experience">Experience</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/experience" element={<Experience />}/>
      </Routes>
    </div>


  );
}

export default App;

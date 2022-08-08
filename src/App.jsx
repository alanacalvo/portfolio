import './app.scss'
import NavBar from './Components/NavBar/NavBar';
import Intro from './Components/Intro/Intro';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Menu from './Components/Menu/Menu';
import { useState } from 'react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;

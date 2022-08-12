import './app.scss'
import NavBar from './Components/NavBar/NavBar';
import SideLinks from './Components/SideLinks/SideLinks';
import Intro from './Components/Intro/Intro';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects.jsx'
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Menu from './Components/Menu/Menu';
import { useState } from 'react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <SideLinks />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <About />
        <Skills />
        <Projects />
        {/* <Portfolio /> */}
        <Contact />
      </div>
    </div>
  );
}

export default App;

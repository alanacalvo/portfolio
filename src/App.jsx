import './app.scss'
import NavBar from './Components/NavBar/NavBar';
import Skills from './Components/Skills/Skills';
import Intro from './Components/Intro/Intro';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="app">
      <NavBar />
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

import './Intro.scss'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'

function Intro() {

  const textRef = useRef();

  useEffect(()=> { // running twice at once.
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ['Engineer', 'Developer', 'Designer']
    })
  },[])

  return (
    <div className='intro' id='intro'>
      <div className="left">
    <div className="imgContainer">
      <img src='assets/alana.png' alt='portfolio-owner-image'></img>
    </div>
      </div>
      <div className="right">
    <div className="wrapper">
      <h2>
        Hi there!
      </h2>
      <h1>I'm Alana Calvo</h1>
      <h3>Freelance <span ref={textRef}></span></h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque quo corporis, deleniti tempora veniam sapiente quam blanditiis cumque, asperiores rem architecto aspernatur eius delectus quas vel? Reiciendis dolores necessitatibus odio?</p>
    </div>
    <a href='#skills'>V</a>
      </div>
  </div>
  )
}

export default Intro
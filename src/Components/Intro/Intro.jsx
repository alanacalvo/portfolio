import './Intro.scss'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'

function Intro() {

  const textRef = useRef();

  useEffect(() => { // running twice at once.
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ['Engineer', 'Developer', 'Designer']
    })
  }, [])

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
          <p>Driven and energetic software engineer that is passionate about creating impactful solutions that help bring the change we need to see in the world. Creative at heart and bubbling with an eager desire to learn something new each day. As a mother, I have learned to be quick on my feet and have become skilled at problem-solving, communication, management, multi-tasking, and many more. Enjoys the thrill of solving a challenge. A tech savvy, flexible, dedicated team member, passionate about new technology.</p>
        </div>
        <a href='#skills'>V</a>
      </div>
    </div>
  )
}

export default Intro
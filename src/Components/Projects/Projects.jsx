import './Projects.scss'
import { useState } from 'react';

function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: '1',
      icon: '',
      title: '2048',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit distinctio esse vero aperiam sunt? Deserunt.',
      img: 'assets/2048.png',
      link: 'https://alanacalvo.github.io/project1/'
    },
    {
      id: '2',
      icon: '',
      title: 'GamerList',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit distinctio esse vero aperiam sunt? Deserunt.',
      img: 'assets/GamerList.png',
      link: ''
    },
    {
      id: '3',
      icon: '',
      title: 'JellyJam',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit distinctio esse vero aperiam sunt? Deserunt.',
      img: 'assets/JellyJam.png',
      link: 'https://jellyjam.netlify.app/'
    },
    {
      id: '4',
      icon: '',
      title: 'FocusUp',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit distinctio esse vero aperiam sunt? Deserunt.',
      img: 'assets/FocusUp.png',
      link: 'https://focusup.netlify.app'
    },
  ]

  const handleClick = (way) => {
    way === 'left' 
    ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) 
    : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  }

  return (
    <div className='projects' id='projects'>
      <h1>Projects</h1>
      <div className="slider" 
          style={{transform:`translateX(-${currentSlide *100}vw)`}}
        >
        {data.map((d) => (

          <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src="assets/javascript.png" alt="" />
                </div>
                <h2>{d.title}</h2>
                <p>{d.desc}</p>
                <a href={d.link} target='_blank'>Live Demo</a>
              <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img src={d.img} alt="" />
            </div>
          </div>
        </div>
        ))
        }
      </div>
      <img src="assets/arrow.png" 
      className='arrow left' alt="" 
      onClick={()=>handleClick('left')}/>

      <img src="assets/arrow.png" 
      className='arrow right' alt="" 
      onClick={()=>handleClick('right')}/>
    </div>
  )
}

export default Projects
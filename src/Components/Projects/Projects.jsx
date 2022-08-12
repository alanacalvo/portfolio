import './Projects.scss'
import { useState } from 'react';

function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: '1',
      icon: '',
      title: '2048',
      desc: 'Recreation of the web game 2048.',
      img: 'assets/2048.png',
      link: 'https://alanacalvo.github.io/project1/'
    },
    {
      id: '2',
      icon: '',
      title: 'GamerList',
      desc: 'A video game database in which the user can like, add, and delete video games from their wishlist.',
      img: 'assets/GamerList.png',
      link: ''
    },
    {
      id: '3',
      icon: '',
      title: 'JellyJam',
      desc: 'A group project using the Spotify API to recreate the Spotify Web Player.',
      img: 'assets/JellyJam.png',
      link: 'https://jellyjam.netlify.app/'
    },
    {
      id: '4',
      icon: '',
      title: 'FocusUp',
      desc: 'A web app where users can create and schedule timed focus sessions and keep track of factors that helped them be more productive.',
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
      <div className="title">

      <h1>Projects</h1>
      </div>

      <div className="slider" 
          style={{transform:`translateX(-${currentSlide *100}vw)`}}
        >
        {data.map((d) => (

          <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                {/* <div className="imgContainer">
                  <img src="assets/javascript.png" alt="" />
                </div> */}
                <h2>{d.title}</h2>
                <p>{d.desc}</p>
                <a href={d.link} target='_blank'>Live Demo</a>
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
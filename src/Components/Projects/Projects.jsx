import './Projects.scss'

function Projects() {
  const data = [
    {
      id: '1',
      icon: '',
      title: '2048',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit distinctio esse vero aperiam sunt? Deserunt.',
      img: '',
    },
    {
      id: '2',
      icon: '',
      title: 'GamerList',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit distinctio esse vero aperiam sunt? Deserunt.',
      img: 'assets/GamerList.png',
    },
    {
      id: '3',
      icon: '',
      title: 'JellyJam',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit distinctio esse vero aperiam sunt? Deserunt.',
      img: 'assets/JellyJam.png',
    },
    {
      id: '4',
      icon: '',
      title: 'FocusUp',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit distinctio esse vero aperiam sunt? Deserunt.',
      img: 'assets/FocusUp.png',
    },
  ]

  return (
    <div className='projects' id='projects'>
      <div className="slider">
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
      <img src="assets/arrow.png" className='arrow left' alt="" />
      <img src="assets/arrow.png" className='arrow right' alt="" />
    </div>
  )
}

export default Projects
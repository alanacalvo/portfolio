import './Projects.scss'

function Projects() {
  return (
    <div className='projects' id='projects'>
      <h1>Projects</h1>
      <ul>
        <li className='active'>2048</li>
        <li>GamerList</li>
        <li>JellyJam</li>
        <li>FocusUp</li>
      </ul>
      <div className="container">
        <div className="item">
          <img src='assets/react.png' alt=''/>
          <h3>2048</h3>
        </div>
      </div>
      <div className="container">
        <div className="item">
          <img src='assets/react.png' alt=''/>
          <h3>GamerList</h3>
        </div>
      </div>
      <div className="container">
        <div className="item">
          <img src='assets/react.png' alt=''/>
          <h3>JellyJam</h3>
        </div>
      </div>
      <div className="container">
        <div className="item">
          <img src='assets/react.png' alt=''/>
          <h3>Focus App</h3>
        </div>
      </div>
      </div>
  )
}

export default Projects
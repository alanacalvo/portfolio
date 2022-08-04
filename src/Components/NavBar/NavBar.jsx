import './NavBar.scss'
import TerminalIcon from '@mui/icons-material/Terminal';

function NavBar() {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="left">
          <a href='#home' className='logo'>[ AC
          <TerminalIcon className='terminalIcon'/>]
          </a>
          <div className="itemContainer">
            
          </div>
        </div>
        <div className="right">
          <a href='#about'>About</a>
          <a href='#skills'>Skills</a>
          <a href='#projects'>Projects</a>
          <a href='#contact'>Contact</a>
        </div>
      </div>
    </div>
  )
}

export default NavBar
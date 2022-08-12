import './NavBar.scss'
import TerminalIcon from '@mui/icons-material/Terminal';
import Pdf from './Documents/Alana Calvo Resume.pdf'

function NavBar({ menuOpen, setMenuOpen }) {
  return (
  <div className={`navbar ${menuOpen && 'active'}`}>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>[ AC
          <TerminalIcon className='terminalIcon'/>
          ]
          </a>
          <div className='itemContainer'>
          <TerminalIcon className='icon'/>
            <span>alanapcalvo@gmail.com</span>
          </div>
          <div className='itemContainer'>
          <TerminalIcon className='icon'/>
            <span>3863155385</span>
          </div>
          <div className='itemContainer'>
          <TerminalIcon className='icon'/>
            <span>
              <a href={Pdf} target='_blank'>Resume</a>
            </span>
          </div>
        </div>
        <div className="right">
          <div 
          className='hamburger'
          onClick={()=>setMenuOpen(!menuOpen)}
          >
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
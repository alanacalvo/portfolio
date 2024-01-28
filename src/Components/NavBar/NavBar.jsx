import "./NavBar.scss";
import TerminalIcon from "@mui/icons-material/Terminal";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import DescriptionIcon from "@mui/icons-material/Description";
import Pdf from "./Documents/Alana Calvo Resume 2024.pdf";

function NavBar({ menuOpen, setMenuOpen }) {
  return (
    <div className={`navbar ${menuOpen && "active"}`}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            [ AC
            <TerminalIcon className="terminalIcon" />]
          </a>
          <div className="itemContainer">
            <MailOutlineIcon className="icon" />
            <span>
              <a href="mailto:alanapcalvo@gmail.com">alanapcalvo@gmail.com</a>
            </span>
          </div>
          <div className="itemContainer">
            <PermPhoneMsgIcon className="icon" />
            <span>
              <a href="tel:386-315-5385">386-315-5385</a>
            </span>
          </div>
          <div className="itemContainer">
            <DescriptionIcon className="icon" />
            <span>
              <a href={Pdf} target="_blank" rel="noreferrer">
                Resume
              </a>
            </span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

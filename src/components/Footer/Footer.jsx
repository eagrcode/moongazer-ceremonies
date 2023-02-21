// styles
import "./Footer.css";

// libraries
import { NavLink } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";

// images
import AOIC from "../../assets/AOIC-logo.jpg";

function Footer() {
  return (
    <footer>
      <nav className="footer-navbar">
        <NavLink to="/" className="nav-link" id="logo">
          Moon Gazer Ceremonies
        </NavLink>

        <ul className="footer-nav-menu">
          <li className="nav-item">
            <NavLink to="/" className="nav-link footer">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/ceremonies" className="nav-link footer">
              Ceremonies
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/link3" className="nav-link footer">
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="#" className="nav-link footer">
              Link 4
            </NavLink>
          </li>
        </ul>
        <a rel="nofollow" target="_blank" href="https://www.instagram.com/moongazerceremonies/">
          <AiFillInstagram size={30} />
        </a>
        <div className="bottom-footer">
          <div className="hitched-container">
            <a
              rel="nofollow"
              target="_blank"
              href="https://www.hitched.co.uk"
              title="Hitched.co.uk"
            >
              <img
                alt="Hitched.co.uk"
                src="https://www.hitched.co.uk/images/sellos/partner--gg322007.png"
              />
            </a>
          </div>
          <div className="aoic-container">
            <img src={AOIC} alt="AOIC-certification" />
          </div>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;

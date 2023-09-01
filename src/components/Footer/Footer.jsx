// styles
import "./Footer.css";

// libraries
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagram } from "@fortawesome/free-brands-svg-icons";

// images
import AOIC from "../../assets/AOIC-logo.jpg";
import CCL from "../../assets/CCL-logo.jpg";
import FCC from "../../assets/fcc-badge.png";

function Footer() {
  return (
    <footer>
      <nav className="footer-navbar">
        <NavLink to="/" className="nav-link footer-logo">
          MoonGazer Ceremonies
        </NavLink>

        <ul className="footer-nav-menu">
          <li className="nav-item footer">
            <NavLink to="/" className="nav-link footer">
              Home
            </NavLink>
          </li>
          <li className="nav-item footer">
            <a href="#ceremoniesTag" className="nav-link footer">
              Ceremonies
            </a>
          </li>
          <li className="nav-item footer">
            <NavLink to="/contact" className="nav-link footer">
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="footer-social-container">
          <a
            rel="nofollow"
            target="_blank"
            href="https://www.instagram.com/moongazerceremonies/"
            aria-label="link to moongazer ceremonies instagram"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              size="xl"
              style={{ color: "var(--accent-color)" }}
            />
          </a>
          <a
            rel="nofollow"
            target="_blank"
            href="https://www.facebook.com/moongazerceremonies"
            aria-label="link to moongazer ceremonies facebook"
          >
            <FontAwesomeIcon
              icon={faFacebookSquare}
              size="xl"
              style={{ color: "var(--accent-color)" }}
            />
          </a>
        </div>
      </nav>
      <div className="bottom-footer">
        <div className="hitched-container">
          <a
            rel="nofollow"
            target="_blank"
            href="https://www.hitched.co.uk/wedding-celebrants/moon-gazer-ceremonies_322007.htm"
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
        <div className="hitched-container">
          <span>Trained by</span>
          <img alt="CCL cert" src={CCL} />
        </div>
        <div className="fcc-container">
          <img alt="FCC cert" src={FCC} />
        </div>
      </div>
      <div className="eagrcodeCon">
        <p>
          Created by{" "}
          <a href="https://eagrcode.dev" target="_blank" style={{ textDecoration: "underline" }}>
            eagrcode.dev
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

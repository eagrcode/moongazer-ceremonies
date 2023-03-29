// styles
import "./Footer.css";

// libraries
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagram } from "@fortawesome/free-brands-svg-icons";

// images
import AOIC from "../../assets/AOIC-logo.jpg";
import CCL from "../../assets/CCL-logo.jpg";

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
            <NavLink to="/ceremonies" className="nav-link footer">
              Ceremonies
            </NavLink>
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
            <img alt="Hitched.co.uk" src={CCL} />
          </div>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;

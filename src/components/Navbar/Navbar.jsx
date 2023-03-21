// react
import { useState } from "react";

// libraries
import { Outlet, NavLink } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";

// components
import { Hamburger } from "../index";

// CSS
import "./Navbar.css";

// logo
import Logo from "../../assets/logos/Moon_White.png";

function Navbar() {
  // state
  const [isOpen, setIsOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  // const [isScrolling, setIsScrolling] = useState(false);

  // Toggle open nav menu
  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  // Toggle open sub nav menu
  function toggleSubMenu() {
    setIsSubMenuOpen(!isSubMenuOpen);
  }

  // Set Nav bg color on scroll
  // function handleScroll() {
  //   if (window.scrollY >= 1) {
  //     setIsScrolling(true);
  //   } else {
  //     setIsScrolling(false);
  //   }
  // }
  // window.addEventListener("scroll", handleScroll);

  // disable body scroll if mobile menu open
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }

  return (
    <>
      <header>
        <nav onMouseLeave={() => setIsSubMenuOpen(false)} className="navbar">
          <div className="logo-container">
            <div className="logo-img-container">
              <img src={Logo} />
            </div>
            <span id="logo-text">MoonGazer Ceremonies</span>
          </div>

          <Hamburger toggleMenu={toggleMenu} isOpen={isOpen} />

          <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
            <li className={`nav-item ${isOpen ? "active" : "main"}`}>
              <NavLink
                onMouseEnter={() => setIsSubMenuOpen(false)}
                onClick={isOpen ? toggleMenu : undefined}
                to="/"
                className="nav-link"
              >
                Home
              </NavLink>
            </li>

            <li className={`nav-item ${isOpen ? "active" : ""}`}>
              <div className="dropdown-top">
                <NavLink
                  onClick={isOpen ? toggleMenu : undefined}
                  onMouseEnter={() => setIsSubMenuOpen(true)}
                  to="/ceremonies"
                  className="nav-link"
                  id="ceremonies-link"
                >
                  Ceremonies
                </NavLink>
                <button id="dropdown-btn">
                  <BsChevronDown
                    onClick={toggleSubMenu}
                    size={20}
                    id="dropdown-icon"
                    style={{ color: "white" }}
                  />
                </button>
              </div>

              <ul className={`ceremony-dropdown ${isSubMenuOpen ? "active" : ""}`}>
                <li className="nav-item sub">
                  <NavLink
                    onClick={isOpen ? toggleMenu : undefined}
                    to="/wedding"
                    className="nav-link dropdown"
                  >
                    Weddings
                  </NavLink>
                </li>
                <li className="nav-item sub">
                  <NavLink
                    onClick={isOpen ? toggleMenu : undefined}
                    to="/renewal"
                    className="nav-link dropdown"
                  >
                    Vow Renewal
                  </NavLink>
                </li>
                <li className="nav-item sub">
                  <NavLink
                    onClick={isOpen ? toggleMenu : undefined}
                    to="/unity"
                    className="nav-link dropdown"
                  >
                    Commitment
                  </NavLink>
                </li>
                <li className="nav-item sub">
                  <NavLink
                    onClick={isOpen ? toggleMenu : undefined}
                    to="/naming"
                    className="nav-link dropdown"
                  >
                    Naming
                  </NavLink>
                </li>
                <li className="nav-item sub">
                  <NavLink
                    onClick={isOpen ? toggleMenu : undefined}
                    to="/funeral"
                    className="nav-link dropdown"
                  >
                    Funeral
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className={`nav-item ${isOpen ? "active" : ""}`}>
              <NavLink
                onClick={isOpen ? toggleMenu : undefined}
                onMouseEnter={() => setIsSubMenuOpen(false)}
                to="contact"
                className="nav-link"
              >
                Contact
              </NavLink>
            </li>
            <ul className="social-links-menu">
              <li className={`nav-item ${isOpen ? "active" : ""}`}>
                <a
                  rel="nofollow"
                  target="_blank"
                  href="https://www.instagram.com/moongazerceremonies/"
                >
                  <AiFillInstagram size={30} style={{ color: "var(--secondary-text-color)" }} />
                </a>
              </li>
              <li className={`nav-item ${isOpen ? "active" : ""}`}>
                <a
                  rel="nofollow"
                  target="_blank"
                  href="https://www.facebook.com/moongazerceremonies"
                >
                  <AiFillFacebook size={30} style={{ color: "var(--secondary-text-color)" }} />
                </a>
              </li>
            </ul>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Navbar;

// react
import { useState } from "react";

// libraries
import { Outlet, NavLink } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";

// components
import { Hamburger } from "../index";

// CSS
import "./Navbar.css";

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
  // if (isOpen) {
  //   document.body.style.overflow = "hidden";
  // } else {
  //   document.body.style.overflow = "visible";
  // }

  return (
    <>
      <header>
        <nav className="navbar">
          <NavLink onClick={isOpen ? toggleMenu : undefined} to="/" className="nav-link" id="logo">
            Moongazer Celebrant
          </NavLink>
          <Hamburger toggleMenu={toggleMenu} isOpen={isOpen} />

          <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
            <li className="nav-item">
              <NavLink onClick={isOpen ? toggleMenu : undefined} to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <div className="dropdown-top">
                <NavLink
                  onClick={isOpen ? toggleMenu : undefined}
                  to="/ceremonies"
                  className="nav-link"
                  id="ceremonies-link"
                >
                  Ceremonies
                </NavLink>
                <BsChevronDown onClick={toggleSubMenu} size={20} id="dropdown-icon" />
              </div>
              <ul className={`ceremony-dropdown ${isSubMenuOpen ? "active" : ""}`}>
                <li className="nav-item">
                  <NavLink
                    onClick={isOpen ? toggleMenu : undefined}
                    to="/wedding"
                    className="nav-link dropdown"
                  >
                    Weddings
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    onClick={isOpen ? toggleMenu : undefined}
                    to="/renewal"
                    className="nav-link dropdown"
                  >
                    Marriage Renewal
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    onClick={isOpen ? toggleMenu : undefined}
                    to="/unity"
                    className="nav-link dropdown"
                  >
                    Unity
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink onClick={isOpen ? toggleMenu : undefined} to="/link3" className="nav-link">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={isOpen ? toggleMenu : undefined} to="/link4" className="nav-link">
                Link 4
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Navbar;

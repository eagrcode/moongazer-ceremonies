// CSS
import "./Hamburger.css";

function Hamburger({ toggleMenu, isOpen }) {
  return (
    <div onClick={toggleMenu} className={`hamburger ${isOpen ? "active" : ""}`}>
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
  );
}

export default Hamburger;

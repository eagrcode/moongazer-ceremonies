// CSS
import "./Hero.css";

import Hero1 from "../../assets/cake-table.jpg";

function Hero() {
  return (
    <div
      className="hero-container"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.05), hsl(175, 40%, 95%)), url(${Hero1})`,
      }}
    >
      <div className="hero-text-container">
        <h1 id="hero-text">Moongazer Ceremonies</h1>
      </div>
    </div>
  );
}

export default Hero;

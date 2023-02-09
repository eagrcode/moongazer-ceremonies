// CSS
import "./Hero.css";

import Hero1 from "../../assets/hero1.jpg";

function Hero() {
  return (
    <div
      className="hero-container"
      style={{
        backgroundImage: `url(${Hero1})`,
      }}
    >
      <div className="hero-text-container">
        <em id="tagline">I make good celebrant things</em>
      </div>
    </div>
  );
}

export default Hero;

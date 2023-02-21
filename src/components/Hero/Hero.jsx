// CSS
import "./Hero.css";

import Hero1 from "../../assets/cake-table.jpg";

function Hero() {
  return (
    <div
      className="hero-container"
      // style={{
      //   backgroundImage: `linear-gradient(hsl(175, 40%, 95%, 0.1), hsl(175, 40%, 95%)), url(${Hero1})`,
      // }}
      style={{
        backgroundImage: `url(${Hero1})`,
      }}
    >
      <div className="hero-text-container">
        <h1 id="hero-text">Moon Gazer Ceremonies</h1>
      </div>
    </div>
  );
}

export default Hero;

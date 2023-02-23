// CSS
import "./Hero.css";

import Hero1 from "../../assets/cake-table.jpg";
import Hero2 from "../../assets/cake-table-bw.jpg";

function Hero() {
  return (
    <div
      className="hero-container"
      style={{
        backgroundImage: `linear-gradient(hsl(185, 60%, 97%, 0.4), hsl(185, 60%, 97%)), url(${Hero1})`,
      }}
      // style={{
      //   backgroundImage: `url(${Hero2})`,
      // }}
    >
      <div className="hero-text-container">
        <h1 id="hero-text">Moon Gazer Ceremonies</h1>
      </div>
    </div>
  );
}

export default Hero;

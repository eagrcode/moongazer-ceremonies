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
      {/* <img className="hero-img" src={Hero1} /> */}
      {/* <div className="hero-text-container">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
      </div> */}
    </div>
  );
}

export default Hero;

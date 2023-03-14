// CSS
import "./Hero.css";

function Hero() {
  return (
    <div
      className="hero-container"
      // style={{
      //   backgroundImage: `linear-gradient(hsl(185, 60%, 97%, 0.4), hsl(185, 60%, 97%)), url(${Hero3})`,
      // }}
      // style={{
      //   backgroundImage: `url(${Hero3})`,
      // }}
    >
      <div className="hero-text-container">
        <h1 id="hero-text">MoonGazer Ceremonies</h1>
      </div>
    </div>
  );
}

export default Hero;

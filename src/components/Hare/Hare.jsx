// styles
import "./Hare.css";

// images
import HareNavy from "../../assets/logos/Hare_Navy.png";
import HareWhite from "../../assets/logos/Hare_White.png";

function Hare({ side, color }) {
  return (
    <div className={`hare ${side}`}>
      <img src={color === "white" ? HareWhite : HareNavy} alt="hare-logo-moongazer-ceremonies" />
    </div>
  );
}

export default Hare;

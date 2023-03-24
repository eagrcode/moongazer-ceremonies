// styles
import "./Hare.css";

// images
import HareNavy from "../../assets/logos/Hare_Navy.png";

function Hare({ side }) {
  return (
    <div className={`hare ${side}`}>
      <img src={HareNavy} />
    </div>
  );
}

export default Hare;

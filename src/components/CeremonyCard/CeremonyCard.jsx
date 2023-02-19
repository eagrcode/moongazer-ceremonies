// components
import { ImageContainer, MainBtn } from "../../components";

// libraries
import { Link } from "react-router-dom";

// styles

import "./CeremonyCard.css";

function CeremonyCard({ title, img, path }) {
  return (
    <div className="ceremony-card">
      <ImageContainer img={img} />
      <h1>{title}</h1>
      <Link to={`${path}`}>
        <MainBtn text={"Learn More"} type={"btn-dark"} />
      </Link>
    </div>
  );
}

export default CeremonyCard;

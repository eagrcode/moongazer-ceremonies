// components
import { ImageContainer, MainBtn } from "../../components";

// libraries
import { Link } from "react-router-dom";

// styles

import "./CeremonyCard.css";

function CeremonyCard({ title, img, path }) {
  return (
    <div className="ceremony-card">
      <h2>{title}</h2>
      <ImageContainer img={img} />
      <div className="ceremony-card-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ab nulla reprehenderit
        dolore, quo et suscipit! Maiores eius quos dolores dolore odit natus nemo harum impedit.
        Placeat soluta iste sint?
      </div>
      <Link to={`${path}`}>
        <MainBtn text={"Learn More"} type={"btn-dark"} />
      </Link>
    </div>
  );
}

export default CeremonyCard;

// components
import { ImageContainer, MainBtn } from "../../components";

// libraries
import { Link } from "react-router-dom";

// styles
import "./CeremonyCard.css";

function CeremonyCard({ title, img, path, alt }) {
  return (
    <div className="ceremony-card">
      <ImageContainer img={img} alt={alt} />
      <h1>{title}</h1>
      <Link to={`${path}`}>
        <MainBtn text={"Learn More"} type={"btn-dark"} />
      </Link>
    </div>
  );
}

export default CeremonyCard;

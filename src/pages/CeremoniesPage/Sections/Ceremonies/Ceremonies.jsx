import { CeremonyCard } from "../../../../components";

// images
import Wedding from "../../../../assets/wedding.jpg";
import Renewal from "../../../../assets/renewal.jpg";
import Commitment from "../../../../assets/commitment-ceremony.jpg";
import Naming from "../../../../assets/naming-ceremony.jpg";
import Funeral from "../../../../assets/funeral.jpg";

// Styles
import "./Ceremonies.css";

function Ceremonies() {
  return (
    <section className="content-section ceremonies">
      <div className="ceremonies-grid">
        <CeremonyCard title={"Weddings"} img={Wedding} path={"/wedding"} />
        <CeremonyCard title={"Vow Renewal"} img={Renewal} path={"/renewal"} />
        <CeremonyCard title={"Commitment"} img={Commitment} path={"/unity"} />
        <CeremonyCard title={"Naming"} img={Naming} path={"/naming"} />
        <CeremonyCard title={"Funeral"} img={Funeral} path={"/funeral"} />
      </div>
    </section>
  );
}

export default Ceremonies;

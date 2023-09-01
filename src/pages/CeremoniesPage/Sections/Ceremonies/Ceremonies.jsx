// components
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
    <section className="content-section ceremonies" id="ceremoniesTag">
      <div className="text-container">
        <h2 className="section-heading">Ceremonies</h2>
        <div className="ceremonies-grid">
          <CeremonyCard
            title={"Weddings"}
            img={Wedding}
            path={"/wedding"}
            alt={"wedding-ceremony"}
          />
          <CeremonyCard title={"Vow Renewal"} img={Renewal} path={"/renewal"} alt={"vow-renewal"} />
          <CeremonyCard
            title={"Commitment"}
            img={Commitment}
            path={"/unity"}
            alt={"commitment-ceremony"}
          />
          <CeremonyCard title={"Naming"} img={Naming} path={"/naming"} alt={"naming-ceremony"} />
          <CeremonyCard
            title={"Funeral"}
            img={Funeral}
            path={"/funeral"}
            alt={"funeral-ceremony"}
          />
        </div>
      </div>
    </section>
  );
}

export default Ceremonies;

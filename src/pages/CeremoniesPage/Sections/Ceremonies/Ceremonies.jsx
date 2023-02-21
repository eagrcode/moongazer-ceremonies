import { CeremonyCard } from "../../../../components";

// images
import OldCouple from "../../../../assets/old-couple.jpg";
import CakeTable from "../../../../assets/cake-table.jpg";
import Table from "../../../../assets/table.jpg";
import Baby from "../../../../assets/Baby.jpg";

// Styles
import "./Ceremonies.css";

function Ceremonies() {
  return (
    <section className="content-section ceremonies">
      <div className="ceremonies-grid">
        <CeremonyCard title={"Weddings"} img={Table} path={"/wedding"} />
        <CeremonyCard title={"Vow Renewal"} img={OldCouple} path={"/renewal"} />
        <CeremonyCard title={"Commitment"} img={Table} path={"/unity"} />
        <CeremonyCard title={"Naming"} img={Baby} path={"/naming"} />
      </div>
    </section>
  );
}

export default Ceremonies;

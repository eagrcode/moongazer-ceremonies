import { CeremonyCard } from "../../../../components";

// images
import Wedding from "../../../../assets/wedding-card.jpg";
import CakeTable from "../../../../assets/cake-table.jpg";
import Table from "../../../../assets/table.jpg";

// Styles
import "./Ceremonies.css";

function Ceremonies() {
  return (
    <section className="content-section ceremonies">
      <div className="ceremonies-grid">
        <CeremonyCard title={"Weddings"} img={CakeTable} path={"/wedding"} />
        <CeremonyCard title={"Vow Renewal"} img={CakeTable} path={"/renewal"} />
        <CeremonyCard title={"Unity"} img={Table} path={"/unity"} />
        <CeremonyCard title={"Naming"} img={Table} path={"/naming"} />
      </div>
    </section>
  );
}

export default Ceremonies;

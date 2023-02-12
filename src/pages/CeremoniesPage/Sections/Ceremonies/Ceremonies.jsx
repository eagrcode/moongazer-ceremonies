import { CeremonyCard } from "../../../../components";

// images
import Wedding from "../../../../assets/wedding-card.jpg";
import CakeTable from "../../../../assets/cake-table.jpg";
import Table from "../../../../assets/table.jpg";

function Ceremonies() {
  return (
    <section className="content-section ceremonies">
      <CeremonyCard title={"Weddings"} img={Wedding} path={"/wedding"} />
      <CeremonyCard title={"Vow Renewal"} img={CakeTable} path={"/renewal"} />
      <CeremonyCard title={"Unity"} img={Table} path={"/unity"} />
      <CeremonyCard title={"Naming"} img={Table} path={"/naming"} />
    </section>
  );
}

export default Ceremonies;

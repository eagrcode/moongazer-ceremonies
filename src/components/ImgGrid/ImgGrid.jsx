// styles
import "./ImgGrid.css";

// images
import Grid1 from "../../assets/Grid-1.jpg";
import Grid2 from "../../assets/Grid-2.jpg";
import Grid3 from "../../assets/Grid-3.jpg";
import Grid4 from "../../assets/Grid-4.jpg";

function ImgGrid() {
  console.log(Grid1);
  return (
    <section className="content-section img-grid">
      <div className="img-grid">
        <div className="img-grid-item">
          <img src={Grid1} alt="barn-wedding" />
        </div>
        <div className="img-grid-item">
          <img src={Grid2} alt="girl-wedding-flowers" />
        </div>
        <div className="img-grid-item">
          <img src={Grid3} alt="wedding-baby" />
        </div>
        <div className="img-grid-item">
          <img src={Grid4} alt="wedding-cake-table" />
        </div>
      </div>
    </section>
  );
}

export default ImgGrid;

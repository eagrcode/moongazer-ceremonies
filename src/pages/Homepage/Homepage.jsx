// styles
import "./Homepage.css";

// components
import { Hero, ImageContainer, ImgGrid } from "../../components";

// sections
import { About, Planning, Why } from "../../pages";

// images
import Jump from "../../assets/Jump cropped.jpg";

function Homepage() {
  return (
    <>
      <Hero />
      <About title={"About Me"} />
      <ImageContainer img={Jump} />
      <Why title={"Why Choose A Celebrant?"} />
      <ImgGrid />
      <Planning title={"Planning"} />

      <div className="homepage-quote-container">
        <div>
          <em>
            <q>Dee make very good day for my ceremony was very nice</q>
          </em>
          <p>- Joe Bloggs</p>
        </div>
      </div>
    </>
  );
}

export default Homepage;

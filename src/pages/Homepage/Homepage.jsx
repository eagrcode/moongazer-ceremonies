// styles
import "./Homepage.css";

// components
import { Hero, ImageContainer } from "../../components";

// sections
import { About, Planning } from "../../pages";

// images
import Jump from "../../assets/Jump cropped.jpg";

function Homepage() {
  return (
    <>
      <Hero />
      <About title={"About Me"} />
      <ImageContainer img={Jump} />
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

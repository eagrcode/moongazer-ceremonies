// styles
import "./Homepage.css";

// components
import { Hero, ImageContainer } from "../../components";

// sections
import { About, Planning } from "../../pages";

// images
import Jump from "../../assets/jump.jpg";

function Homepage() {
  return (
    <>
      <Hero />
      <About title={"About Me"} />
      <ImageContainer img={Jump} />
      <Planning title={"Planning"} />
      <div className="homepage-quote-container">
        <div>
          <q>Dee make very good day for my ceremony was very nice</q>
          <em>- Joe Bloggs</em>
        </div>
      </div>
    </>
  );
}

export default Homepage;

// components
import { Hero, About, Planning, ImageContainer } from "../../components";

// images
import Borat2 from "../../assets/borat 2.jpg";
import Jump from "../../assets/jump.jpg";

function Homepage() {
  return (
    <>
      <Hero />
      <About title={"About Me"} />
      <ImageContainer img={Jump} />
      <Planning title={"Planning"} />
    </>
  );
}

export default Homepage;

// components
import { Hero, About, Planning, ImageContainer } from "../../components";

// images
import Borat2 from "../../assets/borat 2.jpg";

function Homepage() {
  return (
    <>
      <Hero />
      <About title={"About Me"} />
      <ImageContainer img={Borat2} />
      <Planning title={"Planning"} />
    </>
  );
}

export default Homepage;

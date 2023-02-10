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
    </>
  );
}

export default Homepage;

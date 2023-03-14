// styles
import "./Homepage.css";

// components
import { Hero, ImageContainer, ImgGrid, TestamonialSwiper } from "../../components";

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
      <TestamonialSwiper />
    </>
  );
}

export default Homepage;

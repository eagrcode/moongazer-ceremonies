// styles
import "./Homepage.css";

// components
import { Hero, ImageContainer, ImgGrid, TestimonialSwiper } from "../../components";

import { Ceremonies } from "../../pages";

// sections
import { About, Planning, Why } from "../../pages";

// image paths
import imagePaths from "../../imagesAWS";

function Homepage() {
  const { jump } = imagePaths;

  return (
    <>
      <Hero />

      <About title={"About Me"} />
      <ImageContainer img={jump} alt="wedding-men-jump" />
      <Why title={"Why Choose A Celebrant?"} />
      <Ceremonies />
      <ImgGrid />
      <Planning title={"Planning"} />
      <TestimonialSwiper />
    </>
  );
}

export default Homepage;

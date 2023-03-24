// styles
import "./About.css";

// components
import { Hare } from "../../../../components";

// libraries

// images
import Dee from "../../../../assets/dee-robinson-celebrant.jpeg";

function TextContainer({ title }) {
  return (
    <section id="to-about" className="content-section about">
      <div className="content-section-inner">
        <img id="dee-pic" src={Dee} alt="dee-robinson-moongazer-celebrant" />
        <div className="text-container">
          <h2 className="section-heading">{title}</h2>
          <p className="section-content">
            Although there is no formal requirement for a celebrant to undertake accredited
            training, it was really important to me, as a lifelong learner, to hone my craft and be
            able to carry out ceremonies to the absolute best of my ability.
          </p>
          <p className="section-content">
            I want my families and couples to feel that they are in safe hands. I trained with the
            only OFSTED accredited provider Civil Ceremonies Limited and am fully insured.
          </p>
          <p className="section-content">
            I only book one ceremony per day, so I will be dedicated just to you and your ceremony.
            This means that your ceremony can be any day of the week and it can be at any time of
            the day!
          </p>
        </div>
      </div>
      <Hare side={"right"} />
    </section>
  );
}

export default TextContainer;

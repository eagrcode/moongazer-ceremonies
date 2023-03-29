// libraries
import { Link } from "react-router-dom";

// components
import { MainBtn } from "../../../../components";

// styles
import "./Planning.css";

// images
import List from "../../../../assets/wedding-list.jpg";

function Planning({ title }) {
  return (
    <section className="content-section planning lrg">
      <div className="content-section-inner">
        <div className="text-container">
          <h2 className="section-heading">{title}</h2>
          <p className="section-content">
            Whatever your vision, I will work with you to create the ceremony of your dreams.
            Organising special moments in your life should be enjoyable, with minimal stress, and
            communication is an important way to reduce any anxieties.
          </p>
          <p className="section-content">
            I will always be available to you by email, at the end of a phone, video calls and for
            extra meetings to help put your mind at ease, so you enjoy the process of creating your
            perfect day.
          </p>
          <Link to={"/contact"}>
            <MainBtn text={"Contact Me"} type={"btn-dark"} />
          </Link>
        </div>
        <img src={List} alt="wedding-todo-list" />
      </div>
    </section>
  );
}

export default Planning;

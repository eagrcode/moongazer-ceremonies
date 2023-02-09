import { MainBtn } from "../../../../components";
import "./Planning.css";

function Planning({ title }) {
  return (
    <section className="content-section planning">
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
      </div>
      <MainBtn text={"Contact Me"} />
    </section>
  );
}

export default Planning;

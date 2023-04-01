// styles
import "./UnityPage.css";

// components
import { MainBtn, Hare } from "../../components";

// react-router
import { Link } from "react-router-dom";

function UnityPage() {
  return (
    <>
      <section className="content-section weddings">
        <div className="text-container no-card">
          <h1 className="section-heading">Commitment</h1>
          <em>Commited in Love and Life</em>
          <p className="section-content">
            If you would like to celebrate your life-long commitment to each other, without the
            legalities, this is the ceremony for you. A commitment or affirmation ceremony allows
            you to declare your love and commitment to each other in front of your friends and
            family.
          </p>
          <p className="section-content">
            The sky’s the limit, you can include whatever is right for you both. I will meet with
            you to chat through your ideas and thoughts, and make sure that your ceremony is a clear
            reflection of you and your relationship.
          </p>
          <p className="section-content">
            These ceremonies are a wonderful way of reflecting your unconditional love and
            dedication to each other.
          </p>
        </div>
      </section>
      <section className="content-section included">
        <div className="text-container no-card">
          <h2>Included in this Ceremony</h2>
          <ul className="wedding-list">
            <li className="wedding-list-item">
              A ceremony written specifically for you, which tells your love story
            </li>
            <li className="wedding-list-item">
              Symbolic rituals and unique personal aspects can be included.
            </li>
            <li className="wedding-list-item">
              A beautifully presented souvenir script as a keepsake of the day.
            </li>
            <li className="wedding-list-item">All meetings, email and phone contact.</li>
            <li className="wedding-list-item">
              Overnight accommodation and travel are not included.
            </li>
            <li className="wedding-list-item">Packages from £650</li>
          </ul>
          <Link to="/contact">
            <MainBtn text={"Contact Me"} type={"btn-light"} />
          </Link>
        </div>
        <Hare side={"right"} color={"white"} />
      </section>
    </>
  );
}

export default UnityPage;

// styles
import "./WeddingPage.css";

// components
import { MainBtn } from "../../components";

function WeddingPage() {
  return (
    <>
      <section className="content-section weddings">
        <div className="text-container no-card">
          <h1 className="section-heading">Weddings</h1>
          <em>Your day, your choice, your dreams</em>
          <p className="section-content">
            Your ceremony can be held absolutely anywhere you like without the restrictions of a
            registry office or church. Once the legalities have been completed the sky’s the limit.
            I can create a ceremony unique to you both, the only limitations are your imagination.
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
        </div>
        <MainBtn text={"Contact Me"} type={"btn-light"} />
      </section>
    </>
  );
}

export default WeddingPage;

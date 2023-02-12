// styles
import "./MarriageRenewalPage.css";

// components
import { ImageContainer, MainBtn } from "../../components";

// images
import Wedding from "../../assets/wedding-card.jpg";

function MarriageRenewalPage() {
  return (
    <>
      <ImageContainer img={Wedding} />
      <section className="content-section weddings">
        <div className="text-container no-card">
          <h1 className="section-heading">Vow Renewal</h1>
          <em>Your day, your choice, your dreams</em>
          <p className="section-content">
            I will spend time with you, creating a personal ceremony that truly reflects both of you
            and where you are in your relationship. You may now have a family that you would like to
            be included, and I can liaise with them to help explain your thoughts and ideas.
          </p>
          <p className="section-content">
            Couples often mark these occasions by rededicating their rings, including a unity
            ceremony, writing their own promises and exchange gifts. You may like a big party or
            prefer an intimate ceremony involving just the two of you. We will chat through your
            plans and together find what feels most comfortable and the best reflection of you.
          </p>
        </div>
      </section>
      <section className="content-section included">
        <div className="text-container no-card">
          <strong className="section-content">Included in this Ceremony</strong>
          <ul className="wedding-list">
            <li className="wedding-list-item">
              A ceremony written spicifically for you, which tells your love story
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

export default MarriageRenewalPage;

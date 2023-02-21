// styles
import "./MarriageRenewalPage.css";

// components
import { ImageContainer, MainBtn } from "../../components";

// images
import Wedding from "../../assets/wedding-card.jpg";

function MarriageRenewalPage() {
  return (
    <>
      <section className="content-section weddings">
        <div className="text-container no-card">
          <h1 className="section-heading">Vow Renewal</h1>
          <em>Relive the Love!</em>
          <p className="section-content">
            This is the perfect way to celebrate your special anniversary and relive your wedding
            all over again. We can work together to create a personal ceremony either repeating your
            original vows or making new ones.
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

export default MarriageRenewalPage;

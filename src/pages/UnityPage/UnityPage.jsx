// styles
import "./UnityPage.css";

// components
import { ImageContainer, MainBtn } from "../../components";

// images
import Wedding from "../../assets/wedding-card.jpg";

function UnityPage() {
  return (
    <>
      <ImageContainer img={Wedding} />
      <section className="content-section weddings">
        <div className="text-container no-card">
          <h1 className="section-heading">Unity Ceremony</h1>
          <em>Your day, your choice, your dreams</em>
          <p className="section-content">
            If you like the idea of adding something a bit different to your celebrations, then
            unity ceremonies may be perfect for you! Perhaps 'tying the knot' with a handfasting or
            creating a special cocktail that represents the sweetness and decadence of your unique
            relationship. There are plenty to choose from and I enjoy creating new ones just for you
            too.
          </p>
          <p className="section-content">
            Unity ceremonies are not just for couples and can play a key part in any ceremony.
            Perhaps you would like to symbolise the arrival of your child by lighting a candle in
            their honour, or ask your guests to write down wishes and hopes for your child then hang
            these on a wishing tree.
          </p>
          <p className="section-content">
            It may be important to you to include cultural or religious rituals to represent your
            upbringing or heritage. We can work together to make sure that these are respectfully
            included in your ceremony.
          </p>
          <p className="section-content">
            A unity ceremony is a symbolic ritual intertwined into the wedding ceremony. The most
            popular unity ceremonies are handfasting, circling, and the lighting of a unity candle.
            Other rituals include pouring sand, ring warming, planting a tree. The choice is endless
            for a meaningful ritual performed during your wedding to represent becoming a union.
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

export default UnityPage;

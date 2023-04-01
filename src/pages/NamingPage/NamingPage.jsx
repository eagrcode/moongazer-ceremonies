// styles
import "./NamingPage.css";

// components
import { MainBtn, Hare } from "../../components";

// react-router
import { Link } from "react-router-dom";

function NamingPage() {
  return (
    <>
      <section className="content-section weddings">
        <div className="text-container no-card">
          <h1 className="section-heading">Naming Ceremony</h1>
          <em>What's in a Name?</em>
          <p className="section-content">
            If you want to celebrate your new arrival with your family and friends, this is the
            perfect non-religious way to welcome a new member into your family. It might be to
            welcome a baby into the world or a newly adopted child into your family. We will work
            together to create a unique ceremony which may include readings and symbolic gestures.
            You can include godparents, guide parents or guardians who will promise to love and
            support your child during the ceremony.
          </p>
        </div>
      </section>
      <section className="content-section included">
        <div className="text-container no-card">
          <h2>Included in this Ceremony</h2>
          <ul className="wedding-list">
            <li className="wedding-list-item">A ceremony written specifically for you</li>
            <li className="wedding-list-item">
              Symbolic rituals and unique personal aspects can be included
            </li>
            <li className="wedding-list-item">
              A beautifully presented souvenir script as a keepsake of the day.
            </li>
            <li className="wedding-list-item">
              All meetings, email and phone contact, travel up to 50 miles
            </li>
            <li className="wedding-list-item">
              Overnight accommodation and additional travel are not included
            </li>
            <li className="wedding-list-item">Packages from £350</li>
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

export default NamingPage;

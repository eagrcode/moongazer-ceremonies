// styles
import "./Why.css";

// components
import { MainBtn } from "../../../../components";

// libraries
import { Link } from "react-router-dom";

// logo
import Logo from "../../../../assets/logos/Hare_Navy.png";

function Why({ title }) {
  return (
    <section className="content-section why">
      <div className="text-container">
        <h2 className="section-heading">{title}</h2>
        <p className="section-content">
          When you choose a celebrant, you have the freedom to hold your ceremony anywhere and at
          any time. You can choose to include symbolic elements like hand fasting, write your own
          vows and promises which reflect your personalities. Your celebrant will guide you along
          the way, making your day as unique as you are.
        </p>

        <Link className="link-btn" to={"/ceremonies"}>
          <MainBtn text={"Ceremonies"} type={"btn-dark"} />
        </Link>
      </div>
      {/* <div className="logo-container why">
        <img src={Logo} />
      </div> */}
    </section>
  );
}

export default Why;

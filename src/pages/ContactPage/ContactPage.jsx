// styles
import "./ContactPage.css";

// components
import { MainBtn } from "../../components";

import { FaPhone } from "react-icons/fa";

import { MdEmail } from "react-icons/md";

function ContactPage() {
  return (
    <section className="content-section contact">
      <h1>Contact Me</h1>
      <div className="text-container">
        <p>
          You can either contact me directly, or fill out the form below and I will get back to you.
        </p>
        <div className="contact-details-container">
          <div className="cdc-row">
            <FaPhone size={20} /> 07123456789
          </div>
          <div className="cdc-row">
            <MdEmail size={20} /> yeah.nah@yeahnahyeah.nah
          </div>
        </div>
      </div>

      <form id="form" name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="first-Name" placeholder="First Name" required minLength="2" />
        <input type="text" name="last-Name" placeholder="Last Name" required minLength="2" />
        <input type="email" name="email" placeholder="Email Adress" minLength="5" required />
        <textarea
          name="message"
          placeholder="Message"
          minLength="10"
          maxLength="250"
          required
        ></textarea>
        <MainBtn text={"Submit"} type={"btn-dark contact"} />
      </form>
    </section>
  );
}

export default ContactPage;
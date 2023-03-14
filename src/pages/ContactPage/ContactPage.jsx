// styles
import "./ContactPage.css";

// icons
import { MdEmail } from "react-icons/md";

// react
import { useState } from "react";

function ContactPage() {
  // state
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", message: "" });

  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contactForm", formData }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));
    e.preventDefault();
  };

  return (
    <section className="content-section contact">
      <h1>Contact Me</h1>
      <div className="text-container contact">
        <p>
          You can either contact me directly, or fill out the form below and I will get back to you.
        </p>
        <div className="contact-details-container">
          <div className="cdc-row">
            <MdEmail size={20} /> moongazerceremonies@gmail.com
          </div>
        </div>
      </div>

      <form name="contact" onSubmit={handleSubmit}>
        {/* <input type="hidden" name="form-name" value="contact" /> */}
        <input
          onChange={handleChange}
          value={formData.firstName}
          type="text"
          name="first-Name"
          placeholder="First Name"
          required
          minLength="2"
        />
        <input
          onChange={handleChange}
          value={formData.lastName}
          type="text"
          name="last-Name"
          placeholder="Last Name"
          required
          minLength="2"
        />
        <input
          onChange={handleChange}
          value={formData.email}
          type="email"
          name="email"
          placeholder="Email Adress"
          minLength="5"
          required
        />
        <textarea
          onChange={handleChange}
          value={formData.message}
          name="message"
          placeholder="Message"
          minLength="10"
          maxLength="250"
          required
        ></textarea>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </section>
  );
}

export default ContactPage;

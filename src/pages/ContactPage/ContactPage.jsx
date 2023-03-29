// styles
import "./ContactPage.css";

// icons

// react
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ContactPage() {
  // state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        first_name: firstName,
        last_name: lastName,
        email: email,
        message: message,
      }),
    }).catch((error) => alert(error));
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
    navigate("/success");
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

      <form onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        <input
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          type="text"
          name="first_name"
          placeholder="First Name"
          required
          minLength="2"
        />
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          name="last_name"
          placeholder="Last Name"
          required
          minLength="2"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          placeholder="Email Address"
          minLength="6"
          required
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
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

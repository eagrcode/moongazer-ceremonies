// styles
import "./SuccessPage.css";

// react router
import { Link } from "react-router-dom";

function SuccessPage() {
  return (
    <section className="content-section success">
      <div className="success-container">
        <p>Thank you for your submission!</p>
        <Link to="/">Return to the Home page</Link>
      </div>
    </section>
  );
}

export default SuccessPage;

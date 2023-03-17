// styles
import "./FuneralPage.css";

// components
import { MainBtn } from "../../components";

function FuneralPage() {
  return (
    <>
      <section className="content-section funeral">
        <div className="text-container no-card">
          <h1 className="section-heading">Funeral</h1>
          <em>Celebration of life</em>
          <p className="section-content">
            After the loss of a loved one; planning a funeral can feel quite daunting. As a trained
            grief counsellor, I understand the range of emotions family and friends feel, I can
            guide and help you through this very difficult time, with compassion and kindness.
          </p>
          <p className="section-content">
            Initially we will meet so that I can get a picture of your loved one so that I can
            create the order of service and draft the Eulogy. My ceremonies are usually
            non-religious, however if you choose to have a prayer or hymn, I am more than happy to
            accommodate your wishes in any denomination or belief system.
          </p>
          <p className="section-content">
            You will be in control at all stages of the process and in consultation with you and
            your family we will finalise any Readings or Tributes, hymns and music. After our
            meeting, you will receive the draft Order of Service and Eulogy to approve or change if
            necessary. I will liaise with your funeral director at all times.
          </p>
        </div>
      </section>
      <section className="content-section included">
        <div className="text-container no-card">
          <h2>Included in this Ceremony</h2>
          <ul className="wedding-list">
            <li className="wedding-list-item">
              Interview meeting usually at clients home or if preferred at the funeral directors,
              whichever is more convenient to you and follow up interviews or telephone calls as
              required.
            </li>
            <li className="wedding-list-item">
              Full Support, help and guidance with all decisions about the ceremony from my
              professional knowledge.
            </li>
            <li className="wedding-list-item">
              A beautifully presented souvenir script as a keepsake of the day.
            </li>
            <li className="wedding-list-item">
              Full bespoke delivery script written to your choices and any elements from my
              recommendation (poems, readings, quotes, music).
            </li>
            <li className="wedding-list-item">Presentation script given after the funeral.</li>
            <li className="wedding-list-item">Funeral services are for a fixed fee of £200.</li>
            <li className="wedding-list-item">Scattering of Ashes Ceremony £100</li>
          </ul>
          <MainBtn text={"Contact Me"} type={"btn-light"} />
        </div>
      </section>
    </>
  );
}

export default FuneralPage;

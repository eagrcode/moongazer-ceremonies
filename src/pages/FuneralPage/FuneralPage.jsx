// styles
import "./FuneralPage.css";

// components
import { MainBtn, Hare } from "../../components";
import { Link } from "react-router-dom";

function FuneralPage() {
  return (
    <>
      <section className="content-section funeral">
        <div className="text-container no-card">
          <h1 className="section-heading">Funeral</h1>
          <em>Celebration of life</em>
          <p className="section-content">
            After the loss of a loved one, planning a funeral can feel quite daunting. As a trained
            grief counsellor, I understand the range of emotions that family and friends experience.
            I can guide and support you through this very difficult time with compassion and
            kindness.
          </p>
          <h3>The Funeral Service</h3>
          <p className="section-content">
            Initially, we will meet so that I can learn about your loved one to enable me to create
            the eulogy. I will reflect your family's beliefs and values and capture the unique
            essence of your loved one.
          </p>
          <p className="section-content">
            My ceremonies are typically non-religious; however, if you choose to include a prayer or
            hymn, I am more than happy to accommodate your wishes, regardless of denomination or
            belief system.
          </p>
          <p className="section-content">
            You will be in control at all stages of the process. In consultation with you and your
            family, we will finalize any readings or tributes, hymns, and music. After our meeting,
            you will receive the draft Order of Service and eulogy to approve or amend if necessary.
            I will liaise with your funeral director at all times.
          </p>
          <h3>The Interment or Scattering of Ashes Ceremony</h3>
          <p className="section-content">
            The interment or scattering of your loved one's ashes usually occurs some days, weeks,
            or months after the cremation service. For this occasion, you may decide upon a small
            ceremony.
          </p>
          <p className="section-content">
            These ceremonies can be held almost anywhere: the cemetery gardens, the woods, or even
            your own backyard. Permission may be required in certain circumstances and locations.
          </p>
          <p className="section-content">
            Once again, the choices are yours, and I will work with you to provide a fitting and
            dignified ceremony.
          </p>
          <h3>Memorial or Celebration of Life Ceremonies</h3>
          <p className="section-content">
            A Memorial or Celebration of Life ceremony usually takes place after the formal funeral
            service. It can be held a week or a year later, or it can mark a special date
            significant to you and your loved one.
          </p>
          <p className="section-content">
            The ceremony can be held anywhere. Many people choose locations with personal
            significance, such as a beach, a park, or the family home. Any location or venue is a
            potential option.
          </p>
          <p className="section-content">
            It provides an ideal opportunity for family and friends, who may not have been able to
            attend the funeral, to gather and reminisce.
          </p>
          <p className="section-content">
            My role can range from helping you shape the content of the ceremony to acting as your
            master of ceremonies on the day.
          </p>
          <h3>Your Own Funeral Wishes</h3>
          <p className="section-content" id="stubbornP">
            Have you ever considered what you would like said at your own funeral?
          </p>
          <p className="section-content">
            Where would you want it to be held? What music would you prefer? Hymns or pop songs?
            Bagpipes or a rock band? Which readings or poems would you include?
          </p>
          <p className="section-content">
            It can be comforting to know that your family is aware of your preferences, and that
            you've eased their burden by making these decisions in advance.
          </p>
          <p className="section-content">
            We all have stories to share about our lives. They form part of the legacy we leave
            behind. I can assist you in articulating your story and choices. These can then be
            paired with your will or entrusted to a family member. This ensures that when the time
            comes, no one is left wondering, "I don’t know what they wanted."
          </p>
        </div>
      </section>
      <section className="content-section included">
        <div className="text-container no-card">
          <h3>Included in this Ceremony</h3>
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
              Full bespoke delivery script written to your choices and any elements from my
              recommendation (poems, readings, quotes, music).
            </li>
            <li className="wedding-list-item">Presentation script given after the funeral.</li>
            <li className="wedding-list-item">Funeral services are for a fixed fee of £235.</li>
            <li className="wedding-list-item">Scattering of Ashes Ceremony £150</li>
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

export default FuneralPage;

import "./Planning.css";

function Planning({ title }) {
  return (
    <section id="planning-section">
      <div className="text-container">
        <h2 className="section-heading">{title}</h2>
        <p className="section-content">
          Whatever your vision, I will work with you to create the ceremony of your dreams.
          Organising special moments in your life should be enjoyable, with minimal stress, and
          communication is an important way to reduce any anxieties. I will always be available to
          you by email, at the end of a phone, video calls and for extra meetings to help put your
          mind at ease, so you enjoy the process of creating your perfect day. Remember that it is
          your ceremony, so if you would like any changes or additions, just let me know. I want to
          make sure that your script is just right for you. Before the big day, you may like a
          rehearsal or you may not. We can discuss the individual benefits of this for your own
          distinct ceremony during the planning process.
        </p>
      </div>
    </section>
  );
}

export default Planning;

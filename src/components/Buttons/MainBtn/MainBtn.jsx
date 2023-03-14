import "./MainBtn.css";

function MainBtn({ text, type }) {
  return (
    <button type="submit" className={`main-btn ${type}`}>
      {text}
    </button>
  );
}

export default MainBtn;

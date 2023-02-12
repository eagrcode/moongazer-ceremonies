import "./MainBtn.css";

function MainBtn({ text, type }) {
  return <button className={`main-btn ${type}`}>{text}</button>;
}

export default MainBtn;

import "./ImageContainer.css";

function ImageContainer({ img }) {
  return (
    <div className="image-container">
      <img src={img} />
    </div>
  );
}

export default ImageContainer;

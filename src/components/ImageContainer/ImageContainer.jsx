import "./ImageContainer.css";

function ImageContainer({ img, alt }) {
  return (
    <div className="image-container">
      <img src={img} alt={alt} />
    </div>
  );
}

export default ImageContainer;

import "./ImageScroller.css";

function ImageScroller() {
  const images = [
    "/work-images/trenching.jpg",
    "/work-images/rcc.jpg",
    "/work-images/ofc.jpg",
    "/work-images/earthing.jpg",
    "/work-images/signal.jpg"
  ];

  return (
    <div className="scroller-container">
      <div className="scroller-track">
        {images.concat(images).map((img, index) => (
          <img key={index} src={img} alt="Work" />
        ))}
      </div>
    </div>
  );
}

export default ImageScroller;

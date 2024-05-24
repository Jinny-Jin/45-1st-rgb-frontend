import React, { useEffect, useRef, useState } from "react";
import "./ImageBox.scss";

function ImageBox({ details }) {
  const { image_urls } = details;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const TOTAL_SLIDE = image_urls.length;

  const prevButton = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDE);
    } else {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const nextButton = () => {
    if (currentSlide === TOTAL_SLIDE) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(prev => prev + 1);
    }
  };

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transition = "transform 0.5s ease-in";
      slideRef.current.style.transform = `translateX(-${currentSlide * 500}px)`;
    }
  }, [currentSlide]);

  return (
    <div className="detailImage">
      <button onClick={prevButton}>
        <img alt="prev" src="/images/productDetail/button-pre.png" />
      </button>
      <div className="imageContainer">
        <div className="inner" ref={slideRef}>
          {image_urls.map(item => {
            return <img key={item} alt="images" src={item} className="item" />;
          })}
        </div>
      </div>
      <button onClick={nextButton}>
        <img alt="next" src="/images/productDetail/button-next.png" />
      </button>
    </div>
  );
}

export default ImageBox;

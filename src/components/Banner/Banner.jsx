import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import SchoolUniforms from "../../assets/School Uniforms.png";
import BannerStation from "../../assets/banner station.png";
import SlidingBanner from "../../assets/sliding banner.png";
import BooksBanner from "../../assets/books banner.png";

function Banner() {
  const [slideIndex, setSlideIndex] = useState(0);
  const slidesRef = useRef(null);
  const totalSlides = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (slidesRef.current) {
      slidesRef.current.style.transform = `translateX(-${
        (slideIndex * 100) / totalSlides
      }%)`;
    }
  }, [slideIndex]);

  const currentSlide = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="banner">
      <div className="slides" ref={slidesRef}>
        <img src={SchoolUniforms} alt="School Uniforms" />
        <img src={BannerStation} alt="Banner Station" />
        <img src={SlidingBanner} alt="Sliding Banner" />
        <img src={BooksBanner} alt="Books Banner" />
      </div>
      <div className="dots">
        {[...Array(totalSlides)].map((_, index) => (
          <span
            key={index}
            className={`dot ${index === slideIndex ? "active" : ""}`}
            onClick={() => currentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Banner;

import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./styles.scss";

export default function Hero({
  slides,
  backdrop = true
}) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(
    () => {
      let timer = setInterval(() => setActiveSlide(active => active === slides.length - 1 ? 0 : active + 1), 5000);
      
      return () => {
        clearInterval(timer);
      };
    }, [slides]
  );

  return (
    <div className="hero">
      {slides.map((img, idx) => {
        return (
          <img
            src={img}
            className={`hero__slide ${activeSlide === idx && 'js-active'}`}
            key={`slide-${idx}`}
          />
        )
      })}

      { slides.length > 1 &&
        <ul className="hero__indicators">
           {slides.map((img, idx) => {
              return (
                <li
                  className={`hero__indicator ${activeSlide === idx && 'js-active'}`}
                  key={`slide-${img}`}
                  onClick={() => setActiveSlide(idx)}
                />
              )
            })}
        </ul>
      }

      {
        backdrop && 
          <div className="hero__backdrop" />
      }
    </div>
  )
}

Hero.propTypes = {
  slides: PropTypes.array,
  backdrop: PropTypes.bool
}
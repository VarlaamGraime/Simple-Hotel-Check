import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SimpleSlider = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

    return (
      <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="https://i.ibb.co/G06Ycsg/Rectangle-24.png" alt="Slide 1" />
        </div>
        <div>
          <img src="https://i.ibb.co/G06Ycsg/Rectangle-24.png" alt="Slide 2" />
        </div>
        <div>
          <img src="https://i.ibb.co/G06Ycsg/Rectangle-24.png" alt="Slide 3" />
        </div>
      </Slider>
    </div>
    );
};

export default SimpleSlider;
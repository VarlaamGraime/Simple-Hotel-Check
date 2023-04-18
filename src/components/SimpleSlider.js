import {React, useState} from 'react';
import Slider from 'react-slick-slider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const SimpleSlider = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

    return (
      <div >
      <Slider {...sliderSettings}>
        <div style={{ padding: "0 10px" }}>
          <img src="https://i.ibb.co/3yFR8vJ/Rectangle-28.png" alt="Slide 1" />
        </div>
        <div style={{ padding: "0 10px" }}>
          <img src="https://i.ibb.co/G06Ycsg/Rectangle-24.png" alt="Slide 2" />
        </div>
        <div style={{ padding: "0 10px" }}>
          <img src="https://i.ibb.co/kyvZkXy/Rectangle-23.png" alt="Slide 3" />
          </div>
          <div style={{ padding: "0 10px" }}>
          <img src="https://i.ibb.co/G06Ycsg/Rectangle-24.png" alt="Slide 2" />
        </div>
      </Slider>
    </div>
    );
};

export default SimpleSlider;
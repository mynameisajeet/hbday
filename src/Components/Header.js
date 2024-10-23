import React from 'react';
import Slider from 'react-slick';
import './Header.css';

const Header = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 300,
  };

  return (
    <div className="header-carousel">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img
              src={image}
              alt={`Birthday Celebration ${index + 1}`}
              className="carousel-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Header;

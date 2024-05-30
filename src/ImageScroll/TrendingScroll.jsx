import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ImageScroller/HorizontalScroller.css'; // Import the CSS file

const images = [
  {src :'/TrendingImages/Kalki2898.jpg', link : '/kalki'},
  {src:'/TrendingImages/avatar2.jpg', link :'/'},
  {src :'/TrendingImages/rrr.jpg', link : '/'},
  {src :'/TrendingImages/avengersendgame.webp', link : '/'},
  {src:'/TrendingImages/kunfupanda.jpg', link :'/'},
  {src :'/TrendingImages/spiderman.jpg', link : '/'},
  {src :'/TrendingImages/Animal.jpg', link : '/'},
  {src :'/TrendingImages/IndianaJones.jpg', link : '/'},
  {src :'/TrendingImages/salaar.jpg', link : '/'},
  {src :'/TrendingImages/thor4.jpg', link : '/'},
  {src :'/TrendingImages/open.jpg', link : '/'},
  {src :'/TrendingImages/Jailer.jpg', link : '/'},
  {src :'/TrendingImages/manofsteel.jpg', link : '/'},
  // Add more images as needed
];

const TrendingScroller = () => {
  const scrollerRef = useRef(null);

  const scrollLeft = () => {
    scrollerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  return (
    <div className="horizontal-scroller-container">
      <button className="scroll-button left" onClick={scrollLeft}>
        &#8592;
      </button>
      <div className="horizontal-scroller" ref={scrollerRef}>
        <div className="scroller-content">
        {images.map((image, index) => (
            <Link key={index} to={image.link} className="scroller-image-link">
              <img src={image.src} alt={`Image ${index + 1}`} className="scroller-image" />
            </Link>
          ))}
        </div>
      </div>
      <button className="scroll-button right" onClick={scrollRight}>
        &#8594;
      </button>
    </div>
  );
};

export default TrendingScroller;
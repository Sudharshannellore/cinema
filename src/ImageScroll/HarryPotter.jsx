import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ImageScroller/HorizontalScroller.css'; // Import the CSS file

const images = [
  {src :'/harrypotter/1.jpg', link : '/'},
  {src:'/harrypotter/2.jpg', link :'/'},
  {src :'/harrypotter/3.jpg', link : '/'},
  {src :'/harrypotter/4.jpg', link : '/'},
  {src:'/harrypotter/5.jpg', link :'/'},
  {src :'/harrypotter/6.jpg', link : '/'},
  {src :'/harrypotter/7.jpg', link : '/'},
  {src :'/harrypotter/8.jpg', link : '/'},
  // Add more images as needed
];

const HarryPotter= () => {
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

export default HarryPotter;
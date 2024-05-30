import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ImageScroller/HorizontalScroller.css'; // Import the CSS file

const images = [
  {src :'/Animation/kunfupanda.jpg', link : '/', title:'kunfupanda.jpg'},
  {src:'/Animation/spiderman.jpg', link :'/',title:'spiderman.jpg'},
  {src :'/Animation/balganesh.jpg', link : '/',title:'balganesh.jpg'},
  {src :'/Animation/Ben10.jpg', link : '/', title:'Ben10.jpg'},
  {src:'/Animation/dragonball.jpg', link :'/',title:'dragonball.jpg'},
  {src :'/Animation/Hanuman.jpg', link : '/',title:'Hanuman.jpg'},
  {src :'/Animation/incredibles.jpg', link : '/',title:'incredibles.jpg'},
  {src :'/Animation/legendofhanuman.jpg', link : '/',title:'legendofhanuman.jpg'},
  {src :'/Animation/toystory.jpg', link : '/',title:'toystory.jpg'},
  {src :'/Animation/ultimatespider.jpg', link : '/',title:'ultimatespider.jpg'},
  {src :'/Animation/cars.webp', link : '/',title:'cars.webp'},
  {src :'/Animation/avengers.jpg', link : '/',title:'avengers.jpg'},
  {src :'/Animation/lightyear.jpeg', link : '/',title:'lightyear.jpeg'},
  // Add more images as needed
];

const Animation= () => {
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
              <img src={image.src} alt={image.title} className="scroller-image" />
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

export default Animation;
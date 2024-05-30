import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ImageScroller/HorizontalScroller.css'; // Import the CSS file

const images = [
  {src :'/Webseries/boys.jpg', link : '/'},
  {src:'/Webseries/HouseDragon.webp', link :'/'},
  {src :'/Webseries/locandkey.jpg', link : '/'},
  {src :'/Webseries/MoneyHeist.jpg', link : '/'},
  {src:'/Webseries/RanaNaidu.jpg', link :'/'},
  {src :'/Webseries/reacher.jpg', link : '/'},
  {src :'/Webseries/squidgame.jpg', link : '/'},
  {src :'/Webseries/stranger.jpg', link : '/'},
  {src :'/Webseries/vampire.webp', link : '/'},
  {src :'/Webseries/wednesday.jpg', link : '/'},
  {src :'/Webseries/witcher.webp', link : '/'},
  {src :'/Webseries/loki.jpg', link : '/'},
  {src :'/Webseries/moonknight.jpg', link : '/'},
  // Add more images as needed
];

const WebseriesScroll= () => {
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

export default WebseriesScroll;
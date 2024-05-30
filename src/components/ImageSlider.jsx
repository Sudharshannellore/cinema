import React from "react";
import AliceCarousel, { Link } from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const ImageSlider =()=>{

return(<>

    <AliceCarousel         
        autoPlay
        autoPlayControls
        autoPlayStrategy="none"
        autoPlayInterval={5000}
        animationDuration={5000}
        animationType="fadeout"
        infinite
        touchTracking={false}
        disableDotsControls
        disableButtonsControls
        >
        <Link href="/kalki"  className="link">
            <img src="/imageSliderImgs/kalki.avif" alt=""  width="100%" height="500px" style={{marginLeft:'20'}}/>
        </Link>
        <Link href="" className="link">
            <img src="/imageSliderImgs/kung-fu-pands.jpg" alt="" width="100%" height="500px" style={{marginLeft:'20'}} />
        </Link>
        <Link href="" className="link">
            <img src="/imageSliderImgs/rrr.jpg" alt="" width="100%" height="500px" style={{marginLeft:'20'}}/>
        </Link>
        <Link href="" className="link">
            <img src="/imageSliderImgs/spiderverse.webp" alt="" width="100%" height="500px" style={{marginLeft:'20'}}/>
        </Link>
        <Link href=""  className="link">
            <img src="/imageSliderImgs/avatar2.jpg" alt="" width="100%" height="500px" style={{marginLeft:'20'}}/>
        </Link>
        <Link href="" className="link">
            <img src="/imageSliderImgs/avengers.jpg" alt="" width="100%" height="500px" style={{marginLeft:'20'}}/>
        </Link>
    </AliceCarousel>

</>)

}
export default ImageSlider
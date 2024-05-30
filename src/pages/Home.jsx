import React from "react";
import Header from "../components/Header";
import ImageSlider from "../components/ImageSlider";
import "../styles/pages/Home.css"
import { Link } from "react-router-dom";
import TrendingScroller from "../ImageScroll/TrendingScroll";
import WebseriesScroll from "../ImageScroll/WebseriesScroll";
import Animation from "../ImageScroll/Animation";
import HarryPotter from "../ImageScroll/HarryPotter";
import Footer from "../components/Footer";

const Home =()=>{
    return(<>
         <div><Header/></div>
         <br />
         <div className="nav-slider">
          <ImageSlider/>
         </div>
         <br />
         <div className="trend-cont">
         <h3>Trending Movies</h3>
         <Link to='/movies'>
          <p>More&#8594;</p>
         </Link>
         </div>
         <div>
            <TrendingScroller/>
         </div>
         <br />
         <div className="trend-cont">
         <h3>Trending Series</h3>
         <Link to='/series'>
          <p>More&#8594;</p>
         </Link>
         </div>
         <div>
         <WebseriesScroll/>
         </div>
         <br />
         <div className="trend-cont">
         <h3>Animation</h3>
         <Link to='/animation'>
          <p>More&#8594;</p>
         </Link>
         </div>
         <div>
            <Animation/>
         </div>
         <br />
         <div className="trend-cont">
         <h3>Harry Potter</h3>
         </div>
         <div>
         <HarryPotter/>
         </div>
         <div>
            <Footer/>
         </div>


    </>)
}
export default Home;
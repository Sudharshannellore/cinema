import React from "react";
import '../styles/components/YoutubeEmbed.css'
import Header from "./Header";
import Footer from "./Footer";
import ReactPlayer from 'react-player'
import TrendingScroller from "../ImageScroll/TrendingScroll";
import Cinegrid from "./Cinegrid";

const movie = [
  {src:'/TrendingImages/avatar2.jpg', link :'/',title:'avatar2.jpg'},
  {src :'/TrendingImages/rrr.jpg', link : '/',title:'rrr.jpg'},
  {src :'/TrendingImages/avengersendgame.webp', link : '/',title:'avengersendgame.webp'},
  {src :'/TrendingImages/Animal.jpg', link : '/',title:'Animal.jpg'},
];

const YoutubeEmbed =({embedId, name})=>{
    return(<>
    <div>
     <Header/>
    </div>
   <div className="youTube-cont" >
   < div className="video-responsive">
   <ReactPlayer url={`https://youtu.be/${embedId}`}/>
   <h1>{name}</h1>
   <div className="video-cont">
    <p>U/A</p>
    <p>-</p>
    <p>2h 45m</p>
    <p>-</p>
    <p>2024</p>
    <p>-</p>
    <p>Movies</p>
   </div>
   <div className="video-cont">
    <div style={{display : "flex"}}>
      <p>Audio Language</p>
      <p>:</p>
      <p style={{color : "red", fontWeight : "bolder"}}>Telugu</p>
    </div>
    <div style={{display : "flex"}}>
      <p>Genre</p>
      <p>:</p>
      <p style={{color : "red", fontWeight : "bolder"}}>Action, Thriller</p>
    </div>
   </div>
   <div>
    <p>A modern-day avatar of Vishnu, a Hindu god, who is believed to have descended to earth to protect the world from evil forces.</p>
   </div>
  </div>
   
  <div className="video-details">
    <h3>Recommended Movie For You</h3>
      <Cinegrid movies={movie}/>
      </div>
   </div>
   <br />
   <div>
    <h3 style={{color : "white"}}>Movies You May Like</h3>
   </div>
   <div>
    <TrendingScroller />
   </div>
   <br />
   <div>
    <Footer/>
   </div>

    </>)

}
export default YoutubeEmbed;
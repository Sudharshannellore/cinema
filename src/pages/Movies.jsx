import React from "react";
import Cinegrid from "../components/Cinegrid";
import Header from "../components/Header";
import Footer from "../components/Footer";

const movie = [
    {src :'/TrendingImages/Kalki2898.jpg', link : '/kalki',title:'Kalki2898.jpg'},
    {src:'/TrendingImages/avatar2.jpg', link :'/',title:'avatar2.jpg'},
    {src :'/TrendingImages/rrr.jpg', link : '/',title:'rrr.jpg'},
    {src :'/TrendingImages/avengersendgame.webp', link : '/',title:'avengersendgame.webp'},
    {src :'/TrendingImages/Animal.jpg', link : '/',title:'Animal.jpg'},
    {src :'/TrendingImages/IndianaJones.jpg', link : '/',title:'IndianaJones.jpg'},
    {src :'/TrendingImages/salaar.jpg', link : '/',title:'salaar.jpg'},
    {src :'/TrendingImages/thor4.jpg', link : '/',title:'thor4.jpg'},
    {src :'/TrendingImages/open.jpg', link : '/',title:'open.jpg'},
    {src :'/TrendingImages/Jailer.jpg', link : '/',title:'Jailer.jpg'},
    {src :'/TrendingImages/manofsteel.jpg', link : '/',title:'manofsteel.jpg'},
    {src :'/harrypotter/1.jpg', link : '/',title:'harrypotter1.jpg'},
    {src:'/harrypotter/2.jpg', link :'/',title:'harrypotter2.jpg'},
    {src :'/harrypotter/3.jpg', link : '/',title:'harrypotter3.jpg'},
    {src :'/harrypotter/4.jpg', link : '/',title:'harrypotter4.jpg'},
    {src:'/harrypotter/5.jpg', link :'/',title:'harrypotter5.jpg'},
    {src :'/harrypotter/6.jpg', link : '/',title:'harrypotter6.jpg'},
    {src :'/harrypotter/7.jpg', link : '/',title:'harrypotter7.jpg'},
    {src :'/harrypotter/8.jpg', link : '/',title:'harrypotter8.jpg'},
    // Add more images as needed
  ];
  

const Movies =()=>{
    return(<>
   <div>
    <Header/>
    </div> 
    <div>
    <Cinegrid movies={movie}/>
    </div>
    <div>
    <Footer/>
    </div>
    </>)
}
export default Movies;
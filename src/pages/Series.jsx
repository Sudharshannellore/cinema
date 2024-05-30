import React from "react";
import Cinegrid from "../components/Cinegrid";
import Header from "../components/Header";
import Footer from "../components/Footer";

const series = [
    {src :'/Webseries/boys.jpg', link : '/',title:'boys.jpg'},
    {src:'/Webseries/HouseDragon.webp', link :'/',title:'HouseDragon.webp'},
    {src :'/Webseries/locandkey.jpg', link : '/',title:'locandkey.jpg'},
    {src :'/Webseries/MoneyHeist.jpg', link : '/',title:'MoneyHeist.jp'},
    {src:'/Webseries/RanaNaidu.jpg', link :'/',title:'RanaNaidu.jpg'},
    {src :'/Webseries/reacher.jpg', link : '/',title:'reacher.jpg'},
    {src :'/Webseries/squidgame.jpg', link : '/',title:'squidgame.jpg'},
    {src :'/Webseries/stranger.jpg', link : '/',title:'stranger.jpg'},
    {src :'/Webseries/vampire.webp', link : '/',title:'vampire.webp'},
    {src :'/Webseries/wednesday.jpg', link : '/',title:'wednesday.jpg'},
    {src :'/Webseries/witcher.webp', link : '/',title:'witcher.webp'},
    {src :'/Webseries/loki.jpg', link : '/',title:'loki.jpg'},
    {src :'/Webseries/moonknight.jpg', link : '/',title:'moonknight.jpg'},
    // Add more images as needed
  ];
  

const Series =()=>{
    return(<>
   <div>
    <Header/>
    </div> 
    <div>
    <Cinegrid movies={series}/>
    </div>
    <div>
    <Footer/>
    </div>
    </>)
}
export default Series;
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Subscribe from "./pages/Subscribe";
import Login from "./pages/Login";
import Anime from "./pages/Anime";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import YoutubeEmbed from "./components/YoutubeEmbed";
const Router = createBrowserRouter([
    {
       path :"/",
       element : <Home/>,
    },
    {
        path :"/subscribe",
        element : <Subscribe/>,
     },
     {
      path :"/login",
      element : <Login/>,
   },
   {
      path :"/animation",
      element : <Anime/>,
   },
   {
      path :"/movies",
      element : <Movies/>,
   },
   {
      path :"/series",
      element : <Series/>,
   },
   {
      path :"/kalki",
      element : <YoutubeEmbed embedId='Nzf4KPv8R9M?si=asMh7ToWAndxN3QQ' name="Kalki-2898AD"/>,
   },



]);


export default Router
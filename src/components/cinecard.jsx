import React from "react";
import { Link } from "react-router-dom";
import '../styles/components/Cinecard.css'

const Cinecard =({link, image, title})=>{
    return(<>
        <div className="card">
            <Link to={link}>
            <img src={image} alt={title} className="movie-image" />
            </Link>
        </div>
    </>)
}
export default Cinecard

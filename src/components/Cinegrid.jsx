import React from 'react';
import '../styles/components/Cinegrid.css'
import Cinecard from './cinecard';

const Cinegrid = ({ movies }) => {
  return (
    <div className="grid">
      {movies.map((movie, index) => (
        <Cinecard key={index} title={movie.title} image={movie.src} link={movie.link}/>
      ))}
    </div>
  );
};
export default Cinegrid;

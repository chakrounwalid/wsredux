import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import MovieAdd from './AddMovie';
import MovieCard from './MovieCard';
import Navsearch from './Navsearch';

const MovieList = () =>{
    const movies = useSelector((state)=>state.movies);
    
    return (
        <div>
            <Navsearch/>
            <MovieAdd/>
            <div style={{
                display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'30px',paddingLeft:'60px',paddingTop:'50px',
                backgroundColor:'black'
            }}>
            {movies.map((movie)=><MovieCard movie={movie}/>)}
            </div>
        </div>
    )
}
export default MovieList
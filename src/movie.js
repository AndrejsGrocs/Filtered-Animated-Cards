import React from 'react'
import {motion} from 'framer-motion'

function Movie({movie}) {
  return (
    <motion.div className='card'
        animate={{opacity:1}} 
        initial={{opacity: 0}} 
        exit={{opacity:0}}
        layout>
        <h2 className='movie-title'>{movie.title}</h2>
        
        <img src={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path} alt=''/>
        <h2 className='movie-release-date'> Release Date {movie.release_date}</h2>

    </motion.div>
  )
}

export default Movie
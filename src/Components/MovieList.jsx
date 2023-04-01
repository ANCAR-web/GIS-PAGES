import React, { useContext } from 'react'
import MovieContext from '../Contexts/MovieContext'
import Movie from './Movie'

const MovieList = () => {
 const {movies} = useContext(MovieContext);
  return (
    <div className='container'>
        <div className='row'>
            {
            movies.map((movie)=>{
            return <div className='col-md-4' key={movie.id}>
                    <Movie movie={movie}/>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default MovieList;
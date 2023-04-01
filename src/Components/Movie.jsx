import React, { useContext } from 'react'
import UserContext from '../Contexts/UserContext';
const Movie = ({movie}) => {
    const Imagestyle = {
        height:"260px",
        objectFit:"cover"
    }
    const {user,toogleFavoriteMovieList} = useContext(UserContext);
    const isfavorite = user.MovieList.includes(movie.id)
  return (
    <div className='card'>
        <img src={movie.imageUrl}
             alt={movie.title}
             className='card-img-top'
             style={Imagestyle}/>
        <div className='card-body'>
            <h4>{movie.title}</h4>
            <button 
            className={`btn ${isfavorite ? "btn-success":
            "btn-outline-primary"}`}
            onClick={()=>toogleFavoriteMovieList(movie.id)}>
                Favoritas
            </button>

        </div>
    </div>
  )
}

export default Movie
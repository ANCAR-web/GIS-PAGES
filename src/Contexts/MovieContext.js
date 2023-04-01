import React from "react";
import { createContext } from "react";
import initialMovies from "../data/initialMovies";

const MovieContext =  createContext();

const MovieProvider = ({children})=>{
    const data = {movies:initialMovies}
    return[
        <MovieContext.Provider value={data}>
            {children}
        </MovieContext.Provider>
    ]
};

export {MovieProvider};
export default MovieContext;
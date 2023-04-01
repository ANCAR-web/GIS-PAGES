import { createContext } from "react";
import React from "react";
import { useState } from "react";

const UserContext = createContext();
const Inicialuser = {
    id:1,
    name:"Carlos",
    MovieList:[3,4,5,7]
  };
const UserProvider = ({children})=>{
    const [user,setUser] = useState(Inicialuser);
    const login = ()=>{
      setUser(Inicialuser);
    };
  
    const logout = ()=>{
      setUser(null) 
    };

    const toogleFavoriteMovieList = (movieId)=>{
        const isfavorite = user.MovieList.includes(movieId);
        const MovieList = isfavorite ? user.MovieList.filter((favid)=>{
                               return favid.id !== movieId})
                              : [...user.MovieList, movieId]

        setUser({...user,MovieList})

    };
  
   const data = {user,login,logout,toogleFavoriteMovieList}

    return(
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}
export {UserProvider}
export default UserContext


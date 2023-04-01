import React, { useContext } from 'react'
import UserContext from '../Contexts/UserContext';

export const Navbar = () => {
    const {user,login,logout} = useContext(UserContext)
  return (
  <nav className='navbar navbar-dark bg-dark mb-4'>
    <div className='container'>
    <span className='navbar-brand'>
        <h2>{user ? `Bienvenido ${user.name}`:'Bienvenido@'}</h2>
    </span>
     {
        user ? <button className='btn btn-primary' onClick={logout}>
               Cerrar sesion.
              </button>
              :
              <button className='btn btn-primary' onClick={login}>
               Iniciar secion.
               </button>
     }
    </div>

  </nav>
  )
}
export default Navbar;

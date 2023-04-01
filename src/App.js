import './App.css';
import MovieList from './Components/MovieList';
import Navbar from "./Components/Navbar";
import { MovieProvider } from './Contexts/MovieContext';
import { UserProvider } from './Contexts/UserContext';
function App() {
  return (
    <div className="App">
      <UserProvider>
      <MovieProvider>
      <Navbar/>
      <MovieList/>
      </MovieProvider>
      </UserProvider>
    </div>
  );
}

export default App;

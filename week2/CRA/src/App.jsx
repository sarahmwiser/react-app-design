import React, { useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './views/Home';
import Movies from './views/Movies';
import SignUp from './views/SignUp';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {navLinks} from "./assets/data/navLinks";
import STORE from "./assets/data/STORE";

import './assets/styles/reset.css';
import './assets/styles/global.css';

function App() {
  const [movies, setMovies] = useState(STORE);
  
  const featuredMovies = movies.filter(movie => movie.featured === true);

  return (

    <div className="container">
      <Header links = {navLinks} />
      <main>
        <Routes>
            <Route index element={<Home movies={featuredMovies} />} />
            <Route path='movies' element={<Movies movies={movies}/>} />
            <Route path='signup' element={<SignUp />} />   
        </Routes>
      </main>
      <Footer />
    </div>

  );
}

export default App;
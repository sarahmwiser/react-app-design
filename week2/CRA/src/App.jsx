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
 
  const addReview = (id, rating, comment) => {
    const movie = movies.find(movie => movie.id === id);
    movie.reviews.push(
      {
        user: `user$(Math.floor(Math.random() * 1000) + 100)`,
        stars: rating,
        comment: comment
      }
    );
    setMovies([...movies, movie]);
  }

  return (

    <div className="container">
      <Header links = {navLinks} />
      <main>
        <Routes>
            <Route index element={<Home movies={featuredMovies} />} />
            <Route path='movies' element={<Movies movies={movies} addReview={addReview} />} />
            <Route path='signup' element={<SignUp />} />   
        </Routes>
      </main>
      <Footer />
    </div>

  );
}

export default App;
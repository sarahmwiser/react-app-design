import React, {useState} from 'react'
import MovieList from '../components/MovieList';
   
const Movies = ({movies, addReview}) => {
  const [filters, setFilters] = useState({})

    return (
        <>      
        <div className="movies-filter">
            <h3> Filter by: </h3>
            <input type="text" placeholder="Movie Title..." />
            <label>
                <input type="radio" value="Male" name="gender" /> Action
            </label>
            <label>
                <input type="radio" value="Male" name="gender" /> Adventure
            </label>
            <label>
                <input type="radio" value="Female" name="gender" /> Comedy
            </label>
            <label>
                <input type="radio" value="Other" name="gender" /> Drama
            </label>
            <label>
                <input type="radio" value="Other" name="gender" /> Fantasy
            </label>
        </div>
          
            <div className="movies-list-container">
                <MovieList movies={movies} addReview={addReview} />
            </div>
        </>
    )
}

export default Movies;
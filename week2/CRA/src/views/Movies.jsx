import MovieList from '../components/MovieList';
   
const Movies = ({Movies}) => {

    return (
        <>      
            <h2>Movies</h2>
            <MovieList movies={Movies} />
        </>
    )
}

export default Movies;
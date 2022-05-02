

const Genres = ({genres}) => {
    return (
        <div className="movie-genre">
            <ul>
                {
                    genres.map((genre, index) => {
                        return <li key={index}>{genre}</li>
                    })
                }
            </ul>
    </div>
    );
}

export default Genres;
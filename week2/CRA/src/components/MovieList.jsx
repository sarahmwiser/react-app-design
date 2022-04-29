

const MovieList = ({movies}) => {

    return (
        <>
            <div className="movie-list">
                {
                    movies.map((item, index) => {

                        return (
                            <div key={index} className="movie">
                                <div className="movie-info">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                                <div className="movie-image">
                                    <img src={item.image} alt={item.alt} />
                                </div>
                            </div>
                        )
                    }   
    )


}

export default MovieList;
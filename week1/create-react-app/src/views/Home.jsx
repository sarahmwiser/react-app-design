import poster1 from "../assets/images/poster1.jpg";
import poster2 from "../assets/images/poster2.jpg";
import poster3 from "../assets/images/poster3.jpg";

const Home = () => {

    return (
        <main>
             <section className="jumbotron">
                <h1>Welcome to the Movie Reviewer Database</h1>
                <p>Comment and rate your favorite movies as well as add your own movies to the database.</p>
                <p>Fun for the whole family. 🍿 </p>
            </section>

            <section className="featured-movies-container">
                <h2>Featured Movies:</h2>
                <div className="featured-movies">
                    <div className="featured-movie">
                        <a href="#"><img src={poster1} alt="poster1" /></a>
                        <div className="movie-info">
                          <h3>The Unbearable Weight of Massive Talent</h3>
                        </div>
                    </div>
                    <div className="featured-movie">
                        <a href = "#"><img src={poster2} alt="poster2" /></a>
                        <div className="movie-info">
                            <h3>The Northernman</h3>
                        </div>
                    </div>
                    <div className="featured-movie">
                        <a href="#"><img src={poster3} alt="poster3" /></a>
                        <div className="movie-info">
                            <h3>Dr Strange in the Multiverse of Madness</h3>
                        </div>
                    </div>
                </div>
            </section>             
        </main>
    );

}

export default Home;
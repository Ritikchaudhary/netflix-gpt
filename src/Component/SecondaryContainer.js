import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = ()=>{
    const movies = useSelector(store => store.movies);
    return movies.nowPlayingMovies && movies.topratedMovies && movies.popularMovies && movies.nowPlayingMovies && (
        <div className="bg-black">
            <div className="-mt-44 z-10 relative px-6">
                    <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
                    <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
                    <MovieList title={"Top Rated"} movies={movies.topratedMovies}/>
                    <MovieList title={"Popular"} movies={movies.popularMovies}/>
            </div>
        </div>
    )
}
export default SecondaryContainer;
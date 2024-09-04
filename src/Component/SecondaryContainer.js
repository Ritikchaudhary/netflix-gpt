import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = ()=>{
    const movies = useSelector(store => store.movies);
    return movies.nowPlayingMovies && (
        <div className="bg-black">
            <div className="-mt-44 z-10 relative">
                    <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
                    <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
                    <MovieList title={"Hot Playing"} movies={movies.nowPlayingMovies}/>
                    <MovieList title={"Most Trending"} movies={movies.nowPlayingMovies}/>
            </div>
        </div>
    )
}
export default SecondaryContainer;
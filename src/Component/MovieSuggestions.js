import MovieList from "./MovieList"
import {useSelector} from "react-redux"

const MovieSuggestions = ()=>{
    const {gptMovies, searchedMovies} = useSelector(store => store.gpt);

    console.log(gptMovies, searchedMovies);
    
    if(!gptMovies) return null;

    return (
        <div className="p-4 mt-10 mx-[15%] bg-black rounded-lg">
            <div>
                {
                    gptMovies.map((movieName, index)=> <MovieList key={movieName} title={movieName} movies={searchedMovies[index].results}/>)
                }
            </div>
        </div>
    );
}

export default MovieSuggestions;
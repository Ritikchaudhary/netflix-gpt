import MovieCard from "./MovieCard";

const MovieList = ({title, movies})=>{
    console.log(movies);
    return (
        <div className="pl-4 pr-4 pt-4 text-white">
            <h1 className="mb-4 p-2 text-sm md:text-xl font-semibold">{title}</h1>
            <div className="flex">
                <div className="flex overflow-x-scroll no-scrollbar pb-4">
                    {
                      movies?.map(movie => <MovieCard key={movie.id} poster_path={movie.poster_path}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieList;
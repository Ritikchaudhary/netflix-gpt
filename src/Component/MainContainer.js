import {useSelector} from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = ()=>{
    const movies = useSelector(store => store.movies?.nowPlayingMovies);

    if(!movies) return;

    const showMovie = movies[0];

    const {original_title, overview, id} = showMovie;

    return (
        <div className="relative md:h-screen overflow-hidden bg-black pt-0 md:pt-0">
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    )
}

export default MainContainer;

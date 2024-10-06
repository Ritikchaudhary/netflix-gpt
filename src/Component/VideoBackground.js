import {useEffect} from "react"
import {OPTION_REQUEST} from "../Utils/constants"
import {useDispatch} from "react-redux"
import {addTrailerVideos} from "../Utils/moviesSlice"
import {useSelector} from "react-redux"

const VideoBackground = ({movieId}) => {
  const dispatch = useDispatch();
  const trailerKey = useSelector(store=>store.movies?.trailerVideos);

  const getTrailer = async (movieId)=>{
    const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos", OPTION_REQUEST);
    const json = await data.json();
    const trailerData = json.results?.filter((video)=> video.type == "Trailer");
    const trailer = trailerData.length ? trailerData[0] : json.results[0];
    dispatch(addTrailerVideos(trailer));
  }

  useEffect(()=>{
    getTrailer(movieId);
  }, []);

  return (
    <div className="w-screen md:h-screen">
        <iframe
        className="w-full aspect-video"
        src={"https://www.youtube.com/embed/"+ trailerKey?.key + "?&autoplay=1&mute=1"}
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
        </iframe>
    </div>
  )
}

export default VideoBackground;


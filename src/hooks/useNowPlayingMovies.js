import {useEffect} from "react"
import { OPTION_REQUEST } from "../Utils/constants"
import {useDispatch} from "react-redux"
import { addNowPlayingMovies } from "../Utils/moviesSlice"

const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch();

    const getNowPlayingMovies = async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", OPTION_REQUEST);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
        console.log(json.results);
    }

    useEffect(()=>{
        getNowPlayingMovies();
    }, []);
};

export default useNowPlayingMovies;
import {useEffect} from "react"
import { OPTION_REQUEST } from "../Utils/constants"
import {useDispatch} from "react-redux"
import {addNowPlayingMovies} from "../Utils/moviesSlice"
import {useSelector} from "react-redux"

const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector(store=>store.movies.nowPlayingMovies);
    const getNowPlayingMovies = async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", OPTION_REQUEST);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
    }

    useEffect(()=>{
        if(!nowPlayingMovies) getNowPlayingMovies();
    }, []);
};

export default useNowPlayingMovies;
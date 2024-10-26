import { OPTION_REQUEST } from "../Utils/constants"
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";
import {useSelector} from "react-redux"

const useTopRatedMovies = ()=>{
    const dispatch = useDispatch();
    const topRatedMovies = useSelector(store=>store.movies.topratedMovies);
    const getTopRatedMovies = async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1", OPTION_REQUEST);
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
    }

    useEffect(()=>{
        if(!topRatedMovies) getTopRatedMovies();
    }, []);
}

export default useTopRatedMovies;
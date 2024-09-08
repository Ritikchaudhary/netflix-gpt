import { OPTION_REQUEST } from "../Utils/constants"
import {useDispatch} from "react-redux"
import { addPopularMovies } from "../Utils/moviesSlice"
import {useEffect} from "react"

const usePopularMovies = ()=>{
    const dispatch = useDispatch();

    const getPopularMovies = async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/popular?page=1", OPTION_REQUEST);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    }

    useEffect(()=>{
        getPopularMovies();
    }, []);

}

export default usePopularMovies;
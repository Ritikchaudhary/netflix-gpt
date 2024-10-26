import { OPTION_REQUEST } from "../Utils/constants"
import {useDispatch} from "react-redux"
import { addPopularMovies } from "../Utils/moviesSlice"
import {useEffect} from "react"
import {useSelector} from "react-redux"

const usePopularMovies = ()=>{
    const dispatch = useDispatch();
    const popularMovies = useSelector(store=>store.movies.popularMovies);
    const getPopularMovies = async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/popular?page=1", OPTION_REQUEST);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    }

    useEffect(()=>{
        if(!popularMovies) getPopularMovies();
    }, []);

}

export default usePopularMovies;
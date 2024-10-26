import { OPTION_REQUEST } from "../Utils/constants";
import { useEffect } from "react";
import { addUpcomingMovies } from "../Utils/moviesSlice";
import { useDispatch } from "react-redux";
import {useSelector} from "react-redux"

const useUpcomingMovies = ()=>{
    const dispatch = useDispatch();
    const upcomingMovies = useSelector(store=>store.movies.upcomingMovies);
    const getUpcomingMovies = async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1", OPTION_REQUEST);
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));
    }

    useEffect(()=>{
        if(!upcomingMovies) getUpcomingMovies();
    }, []);


}

export default useUpcomingMovies;
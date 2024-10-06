import lang from "./languageConfiguration";
import { useSelector } from "react-redux";
import { useRef } from "react";
import client from "../Utils/openai";
import {OPTION_REQUEST} from "../Utils/constants"
import {useDispatch} from "react-redux"
import {addSearchedMovies} from "../Utils/GPTSlice"


const GPTSearchBar = ()=>{
    const dispatch = useDispatch();
    const searchText = useRef(null);
    const currLang = useSelector(store=>store.config.langKey);

    const searchMovies = async(movie)=>{
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+ movie +"&include_adult=false&language=en-US&page=1", OPTION_REQUEST);
        const json = await data.json();

        return json;
    }

    const handleGPTsearch = async ()=>{
        //Make an API request
        const searchQuery = "Act as a movie recommendation system and suggest some movies according to the query: "
        + searchText.current.value +
        " . Give 5 movies comma separated as illustrated in the following example: dhol, blue, dhoom, don, sholay";

        const gptMovies = await client.chat.completions.create({
            messages: [{ role: 'user', content: searchQuery }],
            model: 'gpt-3.5-turbo',
          });

          const movies = gptMovies.choices?.[0].message.content.split(",");

          const searchedMovieResults = movies.map(movie => searchMovies(movie))
          
          const PromiseResolved = await Promise.all(searchedMovieResults);

          dispatch(addSearchedMovies({gptMovies: movies, searchedMovies: PromiseResolved}));
    }
    return (
        <div className=" bg-black rounded-lg text-sm w-full md:w-1/2 md:ml-[25%] md:text-base mt-32">
            <form onSubmit={(e)=>e.preventDefault()} className=" grid grid-cols-12">
                    <input ref={searchText} className="rounded-md col-span-9 p-2 m-4" type="text" placeholder={lang[currLang]?.gptSearchPlaceHolder}></input>
                    <button className="col-span-3 text-white font-bold m-4 bg-red-600
                     rounded-md cursor-pointer hover:opacity-85" onClick={handleGPTsearch}>
                        {lang[currLang]?.search}
                    </button>
            </form>
        </div>
    )
}
export default GPTSearchBar;
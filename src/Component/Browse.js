import Header from "./Header"
import useHandleLogout from "../hooks/useHandleLogout"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import useUpcomingMovies from "../hooks/useUpcomingMovies"
import useTopRatedMovies from "../hooks/useTopRatedMovies"
import usePopularMovies from "../hooks/usePopularMovies"
import GPTSearchPage from "./GPTSearchPage"
import { useDispatch } from "react-redux"
import { toggleGPTSearchPageView } from "../Utils/GPTSlice"
import {useSelector} from "react-redux"

const Browse = ()=>{
    const dispatch = useDispatch();
    const toggleState = useSelector(store => store.gpt.toggleState);

    const handlelogout = useHandleLogout();

    useNowPlayingMovies();
    useUpcomingMovies();
    useTopRatedMovies();
    usePopularMovies();

    const handleClickGPTSearchPage = ()=>{
        dispatch(toggleGPTSearchPageView());
    }

    return (
        <div className="overflow-x-hidden">
            <div className="relative">
                <Header/>
                <div className="flex absolute space-x-4 top-6 right-16 z-10">
                    <button onClick={handleClickGPTSearchPage}
                        className="text-white font-bold  bg-orange-500 rounded-sm py-2 px-4 cursor-pointer hover:opacity-85">
                        Ask GPT
                    </button>
                    <button onClick={handlelogout} 
                        className="text-white font-bold py-2 px-4 bg-red-600 rounded-sm cursor-pointer hover:opacity-85">
                        logout
                    </button>
                </div>
            </div>

            <div>
                {toggleState ? <GPTSearchPage/> : (
                    <>
                        <MainContainer/>
                        <SecondaryContainer/>
                    </>
                ) }
            </div>
        </div>
    )
}

export default Browse;
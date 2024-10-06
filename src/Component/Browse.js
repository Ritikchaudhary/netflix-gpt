import Header from "./Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import useUpcomingMovies from "../hooks/useUpcomingMovies"
import useTopRatedMovies from "../hooks/useTopRatedMovies"
import usePopularMovies from "../hooks/usePopularMovies"
import GPTSearchPage from "./GPTSearchPage"
import {useSelector} from "react-redux"




const Browse = ()=>{
    //const dispatch = useDispatch();
    const toggleState = useSelector(store => store.gpt.toggleState);
    
    useNowPlayingMovies();
    useUpcomingMovies();
    useTopRatedMovies();
    usePopularMovies();

    return (
        <div className="overflow-x-hidden">
            <div className="relative">
                <Header/>
            </div>

            <div>
                {toggleState ? <GPTSearchPage/> : (
                    <>
                        <div>
                            <MainContainer/>
                            <SecondaryContainer/>
                        </div>
                    </>
                ) }
            </div>
        </div>
    )
}

export default Browse;
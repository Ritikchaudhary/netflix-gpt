import Header from "./Header"
import useHandleLogout from "../hooks/useHandleLogout"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"

const Browse = ()=>{
    const handlelogout = useHandleLogout();

    useNowPlayingMovies();

    return (
        <div className="overflow-x-hidden">
            <div className="relative">
                <Header/>
                <button onClick={handlelogout} className="text-white font-bold py-2 px-4 bg-red-600 rounded-sm absolute top-6 right-16 z-10 cursor-pointer">logout</button>
            </div>

            <div>
                <MainContainer/>
                <SecondaryContainer/>
            </div>
        </div>
    )
}

export default Browse;
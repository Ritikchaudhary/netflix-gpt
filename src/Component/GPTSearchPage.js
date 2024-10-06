import GPTSearchBar from "./GPTSearchBar"
import { BG_IMG } from "../Utils/constants"
import MovieSuggestions from "./MovieSuggestions"

const GPTSearchPage = ()=>{
    return (
        <div>
            <div>
                <GPTSearchBar/>
                <MovieSuggestions/>
            </div>
            <div className="fixed -z-10 top-0">
                <img src={BG_IMG} 
                    alt="bgimage" 
                    className="h-screen w-screen object-cover"/>
            </div>
        </div>
    )
}

export default GPTSearchPage;
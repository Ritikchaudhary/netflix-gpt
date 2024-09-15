import GPTSearchBar from "./GPTSearchBar"
import { BG_IMG } from "../Utils/constants"

const GPTSearchPage = ()=>{
    return (
        <div>
            <GPTSearchBar/>
            <div className="absolute -z-10 top-0">
                <img src={BG_IMG} alt="bgimage" className="h-screen w-screen"/>
            </div>
        </div>
    )
}

export default GPTSearchPage;
import {IMG_CDN_URL} from "../Utils/constants"

const MovieCard = ({poster_path})=>{
    if(!poster_path) return null;
    return (
        <div>
            <div className="w-[110px] md:w-[130px] mx-2 cursor-pointer hover:scale-105 transition-transform duration-300">
                <img alt="MovieCard"
                    src={IMG_CDN_URL + poster_path}
                    className="rounded-lg"
                />
            </div>
        </div>
    )
}

export default MovieCard;
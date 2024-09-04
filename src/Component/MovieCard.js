import {IMG_CDN_URL} from "../Utils/constants"

const MovieCard = ({poster_path})=>{
    return (
        <div>
            <div className="w-[130px] mx-2">
                <img alt="MovieCard"
                    src={IMG_CDN_URL + poster_path}
                    className="rounded-lg"
                />
            </div>
        </div>
    )
}

export default MovieCard;
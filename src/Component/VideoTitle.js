
const VideoTitle  = ({title, overview})=>{
 return (
    <div className="pt-52 pl-16 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
        <h1 className="text-lg -mt-20 md:text-5xl font-bold md:mb-8 md:mt-8">{title}</h1>
        <p className="hidden md:inline-block md:w-1/3">{overview}</p>
        <div className="mt-7">
            <button className="hidden md:inline-block px-10 py-2 text-lg font-semibold bg-gray-100 rounded-lg mr-2 text-black bg-opacity-65 hover:bg-opacity-90"> ▶ Play</button>
            <button className="hidden md:inline-block px-10 py-2 text-lg font-semibold bg-gray-100 rounded-lg ml-2  text-black bg-opacity-65 hover:bg-opacity-90"> ℹ️ Info</button>
        </div>
    </div>
 )
}

export default VideoTitle;
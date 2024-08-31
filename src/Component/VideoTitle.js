
const VideoTitle  = ({title, overview})=>{
 return (
    <div className="pt-52 pl-16 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
        <h1 className="text-5xl font-bold mb-8">{title}</h1>
        <p className="w-1/3">{overview}</p>
        <div className="mt-7">
            <button className="px-10 py-2 text-lg font-semibold bg-gray-100 rounded-lg mr-2 text-black bg-opacity-65 hover:bg-opacity-90"> ▶ Play</button>
            <button className="px-10 py-2 text-lg font-semibold bg-gray-100 rounded-lg ml-2  text-black bg-opacity-65 hover:bg-opacity-90"> ℹ️ Info</button>
        </div>
    </div>
 )
}

export default VideoTitle;
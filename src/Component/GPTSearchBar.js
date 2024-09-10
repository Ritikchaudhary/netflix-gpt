const GPTSearchBar = ()=>{
    return (
        <div className=" bg-black rounded-lg w-1/2 ml-[25%] mt-32">
            <form onSubmit={(e)=>e.preventDefault()} className=" grid grid-cols-12">
                    <input className="rounded-md col-span-9 p-2 m-4" type="text" placeholder="What will you like to watch?"></input>
                    <button className="col-span-3 text-white font-bold m-4 bg-red-600 rounded-md cursor-pointer hover:opacity-85">
                        Search
                    </button>
            </form>
        </div>
    )
}
export default GPTSearchBar;
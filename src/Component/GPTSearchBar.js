import lang from "./languageConfiguration";
import { useSelector } from "react-redux";

const GPTSearchBar = ()=>{
    const currLang = useSelector(store=>store.config.langKey);
    return (
        <div className=" bg-black rounded-lg w-1/2 ml-[25%] mt-32">
            <form onSubmit={(e)=>e.preventDefault()} className=" grid grid-cols-12">
                    <input className="rounded-md col-span-9 p-2 m-4" type="text" placeholder={lang[currLang]?.gptSearchPlaceHolder}></input>
                    <button className="col-span-3 text-white font-bold m-4 bg-red-600 rounded-md cursor-pointer hover:opacity-85">
                        {lang[currLang]?.search}
                    </button>
            </form>
        </div>
    )
}
export default GPTSearchBar;
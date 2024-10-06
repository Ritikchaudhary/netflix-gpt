import { auth } from "../Utils/firebase"
import { onAuthStateChanged } from "firebase/auth"
import {useEffect} from "react"
import {useDispatch} from "react-redux"
import {addUser, removeUser} from "../Utils/userSlice"
import { useNavigate } from "react-router-dom"
import {NETFLIX_LOGO} from "../Utils/constants"
import lang from "./languageConfiguration"
import { toggleGPTSearchPageView } from "../Utils/GPTSlice"
import {useSelector} from "react-redux"
import { SUPPORTED_LANG } from "../Utils/constants"
import { languageToggle } from "../Utils/langSlice"
import useHandleLogout from "../hooks/useHandleLogout"

const Header = ()=>{

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const toggleState = useSelector(store => store.gpt.toggleState);
    const currLang = useSelector(store=>store.config.langKey);

    const handlelogout = useHandleLogout();

    const handleClickGPTSearchPage = ()=>{
      dispatch(toggleGPTSearchPageView());
  }

  const handlelanguagechange = (e)=>{
      dispatch(languageToggle(e.target.value));
  }

    useEffect(()=>{
        const unsubscriber = onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName} = user;
              dispatch(addUser({uid: uid, email: email, displayName: displayName}));
              navigate("/browse");
            } else {
              dispatch(removeUser());
              navigate("/login");
            }
          });

          return ()=> unsubscriber();
    }, []);

    return (
        <div className="fixed w-screen bg-black bg-opacity-40 z-20">
            <img className="ml-4 w-28 md:w-52" src={NETFLIX_LOGO}
                alt="Logo"
            />
            <div className="flex absolute space-x-4 top-16 ml-[25%] md:right-16 md:top-6 z-10">
                    {toggleState && <select className="text-white rounded-sm px-4 py-2 bg-gray-900 opacity-100" onChange={handlelanguagechange}>
                            {
                                SUPPORTED_LANG.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option> )
                            }
                    </select>}

                    <button onClick={handleClickGPTSearchPage}
                        className="text-white font-bold bg-orange-500 rounded-sm py-2 px-4 cursor-pointer hover:opacity-85">
                            {toggleState ? lang[currLang].home : "Ask GPT"}
                    </button>
                    <button onClick={handlelogout} 
                        className="text-white font-bold py-2 px-4 bg-red-600 rounded-sm cursor-pointer hover:opacity-85">
                        {toggleState ? lang[currLang].logout : "Logout"}
                    </button>
                </div>
        </div>
    )
}

export default Header;
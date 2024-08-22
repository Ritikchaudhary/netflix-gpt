import { auth } from "../Utils/firebase"
import { onAuthStateChanged } from "firebase/auth"
import {useEffect} from "react"
import {useDispatch} from "react-redux"
import {addUser, removeUser} from "../Utils/userSlice"
import { useNavigate } from "react-router-dom"
import {NETFLIX_LOGO} from "../Utils/constants"

const Header = ()=>{

    const dispatch = useDispatch();
    const navigate = useNavigate();

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
        <div className="absolute w-screen pl-20 bg-gradient-to-b from-black z-10">
            <img className="w-52" src={NETFLIX_LOGO}
                alt="Logo"
            />
        </div>
    )
}

export default Header;
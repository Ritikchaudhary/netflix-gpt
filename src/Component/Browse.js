import Header from "./Header"
import {auth} from "../Utils/firebase"
import { signOut } from "firebase/auth";
import {useNavigate} from "react-router-dom"

const Browse = ()=>{
    const navigate = useNavigate();

    const handlelogout = ()=>{
        signOut(auth).then(() => {
            navigate("/login");
          }).catch((error) => {
            // An error happened.
          });
    };

    return (
        <div>
            <div className="relative">
                <Header/>
                <button onClick={handlelogout} className="text-white font-bold py-2 px-4 bg-red-600 rounded-sm absolute top-6 right-16 z-10 cursor-pointer">logout</button>
            </div>
        </div>
    )
}

export default Browse;
import {useNavigate} from "react-router-dom"
import {auth} from "../Utils/firebase"
import { signOut } from "firebase/auth";

const useHandleLogout = ()=>{
    const navigate = useNavigate();

    const handlelogout = ()=>{
        signOut(auth).then(() => {
            navigate("/login");
          }).catch((error) => {
            // An error happened.
          });
    };

    return handlelogout;
}

export default useHandleLogout;
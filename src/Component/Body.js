import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Login from "./Login"
import Browse from "./Browse"
import Signup from "./Signup"
import { auth } from "../Utils/firebase"
import { onAuthStateChanged } from "firebase/auth"
import {useEffect} from "react"
import {useDispatch} from "react-redux"
import {addUser, removeUser} from "../Utils/userSlice"

const Body = ()=>{
    const dispatch = useDispatch();

    const AppRouter = createBrowserRouter([
        {
            path: "/",
            element: <Signup/>
        },
        {
            path: "/browse",
            element: <Browse/>
        },
        {
            path: "/login",
            element: <Login/>
        }
    ]);

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName} = user;
              dispatch(addUser({uid: uid, email: email, displayName: displayName}));
            } else {
              dispatch(removeUser());
            }
          });

    }, []);

    return (
        <div>
            <RouterProvider router={AppRouter} />
        </div>
    )
}

export default Body;
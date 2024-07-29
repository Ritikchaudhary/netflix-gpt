import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Login from "./Login"
import Browse from "./Browse"
import Signup from "./Signup";

const Body = ()=>{

    const AppRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/browse",
            element: <Browse/>
        },
        {
            path: "/signup",
            element: <Signup/>
        }
    ]);

    return (
        <div>
            <RouterProvider router={AppRouter} />
        </div>
    )
}

export default Body;
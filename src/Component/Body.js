import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Login from "./Login"
import Browse from "./Browse"
import Signup from "./Signup";

const Body = ()=>{

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

    return (
        <div>
            <RouterProvider router={AppRouter} />
        </div>
    )
}

export default Body;
import Header from "./Header";
import {Link} from "react-router-dom";

const Login = ()=>{
    return (
    <div>
        <Header/>
        <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/6678e2ea-85e8-4db2-b440-c36547313109/IN-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_3457a8b1-284d-4bb5-979e-2a2e9bb342b3_large.jpg"
                alt="bgImage"
            />
        </div>
        <form className="absolute w-3/12 py-6 px-10 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70">
            <div>
                <h1 className="text-3xl font-bold mb-6">Sign In</h1>
                <input type="text" placeholder="Email or phone number" className="p-4 my-4 rounded-lg w-full bg-gray-900"></input>
                <input type="password" placeholder="Password" className="p-4 my-4 rounded-lg w-full bg-gray-900"></input>
                <button className="bg-red-600 p-2 my-4 rounded-md w-full hover:bg-red-700">Sign In</button>
                <h3 className="text-gray-400 text-center">OR</h3>
                <button className="p-2 my-4 rounded-md w-full border border-gray-300 font-semibold hover:bg-gray-950">Use a sign-in code</button>
                <h3 className="text-center text-gray-400 mt-4">New to Netflix? <Link to="/signup"><span className="text-white hover:underline">Sign up now.</span></Link></h3>
            </div>
            
        </form>
    </div>
    )
}

export default Login;
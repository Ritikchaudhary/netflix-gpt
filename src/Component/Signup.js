import Header from "./Header"
import {Link} from "react-router-dom"
const Signup = () => {
  return (
    <div>
        <Header/>
        <div className="absolute ">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/6678e2ea-85e8-4db2-b440-c36547313109/IN-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_3457a8b1-284d-4bb5-979e-2a2e9bb342b3_large.jpg"
                alt="bgImage"
            />
        </div>
        <div className="absolute text-white my-64 mx-auto right-0 left-0 text-center bg-black mr-40 ml-40 p-20 rounded-lg bg-opacity-25">
            <h1 className="font-extrabold text-5xl">Unlimited movies, TV shows and more</h1>
            <h3 className="text-4xl mt-4">Watch anywhere. Cancel anytime.</h3>
            <h4 className="text-2xl mt-4">Ready to watch? Enter your email to create or restart your membership.</h4>
            <form>
                <Link to="/login"><button className="bg-red-600 p-4 my-4 rounded-lg hover:bg-red-700 font-semibold w-2/12 text-lg">Get Started > </button></Link>
            </form>
        </div>
    </div>
  )
}

export default Signup;
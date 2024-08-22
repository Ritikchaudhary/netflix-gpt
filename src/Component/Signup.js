import Header from "./Header"
import {Link} from "react-router-dom"
import {BG_IMG} from "../Utils/constants"

const Signup = () => {
  return (
    <div>
        <Header/>
        <div className="absolute ">
            <img src={BG_IMG}
                alt="bgImage"
            />
        </div>
        <div className="absolute text-white my-64 mx-auto right-0 left-0 text-center bg-black mr-40 ml-40 p-20 rounded-lg bg-opacity-25">
            <h1 className="font-extrabold text-5xl">Unlimited movies, TV shows and more</h1>
            <h3 className="text-4xl mt-4">Watch anywhere. Cancel anytime.</h3>
            <h4 className="text-2xl mt-4">Ready to watch? Enter your email to create or restart your membership.</h4>
            <form>
                <Link to="/login"><button className="bg-red-600 p-4 my-4 rounded-lg hover:bg-red-700 font-semibold w-2/12 text-lg">Get Started {">"} </button></Link>
            </form>
        </div>
    </div>
  )
}

export default Signup;
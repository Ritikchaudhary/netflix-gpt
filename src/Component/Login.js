import Header from "./Header";
import {useState} from "react"
import { useRef } from "react";
import { validateData } from "../Utils/validateForm";
import { auth } from "../Utils/firebase";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {useNavigate} from "react-router-dom"
import { updateProfile } from "firebase/auth";
import {addUser} from "../Utils/userSlice"
import {useDispatch} from "react-redux"
import {BG_IMG} from "../Utils/constants"


const Login = ()=>{

    const [isSigninForm, setIsSigninForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleSigninForm = ()=>{
        setIsSigninForm(!isSigninForm);
    };

    const handleClick=()=>{
        
        const message = validateData(name?.current?.value, email?.current?.value, password?.current?.value);
        setErrorMessage(message);

        if(message) return;

        if(!isSigninForm){
          createUserWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
            .then((userCredential) => { 
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name?.current?.value,
                  }).then(() => {
                    const {uid, email, displayName} = auth.currentUser;
                    dispatch(addUser({uid: uid, email: email, displayName: displayName}));
                    navigate("/browse");
                  }).catch((error) => {
                    // An error occurred
                  });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorMessage);
            });
        }
        else{
            signInWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    navigate("/browse");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage);
                });
        }
    };


    return (
    <div>
        <Header/>
        <div className="absolute">
            <img src={BG_IMG}
                alt="bgImage"
            />
        </div>
        <form onSubmit={(e)=> e.preventDefault()} className="absolute w-3/12 py-6 px-10 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70">
            <div>
                <h1 className="text-3xl font-bold mb-6">{isSigninForm ? "Sign In" : "Sign Up"}</h1>
                {!isSigninForm && 
                <input ref={name} type="text" placeholder="Full Name" className="p-4 my-4 rounded-lg w-full bg-gray-900"></input>
                }
                <input ref={email} type="text" placeholder="Email address" className="p-4 my-4 rounded-lg w-full bg-gray-900"></input>
                <input ref={password} type="password" placeholder="Password" className="p-4 my-4 rounded-lg w-full bg-gray-900"></input>
                <p className="text-red-600 font-bold text-base">{errorMessage}</p>
                <button onClick={handleClick} className="bg-red-600 p-2 my-4 rounded-md w-full hover:bg-red-700">
                    {!isSigninForm ? "Sign up" : "Sign In"}
                    </button>
                <h3 className="text-gray-400 text-center">OR</h3>
                {isSigninForm && <button className="p-2 my-4 rounded-md w-full border border-gray-300 font-semibold hover:bg-gray-950">Use a sign-in code</button>}
                <p className="text-center text-gray-400 mt-4">{isSigninForm ? "New to Netflix?" : "Already Registered?"}<span onClick={toggleSigninForm} className="text-white cursor-pointer">{isSigninForm ? " Sign up now." : " Sign In now."}</span></p>
            </div>
            
        </form>
    </div>
    )
}

export default Login;
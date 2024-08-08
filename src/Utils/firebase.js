import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9CRMoEP8PV-NifxRAucKAs585mbJ8InY",
  authDomain: "netflix-gpt-f936c.firebaseapp.com",
  projectId: "netflix-gpt-f936c",
  storageBucket: "netflix-gpt-f936c.appspot.com",
  messagingSenderId: "293699596650",
  appId: "1:293699596650:web:846201b5b93b44bfb0b513",
  measurementId: "G-NYFS0KXVY3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();
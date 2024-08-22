import {configureStore} from "@reduxjs/toolkit"
import userdataReducer from "./userSlice"
import moviesReducer from "./moviesSlice"

const appStore = configureStore({
    reducer: {
        userdata: userdataReducer,
        movies: moviesReducer,
    },
})

export default appStore;
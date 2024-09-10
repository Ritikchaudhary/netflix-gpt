import {configureStore} from "@reduxjs/toolkit"
import userdataReducer from "./userSlice"
import moviesReducer from "./moviesSlice"
import gptReducer from "./GPTSlice"

const appStore = configureStore({
    reducer: {
        userdata: userdataReducer,
        movies: moviesReducer,
        gpt: gptReducer,
    },
})

export default appStore;
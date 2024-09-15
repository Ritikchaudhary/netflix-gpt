import {configureStore} from "@reduxjs/toolkit"
import userdataReducer from "./userSlice"
import moviesReducer from "./moviesSlice"
import gptReducer from "./GPTSlice"
import configReducer from "./langSlice"

const appStore = configureStore({
    reducer: {
        userdata: userdataReducer,
        movies: moviesReducer,
        gpt: gptReducer,
        config: configReducer, 
    },
})

export default appStore;
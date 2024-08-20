import {configureStore} from "@reduxjs/toolkit"
import userdataReducer from "./userSlice"

const appStore = configureStore({
    reducer: {
        userdata: userdataReducer,
    }
})

export default appStore;
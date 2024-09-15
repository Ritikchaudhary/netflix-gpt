import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
    name: "config",
    initialState: {
        langKey: "en",
    },
    reducers: {
        languageToggle: (state, action)=>{
            state.langKey = action.payload;
        },
    },
});

export const {languageToggle} = langSlice.actions;

export default langSlice.reducer;
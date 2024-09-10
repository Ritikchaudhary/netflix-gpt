import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
    name: "gpt",
    initialState: {
        toggleState: false,
    },
    reducers: {
        toggleGPTSearchPageView: (state, action)=>{
            state.toggleState = !state.toggleState;
        },
    }
});

export const {toggleGPTSearchPageView} = GPTSlice.actions;
export default GPTSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
    name: "gpt",
    initialState: {
        toggleState: false,
        gptMovies: null,
        searchedMovies: null,
    },
    reducers: {
        toggleGPTSearchPageView: (state, action)=>{
            state.toggleState = !state.toggleState;
        },
        addSearchedMovies : (state, action)=>{
            const {gptMovies, searchedMovies} = action.payload;
            state.gptMovies = gptMovies;
            state.searchedMovies = searchedMovies;
        },
    }
});

export const {toggleGPTSearchPageView, addSearchedMovies} = GPTSlice.actions;
export default GPTSlice.reducer;
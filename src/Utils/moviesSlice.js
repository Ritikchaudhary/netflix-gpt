import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideos: null,
        upcomingMovies: null,
        topratedMovies: null,
        popularMovies: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideos: (state,action)=>{
            state.trailerVideos = action.payload;
        },
        addUpcomingMovies:(state, action)=>{
            state.upcomingMovies = action.payload;
        },
        addTopRatedMovies: (state, action)=>{
            state.topratedMovies = action.payload;
        },
        addPopularMovies: (state, action)=>{
            state.popularMovies = action.payload;
        }
    },
});

export const {addNowPlayingMovies, addTrailerVideos,addUpcomingMovies, addTopRatedMovies, addPopularMovies} = moviesSlice.actions;

export default moviesSlice.reducer;
import { configureStore } from "@reduxjs/toolkit";
//import postsReducer from '../features/posts/Postslist'
import { postsSlice } from "../features/posts/postsSlice"
import { usersSlice } from '../features/users/usersSlice';

export const store = configureStore({
    reducer: {
        posts: postsSlice.reducer,
        users: usersSlice.reducer
    }
})
import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./Slices/userSlice";
import  langReducer  from "./Slices/langSlice";

export const store = configureStore({
    reducer:{
        user:userReducer,
        lang:langReducer
    }
})
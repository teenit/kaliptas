import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./Slices/userSlice";
import  langReducer  from "./Slices/langSlice";
import maintenanceSlice from "./Slices/maintenanceSlice";

export const store = configureStore({
    reducer:{
        user:userReducer,
        lang:langReducer,
        mode:maintenanceSlice
    }
})
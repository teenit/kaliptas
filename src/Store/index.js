import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./Slices/userSlice";
import  langReducer  from "./Slices/langSlice";
import  cartReducer from "./Slices/cartSlice";
import  maintenanceSlice from "./Slices/maintenanceSlice";

export const store = configureStore({
    reducer:{
        user:userReducer,
        lang:langReducer,
        cart:cartReducer,
        mode:maintenanceSlice
    }
})
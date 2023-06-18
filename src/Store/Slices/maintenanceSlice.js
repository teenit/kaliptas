import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    mode:true
}

const maintenanceSlice = createSlice({
    name: "mode",
    initialState,
    reducers:{
        setMode(state, action){
            state.mode = action.payload.mode
        },
        defaultMode(state){
            state.mode = true
        }
    }
})

export const {setMode, defaultMode} = maintenanceSlice.actions;
export default maintenanceSlice.reducer
import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    showAdded:false,
    text: ""
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        showTooltip(state, action){
            state.showAdded = true;
            state.text = action.payload.tootltipText;
        },
        hideTooltip(state, action){
            state.showAdded = false;
            state.text = "";
        }
    }
})

export const {showTooltip, hideTooltip} = cartSlice.actions;
export default cartSlice.reducer
import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    userName: localStorage.getItem("userName"),
    token: localStorage.getItem("token"),
    email: localStorage.getItem("email")
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        setUser(state, action){
            state.token = action.payload.token
            state.email = action.payload.email
            state.userName = action.payload.userName
        },
        removeUser(state){
            state.token = null
            state.email = null
            state.userName = null
            localStorage.removeItem('token')
            localStorage.removeItem('email')
            localStorage.removeItem('userName')
        }
    }
})

export const {setUser, removeUser} = userSlice.actions;
export default userSlice.reducer
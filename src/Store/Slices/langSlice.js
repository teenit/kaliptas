import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    lang:localStorage.getItem('lang')
}

const langSlice = createSlice({
    name: "lang",
    initialState,
    reducers:{
        setLang(state, action){
            state.lang = action.payload.lang
        },
        defaultLang(state){
            state.lang = ''
            localStorage.setItem('lang','')
        }
    }
})

export const {setLang, defaultLang} = langSlice.actions;
export default langSlice.reducer